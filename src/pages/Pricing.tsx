import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Growth Accelerator",
      price: "$2,497",
      period: "/month",
      icon: "📈",
      description: "Perfect for businesses ready to break through their first growth barriers",
      features: [
        "Monthly strategy sessions",
        "Custom growth plan development",
        "Performance tracking & analytics",
        "Email & phone support",
        "Growth resources library access",
        "Quarterly business review"
      ],
      color: "from-blue-500 to-cyan-500",
      cta: "Start Accelerating Growth",
      popular: false
    },
    {
      name: "Scale Master",
      price: "$4,997",
      period: "/month",
      icon: "🚀",
      description: "Ideal for businesses scaling from $1M to $5M+ revenue",
      features: [
        "Everything in Growth Accelerator",
        "Bi-weekly implementation calls",
        "Team training and development",
        "Operational systems optimization",
        "Revenue stream diversification",
        "Leadership coaching sessions",
        "Priority support & consultation"
      ],
      color: "from-orange-500 to-red-500",
      cta: "Master Your Scaling",
      popular: true
    },
    {
      name: "Enterprise Scaling",
      price: "$9,997",
      period: "/month",
      icon: "🏢",
      description: "For established businesses ready for exponential growth",
      features: [
        "Everything in Scale Master",
        "Weekly hands-on support",
        "Direct access to senior consultants",
        "Custom automation implementation",
        "Financial growth management",
        "Market expansion strategies",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      color: "from-purple-500 to-indigo-500",
      cta: "Scale to Enterprise Level",
      popular: false
    },
    {
      name: "Done-With-You Intensive",
      price: "$24,997",
      period: "/quarter",
      icon: "⚡",
      description: "90-day intensive program with guaranteed results",
      features: [
        "90-day intensive scaling program",
        "Daily implementation support",
        "Dedicated consultant team",
        "Guaranteed results or money back",
        "Complete business transformation",
        "Executive team development",
        "Technology integration",
        "Exit strategy preparation"
      ],
      color: "from-green-500 to-emerald-500",
      cta: "Transform Your Business",
      popular: false
    }
  ];

  const customSolution = {
    title: "Custom Enterprise Solutions",
    startingPrice: "$50,000+",
    features: [
      "Fully customized scaling solutions",
      "Dedicated consultant team",
      "12-month growth guarantee",
      "Complete business overhaul",
      "Industry-specific strategies",
      "M&A preparation & support"
    ]
  };

  const scrollToCalendar = () => {
    window.location.href = '/contact#calendar';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Scale Your Business with Confidence</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto animate-fade-in-up-delay-1">
            Choose the perfect growth plan for your business. All plans include our proven methodologies and dedicated support.
          </p>
        </div>
      </section>

      {/* Growth Strategy Session Banner */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm mb-2 animate-bounce-subtle">
              🚀 EXCLUSIVE OPPORTUNITY 🚀
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-fade-in-up">
              FREE Growth Strategy Session - Limited Spots Available!
            </h2>
            <p className="text-lg md:text-xl mb-4 animate-slide-in-left">
              Schedule your <strong>complimentary growth assessment</strong> and discover how to scale your business to $5M+ revenue!
            </p>
            <button
              onClick={scrollToCalendar}
              className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-1 shadow-lg mb-3 animate-scale-in hover:animate-bounce-subtle"
            >
              📈 BOOK YOUR FREE STRATEGY SESSION
            </button>
            <p className="text-sm opacity-90 animate-fade-in-delay-1">
              🎯 Only 5 spots available this month - Reserve yours before they're gone!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  tier.popular ? 'ring-4 ring-primary scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{tier.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-primary">{tier.price}</span>
                      <span className="text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={scrollToCalendar}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-gray-100 text-foreground hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Need a Custom Solution?
          </h2>
          
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{customSolution.title}</h3>
            <div className="text-3xl font-bold mb-6">Starting at {customSolution.startingPrice}</div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {customSolution.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button
              onClick={scrollToCalendar}
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Discuss Custom Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Value Guarantee */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Growth Guarantee
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">247% Average Growth</h3>
              <p className="text-muted-foreground">Our clients see an average of 247% revenue growth in their first 12 months.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">90% Success Rate</h3>
              <p className="text-muted-foreground">90% of our clients achieve their growth goals within 6 months.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">$500M+ Generated</h3>
              <p className="text-muted-foreground">Over $500M in additional revenue generated for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in-up">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            <div className="animate-fade-in-delay-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">What results can I expect from your consulting services?</h3>
              <p className="text-muted-foreground">Our clients typically see an average of 247% revenue growth in their first 12 months, with 90% achieving their growth goals within 6 months.</p>
            </div>
            <div className="animate-fade-in-delay-2">
              <h3 className="text-xl font-semibold text-foreground mb-3">How do you ensure my business is ready to scale?</h3>
              <p className="text-muted-foreground">We start with a comprehensive growth assessment to identify bottlenecks and opportunities, then develop a custom roadmap tailored to your specific business needs.</p>
            </div>
            <div className="animate-fade-in-delay-3">
              <h3 className="text-xl font-semibold text-foreground mb-3">What makes your approach different from other consultants?</h3>
              <p className="text-muted-foreground">We combine 2,000+ years of collective business experience with proven systems used by Fortune 500 companies, adapted specifically for growing businesses.</p>
            </div>
            <div className="animate-fade-in-delay-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">Do you provide ongoing support after implementation?</h3>
              <p className="text-muted-foreground">Yes! All our plans include continuous support, performance monitoring, and strategic adjustments to ensure sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Pricing;