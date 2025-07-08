import { Link } from "react-router-dom";
import Header from "@/components/Header";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Launch Plan",
      price: "$997",
      period: "Setup + $97/MONTHLY",
      icon: "🚀",
      description: "Everything you need to get found, capture leads, and start building your online reputation.",
      features: [
        "3-Page Mobile-Optimized Website",
        "On-Page SEO (local keywords, meta tags)",
        "Chat Widget & Contact Form",
        "Missed Call Text Back Automation",
        "Basic CRM (lead capture & tracking)",
        "Google Analytics & Facebook Pixel Setup",
        "Monthly Performance Report"
      ],
      color: "from-purple-500 to-pink-500",
      paymentUrl: "https://link.fastpaydirect.com/payment-link/68697a4eeba110ff568d6234"
    },
    {
      name: "Growth Essentials Plan",
      price: "$1,497",
      period: "Setup + $297/MONTHLY",
      icon: "🚀",
      description: "Automate your follow-up, build trust with reviews, and make it easy for customers to book and pay.",
      features: [
        "5-Page Website (add Services, Testimonials)",
        "Everything in Starter Launch+",
        "Review Automation (Google reviews)",
        "Advanced Nurture Flows (email/SMS)",
        "Payment Processing Integration",
        "Online Calendar & Booking System",
        "Listings Management (30+ platforms)",
        "Priority Email Support"
      ],
      color: "from-orange-500 to-red-500",
      popular: true,
      paymentUrl: "https://link.fastpaydirect.com/payment-link/68697a1fd6ab80b40ee65d0f"
    },
    {
      name: "Traffic & Content Accelerator",
      price: "$2,497",
      period: "Setup + $497/MONTHLY",
      icon: "🚀",
      description: "Attract more visitors, keep your brand top-of-mind, and position yourself as the go-to expert.",
      features: [
        "Everything in Growth Essentials+",
        "Social Media Planner & Automated Posting",
        "Blog Syndication & Content Curation",
        "Client Portal (secure communication hub)",
        "Lead Magnet/Download Setup",
        "Monthly SEO Blog Content",
        "Quarterly Strategy Call"
      ],
      color: "from-blue-500 to-cyan-500",
      paymentUrl: "https://link.fastpaydirect.com/payment-link/686979feddc6a6e8a6c5077b"
    },
    {
      name: "Elite Growth System",
      price: "$3,497",
      period: "Setup + $997/MONTHLY",
      icon: "🚀",
      description: "Accelerate your growth with paid ads, advanced analytics, and hands-on marketing support.",
      features: [
        "Everything in Traffic & Content+",
        "Google & Facebook Ads Management",
        "Advanced Reporting Dashboard",
        "Bi-Weekly Marketing Consultation Calls",
        "Custom Integrations (CRM, email, SMS)",
        "Enhanced Security & Backups",
        "Dedicated Account Manager"
      ],
      color: "from-indigo-500 to-purple-500",
      paymentUrl: "https://link.fastpaydirect.com/payment-link/686979feddc6a6e8a6c5077b"
    },
    {
      name: "Enterprise AI Suite",
      price: "$4,997",
      period: "Setup + $1,997/MONTHLY",
      icon: "👨‍💼",
      description: "Unlock the power of AI and automation to scale your business and dominate your market.",
      features: [
        "Everything in Elite Growth+",
        "Full AI Employee (AI chatbot for sales)",
        "CRM AI Assistant (automated data entry)",
        "Advanced Automations (custom workflows)",
        "Internal Training Portal",
        "Multi-Location Management",
        "VIP Support (phone, chat, priority)"
      ],
      color: "from-green-500 to-emerald-500",
      paymentUrl: "https://link.fastpaydirect.com/payment-link/686979feddc6a6e8a6c5077b"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Flexible Pricing Options to Suit Your Needs</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto animate-fade-in-up-delay-1">
            Tailored Pricing for Your Business Needs
          </p>
        </div>
      </section>

      {/* Urgent Offer Banner */}
      <section className="bg-red-600 text-white py-4 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-2 animate-bounce-subtle">
              🔥 LIMITED TIME OFFER 🔥
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-fade-in-up">
              EXCLUSIVE OFFER: Setup Fee WAIVED!
            </h2>
            <p className="text-lg md:text-xl mb-4 animate-slide-in-left">
              Schedule your appointment by <strong>11:59pm on {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong> and save up to $2,997 on setup fees!
            </p>
            <Link 
              to="/contact#calendar"
              className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-1 shadow-lg mb-3 animate-scale-in hover:animate-bounce-subtle"
            >
              🎯 CLAIM YOUR WAIVED SETUP FEE NOW
            </Link>
            <p className="text-sm opacity-90 animate-fade-in-delay-1">
              ⏰ This exclusive offer expires tonight - Don't miss out on thousands in savings!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-delay-${index + 1} hover:animate-scale-in ${
                  plan.popular ? 'ring-4 ring-primary ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold animate-bounce-subtle">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4 animate-bounce-subtle">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 animate-fade-in">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4 animate-slide-in-left">{plan.description}</p>
                    <div className="mb-4 animate-scale-in">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <div className="text-muted-foreground mt-1">{plan.period}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-3 animate-fade-in-delay-${Math.min(idx + 1, 3)}`}>
                        <span className="text-green-500 font-bold animate-bounce-subtle">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => window.open(plan.paymentUrl, '_blank')}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up hover:animate-bounce-subtle`}
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
          <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in-up">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            <div className="animate-fade-in-delay-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">What's included in the setup fee?</h3>
              <p className="text-muted-foreground">The setup fee covers initial website development, CRM configuration, automation setup, and training for your team.</p>
            </div>
            <div className="animate-fade-in-delay-2">
              <h3 className="text-xl font-semibold text-foreground mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">Yes! You can change your plan at any time. We'll help you transition smoothly to ensure no disruption to your business.</p>
            </div>
            <div className="animate-fade-in-delay-3">
              <h3 className="text-xl font-semibold text-foreground mb-3">Is there a long-term contract?</h3>
              <p className="text-muted-foreground">No long-term contracts required. We believe in earning your business every month through results and exceptional service.</p>
            </div>
            <div className="animate-fade-in-delay-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">What kind of support do you provide?</h3>
              <p className="text-muted-foreground">All plans include email support, training resources, and access to our knowledge base. Unlimited Plan includes bi-monthly consultation calls.</p>
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