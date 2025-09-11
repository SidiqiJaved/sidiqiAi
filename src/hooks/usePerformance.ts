import { useEffect } from 'react';
import { performanceTracking, analytics } from '../utils/analytics';

export function usePagePerformance() {
  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigationTiming = window.performance.timing;
        const loadTime = navigationTiming.loadEventEnd - navigationTiming.navigationStart;
        
        // Track key performance metrics
        analytics.trackSEOEvent('page_load_time', 'Performance', 'total_load_time', loadTime);
        
        // Track individual timing metrics for SEO optimization
        const timingMetrics = {
          dns_lookup: navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart,
          tcp_connection: navigationTiming.connectEnd - navigationTiming.connectStart,
          server_response: navigationTiming.responseEnd - navigationTiming.requestStart,
          dom_processing: navigationTiming.domContentLoadedEventStart - navigationTiming.responseEnd,
          resource_loading: navigationTiming.loadEventEnd - navigationTiming.domContentLoadedEventEnd
        };

        Object.entries(timingMetrics).forEach(([metric, time]) => {
          analytics.trackSEOEvent('timing_metric', 'Performance', metric, time);
        });
      }
    };

    // Track after page is fully loaded
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
      return () => window.removeEventListener('load', trackPageLoad);
    }
  }, []);

  useEffect(() => {
    // Initialize Core Web Vitals tracking
    performanceTracking.trackWebVitals();
    performanceTracking.trackLoadTime();
  }, []);
}

export function useScrollTracking() {
  useEffect(() => {
    let lastScrollPosition = 0;
    let scrollDirection: 'up' | 'down' = 'down';
    
    const trackScrollBehavior = () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > lastScrollPosition) {
        scrollDirection = 'down';
      } else if (currentScrollPosition < lastScrollPosition) {
        scrollDirection = 'up';
      }
      
      lastScrollPosition = currentScrollPosition;
      
      // Track scroll engagement for SEO
      const scrollPercent = Math.round(
        (currentScrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > 0 && scrollPercent % 25 === 0) {
        analytics.trackSEOEvent('scroll_engagement', 'User Behavior', `${scrollDirection}_${scrollPercent}%`, scrollPercent);
      }
    };

    const throttledScrollTracker = throttle(trackScrollBehavior, 1000);
    window.addEventListener('scroll', throttledScrollTracker);
    
    return () => window.removeEventListener('scroll', throttledScrollTracker);
  }, []);
}

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

export function useSEOTracking() {
  usePagePerformance();
  useScrollTracking();
}
