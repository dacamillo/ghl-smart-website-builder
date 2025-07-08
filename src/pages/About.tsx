import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Users, Award, Clock, Shield, TrendingUp, Heart } from "lucide-react";

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
          <div className="max-w-4xl mx-auto text-center mb-16">
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

          {/* Why Choose Us Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Enterprise-Grade Platform */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Platform</h3>
              <p className="text-muted-foreground">
                Built on proven technology trusted by thousands of successful agencies worldwide.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-sm">All-in-one CRM and automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-purple-500 mt-1" />
                  <span className="text-sm">Enterprise-level security & 99.9% uptime</span>
                </div>
              </div>
            </div>

            {/* Smart Automation */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-muted-foreground">
                AI-powered workflows that work 24/7 to capture and nurture leads automatically.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-green-600">24/7</div>
                  <div className="text-xs text-green-700">Lead capture</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-blue-600">5min</div>
                  <div className="text-xs text-blue-700">Response time</div>
                </div>
              </div>
            </div>

            {/* All-in-One Platform */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-xl font-semibold mb-4">All-in-One Platform</h3>
              <p className="text-muted-foreground">
                Replace 5+ expensive tools with one powerful platform - no more juggling subscriptions.
              </p>
              <div className="mt-4 space-y-2">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-3 rounded-lg">
                  <p className="text-sm font-medium">💰 Save $500+ Monthly</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 p-3 rounded-lg">
                  <p className="text-sm font-medium">📈 Generate $5k+ Monthly Revenue</p>
                </div>
              </div>
            </div>

            {/* 90-Day Guarantee */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-4">90-Day Guarantee</h3>
              <p className="text-muted-foreground">
                If you don't see measurable improvements in your lead generation within 90 days, we'll refund every penny.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-sm">Zero financial risk</span>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="h-4 w-4 text-purple-500 mt-1" />
                  <span className="text-sm">Complete peace of mind</span>
                </div>
              </div>
            </div>

            {/* Quick Implementation */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-4">Quick Implementation</h3>
              <p className="text-muted-foreground">
                Get up and running in just 30 days with our streamlined setup process and dedicated support team.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-sm">Discovery & Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-sm">Platform Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-sm">Launch & Training</span>
                </div>
              </div>
            </div>

            {/* Dedicated Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
              <p className="text-muted-foreground">
                We don't just set it up and leave. Our team provides continuous optimization and support.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-blue-500 mt-1" />
                  <span className="text-sm">Account Manager</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-sm">Technical Specialist</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-purple-500 mt-1" />
                  <span className="text-sm">Strategy Consultant</span>
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