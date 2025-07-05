const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI-Powered CRM",
      description: "Smart customer relationship management that learns and adapts to your business needs."
    },
    {
      icon: "👥",
      title: "Lead Capture Funnels",
      description: "High-converting funnels that turn visitors into qualified leads automatically."
    },
    {
      icon: "💬",
      title: "Automated Follow-Up",
      description: "Never miss a lead with intelligent follow-up sequences that nurture prospects."
    },
    {
      icon: "📊",
      title: "Reputation Management",
      description: "Build trust and credibility with automated review management and monitoring."
    },
    {
      icon: "🧲",
      title: "Retargeting Ads",
      description: "Bring back lost visitors with smart retargeting campaigns that convert."
    },
    {
      icon: "📅",
      title: "Smart Scheduling",
      description: "Streamline appointments with intelligent booking systems that work 24/7."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="text-primary font-semibold hover:text-purple-600 transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;