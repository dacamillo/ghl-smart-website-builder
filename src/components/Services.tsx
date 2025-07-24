import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>,
      title: "AI-Powered CRM",
      description: "Transform your customer relationships with intelligent automation that never sleeps, never forgets, and always follows up at the perfect moment.",
      problem: "Most small businesses lose track of leads, forget to follow up, and miss opportunities because they're managing everything manually.",
      solution: "Our AI-powered CRM automatically tracks every interaction, scores leads by likelihood to convert, and reminds you exactly when and how to follow up.",
      results: [
        "35% increase in lead conversion rates",
        "Save 10+ hours per week on admin tasks", 
        "Never miss a follow up again",
        "Automatic lead scoring and prioritization",
        "Seamless integration with all your tools"
      ]
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>,
      title: "Lead Capture Funnels",
      description: "Turn every visitor into a potential customer with conversion-optimized funnels that capture leads while they sleep.",
      problem: "Your website visitors leave without giving you their contact information, and you have no way to re-engage them.",
      solution: "We build high-converting landing pages and funnels that capture leads with irresistible offers and automatically nurture them into paying customers.",
      results: [
        "3x more leads from your existing traffic",
        "Professional landing pages that convert at 25%+",
        "Automated lead magnets and opt-in sequences",
        "A/B tested designs for maximum performance",
        "Mobile-optimized for today's customers"
      ]
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>,
      title: "Automated Follow-Up",
      description: "Never let another lead slip away with intelligent messaging that nurtures prospects into paying customers automatically.",
      problem: "Leads go cold because manual follow-up is inconsistent, time-consuming, and easy to forget.",
      solution: "Our automated follow-up system sends personalized messages at the perfect timing, keeps leads warm, and moves them through your sales funnel automatically.",
      results: [
        "50% more leads convert to customers",
        "Save 15+ hours per week on follow-up",
        "Consistent messaging that builds trust",
        "Automatic lead nurturing sequences",
        "Smart timing based on lead behavior"
      ]
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>,
      title: "Reputation Management",
      description: "Build unshakeable trust and credibility with automated review systems that showcase your excellence to the world.",
      problem: "Bad reviews hurt your business, and you're not getting enough positive reviews to build trust with potential customers.",
      solution: "Our reputation management system automatically requests reviews from happy customers, monitors your online presence, and helps you respond to feedback professionally.",
      results: [
        "4x more positive reviews per month",
        "Improved Google ranking and visibility",
        "Professional response to all feedback",
        "Automated review request sequences",
        "Real-time reputation monitoring"
      ]
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      </div>,
      title: "Retargeting Ads",
      description: "Bring back lost visitors with precision-targeted campaigns that convert browsers into buyers with surgical accuracy.",
      problem: "97% of website visitors leave without buying, and you have no way to bring them back to complete their purchase.",
      solution: "Our smart retargeting campaigns show personalized ads to people who visited your site, bringing them back when they're ready to buy.",
      results: [
        "25% increase in overall conversions",
        "Lower cost per acquisition",
        "Personalized ads based on behavior",
        "Cross-platform retargeting campaigns",
        "Automated audience optimization"
      ]
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>,
      title: "Smart Scheduling",
      description: "Eliminate appointment chaos with intelligent booking systems that work around the clock to fill your calendar.",
      problem: "Phone tag and back-and-forth emails waste time when trying to schedule appointments, and you lose business from missed opportunities.",
      solution: "Our smart scheduling system lets customers book appointments instantly, sends automatic reminders, and integrates with your calendar and CRM.",
      results: [
        "60% more appointments booked",
        "Eliminate phone tag and scheduling emails",
        "Automatic appointment reminders",
        "Calendar sync across all devices",
        "Reduced no-shows and cancellations"
      ]
    }
  ];

  const scrollToCalendar = () => {
    const element = document.getElementById('calendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Powerful automation solutions that transform how you connect with customers and grow your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-delay-${Math.min(index % 3 + 1, 3)} hover:animate-scale-in`}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={() => setSelectedService(index)}
                className="text-primary font-semibold hover:text-purple-600 transition-colors duration-300 hover:animate-bounce-subtle"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div>{services[selectedService].icon}</div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {services[selectedService].title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3">The Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {services[selectedService].problem}
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {services[selectedService].solution}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Results You'll See</h3>
                    <ul className="space-y-2">
                      {services[selectedService].results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">✓</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      Get Started with {services[selectedService].title}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;