import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Smart Solution Agency's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Smart Solution Agency's website for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>Under this license you may not modify or copy the materials</li>
                <li>You may not use the materials for any commercial purpose or for any public display</li>
                <li>You may not attempt to reverse engineer any software contained on the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. SMS/Text Messaging (A2P Compliance)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By providing your phone number and opting in to receive text messages from Smart Solution Agency, you agree to the following:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You consent to receive marketing text messages from Smart Solution Agency</li>
                <li>Message frequency may vary. Message and data rates may apply</li>
                <li>You can opt out at any time by replying STOP to any message</li>
                <li>For help, reply HELP to any message or contact us directly</li>
                <li>We will not share your phone number with third parties for marketing purposes</li>
                <li>Supported carriers include all major US carriers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our marketing automation and digital services are provided "as is" and we make no guarantees about specific results or outcomes.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service availability may vary and is subject to maintenance</li>
                <li>We reserve the right to modify or discontinue services with notice</li>
                <li>Client is responsible for providing accurate information and materials</li>
                <li>Payment terms are specified in individual service agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Smart Solution Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Smart Solution Agency's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg mt-4">
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

export default TermsOfService;