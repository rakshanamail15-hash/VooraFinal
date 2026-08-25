Add-Type -AssemblyName System.Drawing
$files = Get-ChildItem -Path "src\assets\image" -File | Where-Object Length -gt 2MB

foreach ($file in $files) {
    Write-Host "Resizing $($file.Name)..."
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        $newWidth = 1200
        if ($img.Width -gt 1200) {
            $newHeight = [math]::Round($newWidth / ($img.Width / $img.Height))
        } else {
            $newWidth = $img.Width
            $newHeight = $img.Height
        }
        
        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        
        # High quality resizing
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        $format = $img.RawFormat
        $img.Dispose()
        
        # Save to a temporary file
        $tmpPath = $file.FullName + ".tmp"
        
        # If it's a PNG, keep PNG, otherwise JPEG
        if ($file.Extension -match "\.png$") {
            $bmp.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Png)
        } else {
            # Use JPEG encoder parameters to reduce quality slightly for massive compression
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]80)
            $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageDecoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
            $bmp.Save($tmpPath, $jpegCodec, $encoderParams)
        }
        
        $bmp.Dispose()
        $graph.Dispose()
        
        Remove-Item -Force $file.FullName
        Move-Item -Force $tmpPath $file.FullName
        Write-Host "Done $($file.Name)"
    } catch {
        Write-Host "Failed to process $($file.Name): $_"
    }
}
Write-Host "All done!"
