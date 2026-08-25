/**
 * Centralized tracking utility for VOORA website.
 * Captures campaign URL parameters (srd, source, subsource, channel)
 * and stores them in sessionStorage/localStorage.
 * Attaches these fields to all lead submissions and logs them cleanly.
 */

// Mapping of SRD IDs to Campaign Attribution Parameters
export const SRD_MAP = {
  "697b6338e11487ffca7f4bdb": { channel: "website", project: "Voora One Sea", source: "google", subsource: "ADV_Google_Search_LeadForm" },
  "6960b6fb58f1e70fd2cec995": { channel: "website", project: "Voora One Sea", source: "google", subsource: "Google_Search" },
  "6964e10ae11487204b5ea9ef": { channel: "website", project: "Voora One Sea", source: "google_lp", subsource: "ADV_Google_Search_OneSea" },
  "6964e222e114872c6c203b48": { channel: "website", project: "Voora One Sea", source: "google_lp", subsource: "Google_LP_Display_Adv_OneSea" },

  "697b4703a3d855705e598c40": { channel: "website", project: "", source: "website", subsource: "Website Lead" },
  "69a938465d8defc8ef5c5340": { channel: "website", project: "Voora One Sea", source: "website", subsource: "Website Lead" },
  "69a95889940368ae27a16448": { channel: "website", project: "Voora Agastya Heights", source: "website", subsource: "Website Lead" },
  "69a958b6e11487c4a110c9e8": { channel: "website", project: "Voora Highway Haven", source: "website", subsource: "Website Lead" },
  "69a958d00d18513210d93862": { channel: "website", project: "Voora Beckford", source: "website", subsource: "Website Lead" },
  "69a958f40d185130a0d9404f": { channel: "website", project: "Voora Westside", source: "website", subsource: "Website Lead" },
  "69a959082f31c6dcf2dce3c2": { channel: "website", project: "Voora Oceans27", source: "website", subsource: "Website Lead" },
  "6a464b0d58f1e7adf5c6967c": { channel: "website", project: "Voora Tech Edge", source: "website", subsource: "Website Lead" },

  "697891dbe11487ebe9c9b7b3": { channel: "website", project: "Voora Agastya Heights", source: "google_lp", subsource: "ADV_Google_Search_AgastyaHeights" },
  "697b638f58f1e73854e37f1a": { channel: "website", project: "Voora Agastya Heights", source: "google", subsource: "ADV_Google_Search_LeadForm" },
  "697b63ca58f1e73854e37f4e": { channel: "website", project: "Voora Highway Haven", source: "google", subsource: "ADV_Google_Search_LeadForm" },

  "697892da3d8552e6b85716a": { channel: "website", project: "Voora One Sea", source: "google_lp_chat_agent", subsource: "Google LP_Ad Vinci_ChatAgent_OneSea" },
  "69d3d64a735daf076c4e1ab6": { channel: "website", project: "Voora Agastya Heights", source: "google_lp_chat_agent", subsource: "Google LP_Ad Vinci_ChatAgent_Agastya Heights" },
  "69d3d677735daf076c4e1abc": { channel: "website", project: "Voora Highway Haven", source: "google_lp_chat_agent", subsource: "Google LP_Ad Vinci_ChatAgent_Highway Haven" },

  "6989946d735daf0f3e96524d": { channel: "collect chat", project: "", source: "collect_chat", subsource: "Collect Chat Lead" },
  "698994850d1851e6c3dfa9cc": { channel: "collect chat", project: "", source: "collect_chat", subsource: "Website_collectchat_lead" },
  "698994985d8def2d5ca50b0a": { channel: "collect chat", project: "", source: "collect_chat", subsource: "Landingpage_collectchat_lead" },
  "69899582a3d855e1f03a48c4": { channel: "collect chat", project: "Voora Highway Haven", source: "google", subsource: "LandingPage_VooraHighwayHaven_collectchat_lead" }
};

// Initialize and capture parameters from URL
export function initTracker() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const srd = urlParams.get('srd');

  let channel = '';
  let source = '';
  let subsource = '';
  let mappedProject = '';

  if (srd && SRD_MAP[srd]) {
    // If SRD is found in the predefined lookup map, use its values
    const mapped = SRD_MAP[srd];
    channel = mapped.channel;
    source = mapped.source;
    subsource = mapped.subsource;
    mappedProject = mapped.project;
  } else {
    // Otherwise fallback to URL params
    channel = urlParams.get('channel') || urlParams.get('utm_medium') || '';
    source = urlParams.get('source') || urlParams.get('utm_source') || '';
    subsource = urlParams.get('subsource') || urlParams.get('utm_campaign') || '';
  }

  // Store in sessionStorage if we got new values
  if (srd) sessionStorage.setItem('voora_srd', srd);
  if (channel) sessionStorage.setItem('voora_channel', channel);
  if (source) sessionStorage.setItem('voora_source', source);
  if (subsource) sessionStorage.setItem('voora_subsource', subsource);
  if (mappedProject) sessionStorage.setItem('voora_project', mappedProject);
}

