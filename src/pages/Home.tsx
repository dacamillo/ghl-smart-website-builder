import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import businessAnalytics from "@/assets/business-analytics.jpg";
import businessMeeting from "@/assets/business-meeting.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import strategyPlanning from "@/assets/strategy-planning.jpg";
import dashboardAnalytics from "@/assets/dashboard-analytics.jpg";
import automationTeam from "@/assets/automation-team.jpg";
import digitalAutomation from "@/assets/digital-automation.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      
      {/* Visual Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                See Your Business Transform
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Watch your metrics soar with our data-driven automation solutions that work 24/7 to grow your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Real-time performance tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Automated lead generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Smart customer management</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={dashboardAnalytics} 
                alt="Business analytics dashboard" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Choose Smart Solution Agency?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
              <div>
                <img 
                  src={businessMeeting} 
                  alt="Professional business meeting" 
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                />
              </div>
              <div>
                <img 
                  src={officeWorkspace} 
                  alt="Modern office workspace" 
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                />
              </div>
              <div>
                <img 
                  src={strategyPlanning} 
                  alt="Strategic planning session" 
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">Our AI-powered solutions have helped hundreds of small businesses increase their revenue by an average of 40%.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Implementation</h3>
              <p className="text-muted-foreground">Get up and running in just 2 weeks with our streamlined setup process and dedicated support team.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-muted-foreground">We don't just set it up and leave. Our team provides continuous optimization and support.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Excellence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert Team. Proven Process.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team uses cutting-edge technology to deliver results that exceed expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={automationTeam} 
                alt="Professional automation team" 
                className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              />
            </div>
            <div>
              <img 
                src={digitalAutomation} 
                alt="Digital automation tools" 
                className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      
      {/* Urgent Setup Fee Waiver Banner */}
      <section className="bg-red-600 text-white py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm mb-3 animate-bounce-subtle">
            LIMITED TIME OFFER
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
            CLAIM YOUR WAIVED SETUP FEE NOW
          </a>
          <p className="text-sm opacity-90 mt-3 animate-fade-in-delay-1">
            This exclusive offer expires tonight - Don't miss out on thousands in savings!
          </p>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;