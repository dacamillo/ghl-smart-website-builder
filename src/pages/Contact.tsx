import { useEffect } from 'react';
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Calendar from "@/components/Calendar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    // Check if we need to scroll to calendar on page load
    if (window.location.hash === '#calendar') {
      setTimeout(() => {
        const element = document.getElementById('calendar');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/office-workspace.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
            Ready to transform your business with AI-powered automation? Let's talk about how we can help you grow.
          </p>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Multiple Ways to Connect</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone Consultation</h3>
                <p className="text-muted-foreground text-sm">Schedule a free 30-minute strategy call to discuss your business goals.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Live Demo</h3>
                <p className="text-muted-foreground text-sm">See our automation tools in action with a personalized demo.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Questions</h3>
                <p className="text-muted-foreground text-sm">Send us a message and we'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </div>
      </div>
      
      <Calendar />
      <Footer />
    </div>
  );
};

export default ContactPage;