const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-primary text-2xl font-bold mb-4">Smart Solution Agency</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We help small businesses grow smarter, not harder, through AI-powered automation and marketing solutions. Transform your business operations and watch your revenue soar while you focus on what matters most.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('calendar')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
          
          {/* CTA Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Ready to Grow?</h4>
            <p className="text-gray-300 italic mb-6">
              "The best time to automate was yesterday. The second best time is now."
            </p>
            <button
              onClick={() => scrollToSection('calendar')}
              className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Today
            </button>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Smart Solution Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;