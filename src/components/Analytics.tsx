import { useEffect } from 'react';

// Declare global functions for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    trackAppointmentBooking?: () => void;
    trackFormSubmission?: (formType: string) => void;
    trackDownload?: (downloadName: string) => void;
    acceptCookies?: () => void;
    declineCookies?: () => void;
  }
}

export const Analytics = () => {
  useEffect(() => {
    // Google Tag Manager (noscript) for users with JavaScript disabled
    const noscript = document.createElement('noscript');
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.appendChild(noscript);

    // Conversion tracking functions
    window.trackAppointmentBooking = () => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'GA_MEASUREMENT_ID/CONVERSION_ID',
          'value': 500,
          'currency': 'USD',
          'event_category': 'Lead Generation',
          'event_label': 'Appointment Booking'
        });
      }
      
      if (window.dataLayer) {
        window.dataLayer.push({
          'event': 'appointment_booking',
          'event_category': 'Lead Generation',
          'event_action': 'Book Appointment',
          'event_label': 'Business Consulting'
        });
      }
    };

    // Form submission tracking
    window.trackFormSubmission = (formType: string) => {
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          'event_category': 'Lead Generation',
          'event_action': 'Form Submission',
          'event_label': formType
        });
      }
    };

    // Download tracking for lead magnets
    window.trackDownload = (downloadName: string) => {
      if (window.gtag) {
        window.gtag('event', 'file_download', {
          'event_category': 'Lead Magnets',
          'event_action': 'Download',
          'event_label': downloadName
        });
      }
    };

    // Call tracking
    const handlePhoneClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href^="tel:"]')) {
        if (window.gtag) {
          window.gtag('event', 'phone_call', {
            'event_category': 'Contact',
            'event_action': 'Phone Call Click',
            'event_label': 'Header Phone'
          });
        }
      }
    };

    document.addEventListener('click', handlePhoneClick);

    // Scroll depth tracking
    let scrollDepthTracked: number[] = [];

    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      [25, 50, 75, 90].forEach(depth => {
        if (scrollPercent >= depth && !scrollDepthTracked.includes(depth)) {
          scrollDepthTracked.push(depth);
          if (window.gtag) {
            window.gtag('event', `scroll_${depth}`, {
              'event_category': 'Engagement',
              'event_action': 'Scroll Depth',
              'event_label': `${depth}%`
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Performance monitoring (Core Web Vitals)
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              'event_category': 'Web Vitals',
              'event_action': 'Largest Contentful Paint',
              'value': Math.round((entry as any).startTime)
            });
          }
        }
      }).observe({entryTypes: ['largest-contentful-paint']});

      // First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (window.gtag) {
            window.gtag('event', 'FID', {
              'event_category': 'Web Vitals',
              'event_action': 'First Input Delay',
              'value': Math.round((entry as any).processingStart - (entry as any).startTime)
            });
          }
        }
      }).observe({entryTypes: ['first-input']});
    }

    // Cookie consent
    const showCookieConsent = () => {
      if (!localStorage.getItem('cookieConsent')) {
        const consentBanner = document.createElement('div');
        consentBanner.innerHTML = `
          <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #333; color: white; padding: 20px; z-index: 10000; text-align: center;">
            <p>We use cookies to improve your experience and analyze website traffic. 
            <a href="/privacy-policy" style="color: #4CAF50;">Learn more</a></p>
            <button onclick="acceptCookies()" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 4px;">Accept</button>
            <button onclick="declineCookies()" style="background: #f44336; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px;">Decline</button>
          </div>
        `;
        document.body.appendChild(consentBanner);
      }
    };

    window.acceptCookies = () => {
      localStorage.setItem('cookieConsent', 'accepted');
      const banner = document.querySelector('[style*="position: fixed"]');
      if (banner) banner.remove();
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });
      }
    };

    window.declineCookies = () => {
      localStorage.setItem('cookieConsent', 'declined');
      const banner = document.querySelector('[style*="position: fixed"]');
      if (banner) banner.remove();
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        });
      }
    };

    // Show consent banner
    setTimeout(showCookieConsent, 2000);

    // SSL verification
    if (location.protocol === 'https:') {
      const sslBadges = document.querySelectorAll('.ssl-badge');
      sslBadges.forEach(badge => {
        (badge as HTMLElement).style.display = 'inline-block';
        badge.innerHTML = '🔒 Secure Site';
      });
    }

    return () => {
      document.removeEventListener('click', handlePhoneClick);
      window.removeEventListener('scroll', handleScroll);
      // Remove noscript element
      if (noscript && noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, []);

  return null;
};

export default Analytics;