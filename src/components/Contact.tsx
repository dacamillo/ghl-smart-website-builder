import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Questions? Ready to start? We're just a message away.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/PBxvJPVYQs60N8VLUgOr"
            style={{ width: '100%', height: '552px', border: 'none', borderRadius: '4px' }}
            id="inline-PBxvJPVYQs60N8VLUgOr" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Basic Contact Information"
            data-height="552"
            data-layout-iframe-id="inline-PBxvJPVYQs60N8VLUgOr"
            data-form-id="PBxvJPVYQs60N8VLUgOr"
            title="Basic Contact Information"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;