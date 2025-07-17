import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: "📈",
      title: "Strategic Business Planning",
      description: "Comprehensive growth roadmaps and strategic positioning to scale your business systematically.",
      problem: "Most businesses hit growth plateaus because they lack a clear strategic roadmap and try to scale without proper planning, leading to inefficiencies and missed opportunities.",
      solution: "We develop comprehensive growth roadmaps with market expansion strategies, competitive positioning, and clear implementation timelines that guide your business to the next level.",
      results: [
        "Clear 12-24 month growth roadmap",
        "Average 180% revenue increase in 18 months",
        "Strategic market positioning advantage",
        "Reduced operational bottlenecks by 60%",
        "Streamlined decision-making processes"
      ]
    },
    {
      icon: "⚙️",
      title: "Operational Scaling Systems",
      description: "Build efficient processes and systems that allow your business to scale without breaking.",
      problem: "Growing businesses often become chaotic as they scale, with processes breaking down, quality suffering, and teams struggling to keep up with demand.",
      solution: "We design and implement scalable operational systems, optimize workflows, and create team structures that maintain quality while handling increased volume.",
      results: [
        "50% improvement in operational efficiency",
        "Scalable processes for 3x growth capacity",
        "Reduced operational costs by 25%",
        "Improved team productivity by 40%",
        "Automated workflow systems"
      ]
    },
    {
      icon: "💰",
      title: "Revenue Growth Acceleration",
      description: "Optimize sales processes and develop new revenue streams to accelerate business growth.",
      problem: "Many businesses rely on single revenue streams or inefficient sales processes that limit their growth potential and make them vulnerable to market changes.",
      solution: "We optimize existing sales funnels, diversify revenue streams, and implement customer acquisition strategies that consistently drive sustainable growth.",
      results: [
        "Average 247% revenue growth in 12 months",
        "3-5 new revenue streams developed",
        "40% improvement in customer lifetime value",
        "Reduced customer acquisition cost by 30%",
        "Predictable monthly recurring revenue"
      ]
    },
    {
      icon: "👥",
      title: "Leadership & Team Development",
      description: "Build strong leadership capabilities and high-performing teams that drive business success.",
      problem: "Business owners often become bottlenecks as they scale, and teams lack the leadership development needed to take on greater responsibilities and drive growth.",
      solution: "We provide executive coaching, develop internal leadership capabilities, and optimize team performance to create a self-sustaining growth organization.",
      results: [
        "Leadership team capability improvement",
        "50% reduction in owner dependency",
        "Improved team retention by 70%",
        "Enhanced decision-making speed",
        "Scalable management systems"
      ]
    },
    {
      icon: "📊",
      title: "Financial Growth Management",
      description: "Optimize cash flow, investment planning, and profitability to fuel sustainable business growth.",
      problem: "Many growing businesses struggle with cash flow management, don't optimize their profitability, and lack strategic financial planning for sustainable scaling.",
      solution: "We implement financial management systems, optimize cash flow cycles, and develop investment strategies that support healthy, profitable growth.",
      results: [
        "Improved cash flow by 60%",
        "25% increase in profit margins",
        "Strategic investment planning",
        "Financial forecasting accuracy",
        "Optimized capital allocation"
      ]
    },
    {
      icon: "🔧",
      title: "Technology & Automation Integration",
      description: "Implement technology solutions and automation that scale with your business growth.",
      problem: "Businesses often use outdated technology or manual processes that can't scale, leading to inefficiencies and limiting their growth potential.",
      solution: "We assess your current tech stack, implement scalable automation solutions, and optimize digital transformation to support accelerated growth.",
      results: [
        "60% reduction in manual processes",
        "Scalable technology infrastructure",
        "Improved data accuracy and insights",
        "Enhanced customer experience",
        "Future-ready digital capabilities"
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            What We Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-delay-${Math.min(index % 3 + 1, 3)} hover:animate-scale-in`}
            >
              <div className="text-5xl mb-4 animate-bounce-subtle">{service.icon}</div>
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
                  <div className="text-4xl">{services[selectedService].icon}</div>
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