import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fill out contact forms or request consultations</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Provide your phone number for SMS updates</li>
                <li>Engage with our website or services</li>
                <li>Communicate with us via email or phone</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Analyze usage patterns to improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. SMS/Text Message Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Regarding SMS/text messaging services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We only send messages to numbers that have explicitly opted in</li>
                <li>Your phone number is stored securely and not shared with third parties</li>
                <li>You can opt out at any time by replying STOP</li>
                <li>Message content is kept confidential and secure</li>
                <li>We comply with all TCPA and A2P messaging regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who help us operate our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we have about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Opt out of SMS messages by replying STOP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground font-medium">Smart Solution Agency</p>
                <p className="text-muted-foreground">Buffalo, NY</p>
                <p className="text-muted-foreground">Email: hello@smartsolutionagency.com</p>
                <p className="text-muted-foreground">Phone: (716) 555-0123</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;