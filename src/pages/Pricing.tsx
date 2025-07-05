import Header from "@/components/Header";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Pricing = () => {
  const scrollToCalendar = () => {
    window.location.href = '/contact#calendar';
  };

  const plans = [
    {
      name: "Starter Plan",
      price: "$997",
      period: "Setup + $97/MONTHLY",
      icon: "🚀",
      description: "Get started with our affordable Starter plan, perfect for basic website needs!",
      features: [
        "3-Page Website",
        "On-Page SEO",
        "SMS and Email Automations",
        "Missed Call Text Back",
        "Lead Management App",
        "Contact Form and Chat Widget"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Unlimited Plan",
      price: "$1,997",
      period: "Setup + $197/MONTHLY",
      icon: "🚀",
      description: "Get started with premium features in our unlimited plan!",
      features: [
        "4-Page Website",
        "Everything in Starter+",
        "Advanced SMS and Email Automations",
        "Google Reviews Automation",
        "Payment Processing",
        "Calendar Booking System"
      ],
      color: "from-orange-500 to-red-500",
      popular: true
    },
    {
      name: "Pro Plan",
      price: "$2,997",
      period: "Setup + $997/MONTHLY",
      icon: "🚀",
      description: "Get started with our affordable Starter plan, perfect for small businesses.",
      features: [
        "5-Page Website",
        "Everything in Unlimited+",
        "AI ChatBot",
        "Ongoing SEO Updates",
        "Google and Facebook Ads Management",
        "Bi-Monthly Marketing Consultation Calls"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Flexible Pricing Options to Suit Your Needs</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
            Tailored Pricing for Your Business Needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                  plan.popular ? 'ring-4 ring-primary ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <div className="text-muted-foreground mt-1">{plan.period}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToCalendar}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What's included in the setup fee?</h3>
              <p className="text-muted-foreground">The setup fee covers initial website development, CRM configuration, automation setup, and training for your team.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">Yes! You can change your plan at any time. We'll help you transition smoothly to ensure no disruption to your business.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Is there a long-term contract?</h3>
              <p className="text-muted-foreground">No long-term contracts required. We believe in earning your business every month through results and exceptional service.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What kind of support do you provide?</h3>
              <p className="text-muted-foreground">All plans include email support, training resources, and access to our knowledge base. Pro Plan includes bi-monthly consultation calls.</p>
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