// Retrieve captured parameters
export function getLeadTrackerParams() {
  if (typeof window === 'undefined') {
    return { srd: '', source: '', subsource: '', channel: '' };
  }

  return {
    srd: sessionStorage.getItem('voora_srd') || '',
    source: sessionStorage.getItem('voora_source') || 'website', // Default source to 'website'
    subsource: sessionStorage.getItem('voora_subsource') || 'Website Lead', // Default subsource
    channel: sessionStorage.getItem('voora_channel') || 'website', // Default channel
    mappedProject: sessionStorage.getItem('voora_project') || ''
  };
}

// Save lead data locally and output to console
export function captureLead(formName, formData) {
  const trackerParams = getLeadTrackerParams();

  // Create full lead payload
  const lead = {
    id: 'lead_' + Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    form: formName,
    ...formData,
    srd: trackerParams.srd,
    source: trackerParams.source,
    subsource: trackerParams.subsource,
    channel: trackerParams.channel
  };

  // Save to localStorage leads collection
  try {
    const existingLeads = JSON.parse(localStorage.getItem('voora_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('voora_leads', JSON.stringify(existingLeads));
  } catch (e) {
    console.error('Error saving lead to localStorage:', e);
  }

  // --- Sell.do API Integration ---
  try {
    let finalSrd = trackerParams.srd;
    let finalProjectName = formData.project;

    // Normalize project names and assign SRD if missing
    if (formData.project) {
      // Strip spaces to safely match "onesea", "one sea", "vooraonesea"
      const p = formData.project.toLowerCase().replace(/\s+/g, '');

      if (p.includes('onesea')) {
        if (!finalSrd) finalSrd = "69a938465d8defc8ef5c5340";
        finalProjectName = "Voora One Sea";
      } else if (p.includes('agastya')) {
        if (!finalSrd) finalSrd = "69a95889940368ae27a16448";
        finalProjectName = "Voora Agastya Heights";
      } else if (p.includes('highway')) {
        if (!finalSrd) finalSrd = "69a958b6e11487c4a110c9e8";
        finalProjectName = "Voora Highway Haven";
      } else if (p.includes('beckford')) {
        if (!finalSrd) finalSrd = "69a958d00d18513210d93862";
        finalProjectName = "Voora Beckford";
      } else if (p.includes('westside')) {
        if (!finalSrd) finalSrd = "69a958f40d185130a0d9404f";
        finalProjectName = "Voora Westside";
      } else if (p.includes('ocean')) {
        if (!finalSrd) finalSrd = "69a959082f31c6dcf2dce3c2";
        finalProjectName = "Voora Ocean's 27";
      } else if (p.includes('techedge')) {
        if (!finalSrd) finalSrd = "6a464b0d58f1e7adf5c6967c";
        finalProjectName = "Voora Tech Edge";
      }
    }

    // Ultimate fallback if project doesn't match
    if (!finalSrd) {
      finalSrd = "697b4703a3d855705e598c40"; // general website SRD
    }

    const params = new URLSearchParams({
      api_key: '86b1b80a7216cfef63e24175bbfc0b82',
      'sell_do[form][lead][name]': formData.name || '',
      'sell_do[form][lead][email]': formData.email || '',
      'sell_do[form][lead][phone]': formData.phone || '',
      'sell_do[form][custom][custom_Designation]': formData.designation || '',
      'sell_do[form][custom][custom_Preferred Duration]': formData.preferredDuration || formData.planDuration || '',
      'sell_do[form][custom][custom_Preferred Location]': formData.preferredLocation || formData.locationPref || '',
      'sell_do[campaign][srd]': finalSrd
    });

    // Add any other specific fields, such as project
    if (finalProjectName) {
      params.append('sell_do[form][custom][custom_Project Interest]', finalProjectName);
    }

    fetch(`https://app.sell.do/api/leads/create?${params.toString()}`, {
      method: 'POST',
      mode: 'no-cors'
    }).then(res => {
      console.log('Sell.do API call dispatched');
    }).catch(err => {
      console.error('Sell.do API error:', err);
    });
  } catch (err) {
    console.error('Failed to construct Sell.do API call', err);
  }

  // Visual Console Logging
  console.group('%c 📥 VOORA LEAD CAPTURED SUCCESSFULLY ', 'background: #935ce9; color: #fff; font-size: 12px; font-weight: bold; padding: 4px; border-radius: 4px;');
  console.log('%cForm Name:%c ' + formName, 'font-weight: bold; color: #935ce9;', 'color: inherit;');
  console.log('%cLead Data:%c', 'font-weight: bold; color: #935ce9;', 'color: inherit;', formData);
  console.log('%cTracking Params:%c', 'font-weight: bold; color: #935ce9;', 'color: inherit;', {
    srd: trackerParams.srd,
    source: trackerParams.source,
    subsource: trackerParams.subsource,
    channel: trackerParams.channel
  });
  console.log('%cFull Lead Payload:%c', 'font-weight: bold; color: #10b981;', 'color: inherit;', lead);
  console.groupEnd();

  return lead;
}