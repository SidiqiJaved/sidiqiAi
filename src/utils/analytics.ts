// Enhanced analytics and SEO tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Core analytics functions
export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Console log for development (always enabled for now)
      console.log('Analytics Event:', event, properties);
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

  // Enhanced SEO event tracking
  trackSEOEvent: (action: string, category: string, label?: string, value?: number) => {
    analytics.track(action, {
      event_category: category,
      event_label: label,
      value: value,
      custom_dimension_1: 'seo_optimized', // Custom dimension for SEO tracking
    });
  }
};

// Portfolio-specific tracking
export const trackPortfolioEvents = {
  projectClick: (projectTitle: string) => {
    analytics.track('project_click', {
      project_title: projectTitle,
      engagement_type: 'project_interaction'
    });
  },

  blogPostClick: (postTitle: string) => {
    analytics.track('blog_post_click', {
      post_title: postTitle,
      content_type: 'blog_post'
    });
  },

  socialClick: (platform: string) => {
    analytics.track('social_click', {
      platform,
      interaction_type: 'external_link'
    });
  },

  contactClick: (method: string) => {
    analytics.track('contact_click', {
      method,
      conversion_action: 'contact_initiated'
    });
  },

  // New SEO-focused tracking
  ctaClick: (ctaType: string, section: string) => {
    analytics.trackSEOEvent('cta_click', 'CTA', `${section}_${ctaType}`);
  },

  scrollDepth: (percentage: number) => {
    analytics.trackSEOEvent('scroll_depth', 'Engagement', `${percentage}%`, percentage);
  },

  timeOnPage: (seconds: number, section: string) => {
    analytics.trackSEOEvent('time_on_page', 'Engagement', section, seconds);
  },

  searchQuery: (query: string) => {
    analytics.trackSEOEvent('site_search', 'Search', query);
  }
};

// Enhanced engagement tracking for SEO
export const engagementTracking = {
  init: () => {
    if (typeof window === 'undefined') return;

    let maxScroll = 0;
    let sectionStartTimes: { [key: string]: number } = {};

    // Scroll depth tracking
    const trackScrollDepthThrottled = throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        trackPortfolioEvents.scrollDepth(scrollPercent);
      }
    }, 500);

    // Section visibility tracking
    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id;
            
            if (entry.isIntersecting) {
              sectionStartTimes[sectionId] = Date.now();
            } else if (sectionStartTimes[sectionId]) {
              const timeSpent = Math.round((Date.now() - sectionStartTimes[sectionId]) / 1000);
              if (timeSpent > 3) { // Only track if spent more than 3 seconds
                trackPortfolioEvents.timeOnPage(timeSpent, sectionId);
              }
              delete sectionStartTimes[sectionId];
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section) => observer.observe(section));
    };

    // Initialize tracking
    window.addEventListener('scroll', trackScrollDepthThrottled);
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeSections);
    } else {
      observeSections();
    }

    // Track page exit
    window.addEventListener('beforeunload', () => {
      Object.keys(sectionStartTimes).forEach((sectionId) => {
        const timeSpent = Math.round((Date.now() - sectionStartTimes[sectionId]) / 1000);
        if (timeSpent > 3) {
          trackPortfolioEvents.timeOnPage(timeSpent, sectionId);
        }
      });
    });
  }
};

// Performance monitoring for SEO
export const performanceTracking = {
  trackWebVitals: () => {
    if (typeof window === 'undefined') return;

    // Core Web Vitals tracking
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (entry.entryType === 'largest-contentful-paint') {
          analytics.trackSEOEvent('web_vital', 'Performance', 'LCP', Math.round(entry.startTime));
        }
        if (entry.entryType === 'first-input') {
          analytics.trackSEOEvent('web_vital', 'Performance', 'FID', Math.round(entry.processingStart - entry.startTime));
        }
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          analytics.trackSEOEvent('web_vital', 'Performance', 'CLS', entry.value);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for older browsers
      console.log('Performance observer not supported');
    }
  },

  trackLoadTime: () => {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      analytics.trackSEOEvent('page_load_time', 'Performance', 'total_load_time', loadTime);
    });
  }
};

// Utility function to throttle function calls
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Initialize all tracking
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    engagementTracking.init();
    performanceTracking.trackWebVitals();
    performanceTracking.trackLoadTime();
    
    // Track initial page load
    analytics.page(window.location.pathname, document.title);
  }
};