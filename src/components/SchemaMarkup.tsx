import { useEffect } from 'react';

export const SchemaMarkup = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://your-domain.com/#organization",
      "name": "Smart Solution Agency",
      "alternateName": "Smart Solutions",
      "description": "Expert business consulting agency helping small to medium businesses scale their online presence and grow revenue through proven strategies and digital marketing solutions.",
      "url": "https://your-domain.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://your-domain.com/images/logo.png",
        "width": 300,
        "height": 100
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-716-XXX-XXXX",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "US"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/smartsolutionagency",
        "https://www.linkedin.com/company/smartsolutionagency",
        "https://twitter.com/smartsolutions"
      ]
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://your-domain.com/#localbusiness",
      "name": "Smart Solution Agency",
      "description": "Buffalo's premier business consulting agency specializing in online presence optimization and small business growth strategies.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business District",
        "addressLocality": "Buffalo",
        "addressRegion": "NY",
        "postalCode": "14202",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.8864,
        "longitude": -78.8784
      },
      "telephone": "+1-716-XXX-XXXX",
      "email": "info@your-domain.com",
      "url": "https://your-domain.com",
      "openingHours": ["Mo-Fr 09:00-17:00"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can business consulting help my small business grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business consulting provides expert guidance on strategy, operations, marketing, and growth. We help identify opportunities, solve challenges, and implement proven systems that drive sustainable growth and increased profitability."
          }
        },
        {
          "@type": "Question",
          "name": "What does online presence optimization include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online presence optimization includes website improvement, search engine optimization (SEO), social media strategy, online reputation management, and digital marketing implementation to increase visibility and attract more customers."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from business consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Results vary by business and goals, but most clients see initial improvements within 30-60 days. Significant growth typically occurs within 3-6 months of implementing our strategic recommendations."
          }
        }
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://your-domain.com/#services",
      "name": "Business Consulting Services",
      "description": "Comprehensive business consulting services including online presence optimization, digital marketing strategy, business scaling, and revenue growth solutions.",
      "provider": {
        "@id": "https://your-domain.com/#organization"
      },
      "serviceType": "Business Consulting",
      "areaServed": {
        "@type": "State",
        "name": "New York"
      }
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(organizationSchema, 'organization-schema');
    addSchema(localBusinessSchema, 'local-business-schema');
    addSchema(faqSchema, 'faq-schema');
    addSchema(serviceSchema, 'service-schema');

    return () => {
      // Cleanup schemas on unmount
      ['organization-schema', 'local-business-schema', 'faq-schema', 'service-schema'].forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default SchemaMarkup;