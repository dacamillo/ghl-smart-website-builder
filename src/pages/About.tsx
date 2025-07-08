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
            
            {/* GoHighLevel Platform Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-primary/5 to-purple-600/5 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Click to learn more
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Enterprise-Grade Platform</h3>
                  <p className="text-muted-foreground">Built on GoHighLevel's proven technology</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Powered by GoHighLevel
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We leverage GoHighLevel, the same platform trusted by thousands of successful agencies worldwide:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>All-in-one CRM, marketing automation, and sales funnel builder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                      <span>Trusted by 1000+ agencies managing millions in client revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-purple-500 mt-0.5" />
                      <span>Enterprise-level security and 99.9% uptime reliability</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 p-4 rounded-lg">
                    <p className="text-sm font-medium">
                      "You get the power of a Fortune 500 marketing stack at a fraction of the cost."
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Automation Features Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-green-500/5 to-emerald-600/5 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <Badge variant="secondary" className="group-hover:bg-green-500 group-hover:text-white transition-colors">
                      See features
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Automation</h3>
                  <p className="text-muted-foreground">AI-powered workflows that work 24/7</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                    Automation That Never Sleeps
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-green-700">Lead capture & follow-up</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600">5min</div>
                      <div className="text-sm text-blue-700">Average response time</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Lead Nurturing Sequences</p>
                      <p className="text-sm text-muted-foreground">Automatically follow up with leads via email, SMS, and voicemail</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Smart Appointment Booking</p>
                      <p className="text-sm text-muted-foreground">Calendly-style booking that syncs with your calendar automatically</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Pipeline Management</p>
                      <p className="text-sm text-muted-foreground">Visual sales pipeline that moves prospects through your process</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* All-in-One Platform Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-blue-500/5 to-cyan-600/5 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Heart className="h-8 w-8 text-blue-500" />
                    <Badge variant="secondary" className="group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      Learn more
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">All-in-One Platform</h3>
                  <p className="text-muted-foreground">Everything you need in one place</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-blue-500" />
                    Replace 5+ Tools with One Platform
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Stop juggling multiple subscriptions and complicated integrations:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-500 mb-2" />
                      <h4 className="font-medium">CRM & Pipeline</h4>
                      <p className="text-sm text-muted-foreground">Replace Salesforce, HubSpot, or Pipedrive</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Users className="h-6 w-6 text-purple-500 mb-2" />
                      <h4 className="font-medium">Email & SMS Marketing</h4>
                      <p className="text-sm text-muted-foreground">Replace Mailchimp, Constant Contact</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-500 mb-2" />
                      <h4 className="font-medium">Appointment Booking</h4>
                      <p className="text-sm text-muted-foreground">Replace Calendly, Acuity Scheduling</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <Award className="h-6 w-6 text-orange-500 mb-2" />
                      <h4 className="font-medium">Website & Funnels</h4>
                      <p className="text-sm text-muted-foreground">Replace ClickFunnels, WordPress</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Save $500+ Monthly & Generate $5k+ Revenue:</h4>
                    <p className="text-sm">Most businesses save hundreds per month by consolidating their tech stack into GoHighLevel while generating significant new revenue through improved lead capture and automation.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Money-Back Guarantee Pop-up */}
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
                    Risk-Free Implementation
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">90-Day Money-Back Guarantee</h3>
                    <p className="text-muted-foreground">
                      If you don't see measurable improvements in your lead generation within 90 days, we'll refund your entire investment.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">What This Means:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Zero financial risk on your investment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                        <span>We're committed to your success, not just setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-purple-500 mt-0.5" />
                        <span>Complete peace of mind to try our services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Implementation Process Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-orange-500/5 to-red-600/5 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="h-8 w-8 text-orange-500" />
                    <Badge variant="secondary" className="group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      See timeline
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Quick Implementation</h3>
                  <p className="text-muted-foreground">Up and running in 30 days</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-orange-500" />
                    Fast-Track Your Growth
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our streamlined process gets you generating leads fast:
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Discovery Call (Day 1)</h4>
                        <p className="text-sm text-muted-foreground">Understand your business and goals</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Platform Setup (Week 1-2)</h4>
                        <p className="text-sm text-muted-foreground">Configure CRM, automations, and integrations</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Content Creation (Week 3)</h4>
                        <p className="text-sm text-muted-foreground">Build landing pages and email sequences</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Launch & Training (Week 4)</h4>
                        <p className="text-sm text-muted-foreground">Go live and train your team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Dedicated Support Pop-up */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-gradient-to-br from-teal-500/5 to-green-600/5 p-8 rounded-xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="h-8 w-8 text-teal-500" />
                    <Badge variant="secondary" className="group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      Learn more
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Dedicated Support</h3>
                  <p className="text-muted-foreground">Your success partner</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-teal-500" />
                    Support When You Need It
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Unlike DIY platforms, you get real human support:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Award className="h-4 w-4 text-blue-500" />
                        Account Manager
                      </h4>
                      <p className="text-sm text-muted-foreground">Your dedicated point of contact</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        Technical Specialist
                      </h4>
                      <p className="text-sm text-muted-foreground">Handles all the technical setup</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Heart className="h-4 w-4 text-purple-500" />
                        Strategy Consultant
                      </h4>
                      <p className="text-sm text-muted-foreground">Optimizes your growth strategy</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Shield className="h-4 w-4 text-orange-500" />
                        Training Specialist
                      </h4>
                      <p className="text-sm text-muted-foreground">Teaches your team to use everything</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500/10 to-green-600/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">What's Included:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unlimited support tickets</li>
                      <li>• Monthly strategy calls</li>
                      <li>• Performance optimization</li>
                      <li>• Platform training sessions</li>
                    </ul>
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