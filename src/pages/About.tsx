import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Smart Solution Agency</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
            We're a team of marketing automation experts, AI specialists, and business growth strategists 
            dedicated to helping small businesses thrive in the digital age.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Small businesses are the backbone of our economy, but they often struggle with the complexity 
                and cost of modern marketing technology. We believe every business deserves access to the same 
                powerful automation tools that big corporations use.
              </p>
              <p className="text-lg text-muted-foreground">
                That's why we've made it our mission to democratize AI-powered marketing automation, making it 
                simple, affordable, and incredibly effective for businesses of all sizes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Businesses Helped:</span>
                  <span className="font-bold text-primary">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average Revenue Increase:</span>
                  <span className="font-bold text-primary">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time Saved per Week:</span>
                  <span className="font-bold text-primary">15+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client Satisfaction:</span>
                  <span className="font-bold text-primary">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;