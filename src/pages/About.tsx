import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

          {/* Interactive Trust Builders */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Experience Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-primary/5 to-purple-600/5 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Click to learn more
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">5+ Years Experience</h3>
                  <p className="text-muted-foreground">Proven track record in marketing automation</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Our Proven Experience
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We've been in the trenches with businesses just like yours since 2019. Our team has:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Helped over 200+ businesses increase their revenue by an average of 40%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                      <span>Managed marketing campaigns generating over $50M in client revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-500 mt-0.5" />
                      <span>Certified experts in GoHighLevel, HubSpot, and leading automation platforms</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 p-4 rounded-lg">
                    <p className="text-sm font-medium">
                      "We don't just implement systems - we become your growth partners with skin in the game."
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Results Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-green-500/5 to-emerald-600/5 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <Badge variant="secondary" className="group-hover:bg-green-500 group-hover:text-white transition-colors">
                      See results
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Average 3x ROI</h3>
                  <p className="text-muted-foreground">Real results from real businesses</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                    Results That Speak For Themselves
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-600">340%</div>
                      <div className="text-sm text-green-700">Average ROI</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600">15-30</div>
                      <div className="text-sm text-blue-700">Days to see results</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Local Service Business</p>
                      <p className="text-sm text-muted-foreground">Went from 5 leads/month to 45+ leads/month in 60 days</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">E-commerce Store</p>
                      <p className="text-sm text-muted-foreground">Increased customer lifetime value by 85% with automated sequences</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Professional Services</p>
                      <p className="text-sm text-muted-foreground">Reduced time spent on follow-ups by 12 hours/week</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Support Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-blue-500/5 to-cyan-600/5 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Heart className="h-8 w-8 text-blue-500" />
                    <Badge variant="secondary" className="group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      Learn more
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">24/7 Support</h3>
                  <p className="text-muted-foreground">We're here when you need us most</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-blue-500" />
                    Support That Actually Cares
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Unlike other agencies that disappear after setup, we're your long-term partners:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-500 mb-2" />
                      <h4 className="font-medium">Response Time</h4>
                      <p className="text-sm text-muted-foreground">Average 2-hour response on all support tickets</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Users className="h-6 w-6 text-purple-500 mb-2" />
                      <h4 className="font-medium">Dedicated Manager</h4>
                      <p className="text-sm text-muted-foreground">Your own account manager who knows your business</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What's Included:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unlimited strategy calls</li>
                      <li>• Monthly optimization reviews</li>
                      <li>• Priority technical support</li>
                      <li>• Free training for your team</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Guarantee Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-purple-500/5 to-pink-600/5 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="h-8 w-8 text-purple-500" />
                    <Badge variant="secondary" className="group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      Our promise
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">90-Day Guarantee</h3>
                  <p className="text-muted-foreground">Your success is guaranteed</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-purple-500" />
                    Risk-Free Guarantee
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">90-Day Success Guarantee</h3>
                    <p className="text-muted-foreground">
                      If you don't see measurable improvements in your lead generation and customer engagement within 90 days, we'll refund every penny.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">What This Means For You:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Zero financial risk on your investment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                        <span>We're incentivized to deliver real results, not just setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-purple-500 mt-0.5" />
                        <span>Complete peace of mind to focus on your business</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Note:</strong> In our 5+ years, we've only had 2 refund requests - and both were due to business model changes, not our performance.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Process Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-orange-500/5 to-red-600/5 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="h-8 w-8 text-orange-500" />
                    <Badge variant="secondary" className="group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      See timeline
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Proven Process</h3>
                  <p className="text-muted-foreground">Step-by-step success methodology</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-orange-500" />
                    Our Battle-Tested Process
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We've refined this process over 200+ successful implementations:
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Discovery & Strategy (Week 1)</h4>
                        <p className="text-sm text-muted-foreground">Deep dive into your business, goals, and current challenges</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Setup & Integration (Weeks 2-3)</h4>
                        <p className="text-sm text-muted-foreground">Build and configure your automation systems</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Launch & Optimize (Week 4)</h4>
                        <p className="text-sm text-muted-foreground">Go live and monitor performance closely</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Scale & Support (Ongoing)</h4>
                        <p className="text-sm text-muted-foreground">Continuous optimization and growth strategies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Team Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-teal-500/5 to-green-600/5 p-8 rounded-xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="h-8 w-8 text-teal-500" />
                    <Badge variant="secondary" className="group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      Meet the team
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Team</h3>
                  <p className="text-muted-foreground">Specialists in your corner</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-teal-500" />
                    Your Success Team
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You're not just getting one person - you're getting an entire team of specialists:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Award className="h-4 w-4 text-blue-500" />
                        Strategy Director
                      </h4>
                      <p className="text-sm text-muted-foreground">Designs your custom growth strategy</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        Automation Specialist
                      </h4>
                      <p className="text-sm text-muted-foreground">Builds and optimizes your systems</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Heart className="h-4 w-4 text-purple-500" />
                        Account Manager
                      </h4>
                      <p className="text-sm text-muted-foreground">Your dedicated point of contact</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Shield className="h-4 w-4 text-orange-500" />
                        Success Coach
                      </h4>
                      <p className="text-sm text-muted-foreground">Ensures you hit your growth goals</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500/10 to-green-600/10 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Combined Experience:</strong> Over 25 years in marketing automation, with certifications from every major platform including GoHighLevel, HubSpot, and Salesforce.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

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