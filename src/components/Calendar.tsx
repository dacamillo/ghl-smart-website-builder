import { useEffect } from 'react';

const Calendar = () => {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendar" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule a Free Demo
          </h2>
          <p className="text-xl text-muted-foreground">
            Use the calendar below to pick a time that works for you.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/5Nd7nz3SkxkkLhuObvzL" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="5Nd7nz3SkxkkLhuObvzL_1751733972287"
            title="Schedule a Demo"
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;