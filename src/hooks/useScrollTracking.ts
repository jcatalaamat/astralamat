import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../utils/analytics';

// Scroll depth milestones to track
const SCROLL_MILESTONES = [25, 50, 75, 100];

export function useScrollTracking() {
  // Track which milestones have been reached to avoid duplicate tracking
  const trackedMilestones = useRef<Set<number>>(new Set());
  const maxScrollDepth = useRef<number>(0);

  useEffect(() => {
    // Reset tracked milestones when component mounts
    trackedMilestones.current = new Set();
    maxScrollDepth.current = 0;

    const handleScroll = () => {
      // Calculate scroll depth percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate the current scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = scrollableHeight > 0
        ? Math.round((scrollTop / scrollableHeight) * 100)
        : 100;

      // Update max scroll depth
      if (scrollPercentage > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercentage;
      }

      // Check each milestone
      SCROLL_MILESTONES.forEach((milestone) => {
        // If we've reached this milestone and haven't tracked it yet
        if (
          scrollPercentage >= milestone &&
          !trackedMilestones.current.has(milestone)
        ) {
          // Track the milestone
          trackScrollDepth(milestone);
          trackedMilestones.current.add(milestone);
        }
      });
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    // Check initial scroll position (in case page loads scrolled down)
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []); // Empty dependency array - only run on mount/unmount

  return {
    trackedMilestones: Array.from(trackedMilestones.current),
    maxScrollDepth: maxScrollDepth.current,
  };
}
