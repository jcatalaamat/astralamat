// Analytics Event Types
export type AnalyticsEventName =
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'external_link_click'
  | 'scroll_depth'
  | 'cta_click';

// Event Data Interface
export interface AnalyticsEventData {
  [key: string]: string | number | boolean | undefined;
}

// Track Event Function
export function trackEvent(
  eventName: AnalyticsEventName,
  eventData?: AnalyticsEventData
): void {
  // For now, use console.log for tracking
  // This can be replaced with Google Analytics, Mixpanel, or other analytics services later
  console.log('[Analytics Event]', {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...eventData,
  });

  // Future implementation example:
  // if (window.gtag) {
  //   window.gtag('event', eventName, eventData);
  // }
}

// Helper function for CTA click tracking
export function trackCTAClick(
  buttonLabel: string,
  location?: string,
  destination?: string
): void {
  trackEvent('cta_click', {
    button_label: buttonLabel,
    location: location || window.location.pathname,
    destination,
  });
}

// Helper function for scroll depth tracking
export function trackScrollDepth(
  depth: number,
  page?: string
): void {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page: page || window.location.pathname,
  });
}

// Helper function for page view tracking
export function trackPageView(
  pagePath: string,
  pageTitle?: string
): void {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
}

// Helper function for external link tracking
export function trackExternalLink(
  url: string,
  linkText?: string
): void {
  trackEvent('external_link_click', {
    url,
    link_text: linkText,
    source_page: window.location.pathname,
  });
}

// Helper function for form submission tracking
export function trackFormSubmit(
  formName: string,
  formData?: AnalyticsEventData
): void {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
}
