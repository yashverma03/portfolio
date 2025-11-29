declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: unknown;
      }
    ) => void;
  }
}

/**
 * Track a click event in Google Analytics
 * @param type - Type of click: 'contact', 'resume', 'linkedin', 'github', 'project_live', 'project_github'
 * @param metadata - Optional metadata: 'email', 'phone', or project name
 */
export const trackClick = (type: string, metadata?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: type,
      event_label: metadata || ''
    });
  }
};
