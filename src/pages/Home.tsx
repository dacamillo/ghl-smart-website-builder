import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Why Growing Businesses Choose Smart Solution Agency
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Proven Scale Results</h3>
              <p className="text-muted-foreground">We've helped 200+ businesses break through the $1M revenue barrier with an average 247% growth in 12 months.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Strategic Expertise</h3>
              <p className="text-muted-foreground">Combined 2,000+ years of business experience with proven systems used by Fortune 500 companies, adapted for growing businesses.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">Guaranteed Results</h3>
              <p className="text-muted-foreground">90% of clients achieve their growth goals within 6 months. Over $500M in client revenue generated through our proven methodologies.</p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      
      {/* Exclusive Growth Strategy Session Banner */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm mb-3 animate-bounce-subtle">
            🚀 EXCLUSIVE OPPORTUNITY 🚀
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up">
            FREE Growth Strategy Session - Limited Spots Available!
          </h2>
          <p className="text-lg md:text-xl mb-4 animate-slide-in-left">
            Schedule your <strong>complimentary growth assessment</strong> and discover how to scale your business to $5M+ revenue!
          </p>
          <a
            href="/contact#calendar"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-1 shadow-lg animate-scale-in hover:animate-bounce-subtle"
          >
            📈 BOOK YOUR FREE STRATEGY SESSION
          </a>
          <p className="text-sm opacity-90 mt-3 animate-fade-in-delay-1">
            🎯 Only 5 spots available this month - Reserve yours before they're gone!
          </p>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;