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
            Why Choose Smart Solution Agency?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">Our AI-powered solutions have helped hundreds of small businesses increase their revenue by an average of 40%.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Fast Implementation</h3>
              <p className="text-muted-foreground">Get up and running in just 2 weeks with our streamlined setup process and dedicated support team.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-muted-foreground">We don't just set it up and leave. Our team provides continuous optimization and support.</p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      
      {/* Urgent Setup Fee Waiver Banner */}
      <section className="bg-red-600 text-white py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-3 animate-bounce-subtle">
            🔥 LIMITED TIME OFFER 🔥
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up">
            EXCLUSIVE OFFER: Setup Fee WAIVED!
          </h2>
          <p className="text-lg md:text-xl mb-4 animate-slide-in-left">
            Schedule your appointment by <strong>11:59pm TODAY</strong> and save up to $2,997 on setup fees!
          </p>
          <a
            href="/contact#calendar"
            className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-1 shadow-lg animate-scale-in hover:animate-bounce-subtle"
          >
            🎯 CLAIM YOUR WAIVED SETUP FEE NOW
          </a>
          <p className="text-sm opacity-90 mt-3 animate-fade-in-delay-1">
            ⏰ This exclusive offer expires tonight - Don't miss out on thousands in savings!
          </p>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;