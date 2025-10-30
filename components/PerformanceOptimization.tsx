import { useEffect } from "react";

// Performance optimization utilities
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Enable GPU acceleration for animations
    const enableGPUAcceleration = () => {
      const style = document.createElement("style");
      style.textContent = `
        * {
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          -ms-transform: translateZ(0);
          -o-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .animate-smooth {
          will-change: transform, opacity;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `;
      document.head.appendChild(style);
    };

    // Reduce motion for users who prefer it
    const respectReducedMotion = () => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      
      if (mediaQuery.matches) {
        const style = document.createElement("style");
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollState = () => {
        // Throttle scroll events
        ticking = false;
      };
      
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollState);
          ticking = true;
        }
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      
      return () => window.removeEventListener("scroll", onScroll);
    };

    enableGPUAcceleration();
    respectReducedMotion();
    const cleanupScroll = optimizeScroll();

    return cleanupScroll;
  }, []);
};

// Lazy loading utility for images
export const useLazyLoading = () => {
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll("img[data-src]");
      lazyImages.forEach((img) => imageObserver.observe(img));

      return () => imageObserver.disconnect();
    }
  }, []);
};

// Preload critical resources
export const useResourcePreloading = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (fontUrl: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      link.href = fontUrl;
      document.head.appendChild(link);
    };

    // Preload critical images
    const preloadImage = (imageUrl: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = imageUrl;
      document.head.appendChild(link);
    };

    // Add your critical resources here
    // preloadFont('/fonts/playfair-display.woff2');
    // preloadImage('/images/hero-bg.jpg');
  }, []);
};