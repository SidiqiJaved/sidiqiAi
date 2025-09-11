// Simple analytics helper for tracking user interactions
export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event, properties);
      }
    }
  },

  page: (path: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title,
      });
    }
  },
};

// Track specific portfolio interactions
export const trackPortfolioEvents = {
  projectClick: (projectTitle: string) => {
    analytics.track('project_click', {
      project_title: projectTitle,
    });
  },

  blogPostClick: (postTitle: string) => {
    analytics.track('blog_post_click', {
      post_title: postTitle,
    });
  },

  socialClick: (platform: string) => {
    analytics.track('social_click', {
      platform,
    });
  },

  contactClick: (method: string) => {
    analytics.track('contact_click', {
      method,
    });
  },
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}