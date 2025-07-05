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
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
            Ready to transform your business with AI-powered automation? Let's talk about how we can help you grow.
          </p>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Multiple Ways to Connect</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Consultation</h3>
                    <p className="text-muted-foreground">Schedule a free 30-minute strategy call to discuss your business goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Live Demo</h3>
                    <p className="text-muted-foreground">See our automation tools in action with a personalized demo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quick Questions</h3>
                    <p className="text-muted-foreground">Send us a message and we'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      
      <Calendar />
      <Footer />
    </div>
  );
};

export default ContactPage;