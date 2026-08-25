import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Collect Chat Integration Snippet
    (function(w, d) { 
      w.CollectId = "6788e6e29b94a96edb59f2d7"; 
      var h = d.head || d.getElementsByTagName("head")[0]; 
      var s = d.createElement("script"); 
      s.setAttribute("type", "text/javascript"); 
      s.async = true; 
      s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
      h.appendChild(s); 
    })(window, document);

    // Cleanup isn't strictly necessary for Collect Chat as it's meant to persist,
    // but in a React SPA it's good practice. However, since the ChatWidget is 
    // typically mounted once at the root level, we can just leave it.
  }, []);

  // Collect Chat automatically injects its own UI bubble into the DOM,
  // so this component doesn't need to render any HTML itself.
  return null;
}