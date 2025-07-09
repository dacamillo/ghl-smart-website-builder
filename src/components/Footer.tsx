import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
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
          <div className="animate-slide-in-left">
            <h3 className="text-primary text-2xl font-bold mb-4 animate-fade-in">Smart Solution Agency</h3>
            <p className="text-gray-300 leading-relaxed mb-4 animate-fade-in-delay-1">
              We help small businesses grow smarter, not harder, through AI-powered automation and marketing solutions. Transform your business operations and watch your revenue soar while you focus on what matters most.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in-up">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="animate-fade-in-delay-1">
                <button
                  onClick={() => navigate('/')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 hover:animate-bounce-subtle"
                >
                  Home
                </button>
              </li>
              <li className="animate-fade-in-delay-2">
                <button
                  onClick={() => navigate('/pricing')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 hover:animate-bounce-subtle"
                >
                  Pricing
                </button>
              </li>
              <li className="animate-fade-in-delay-3">
                <button
                  onClick={() => navigate('/about')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 hover:animate-bounce-subtle"
                >
                  About
                </button>
              </li>
              <li className="animate-fade-in-delay-1">
                <button
                  onClick={() => navigate('/contact')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 hover:animate-bounce-subtle"
                >
                  Contact
                </button>
              </li>
              <li className="animate-fade-in-delay-2">
                <button
                  onClick={() => scrollToSection('calendar')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 hover:animate-bounce-subtle"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
          
          {/* CTA Section */}
          <div className="text-center md:text-left animate-slide-in-right">
            <h4 className="text-lg font-semibold mb-4 animate-fade-in">Ready to Grow?</h4>
            <p className="text-gray-300 italic mb-6 animate-fade-in-delay-1">
              "The best time to automate was yesterday. The second best time is now."
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-scale-in hover:animate-bounce-subtle"
            >
              Start Today
            </button>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center animate-fade-in">
          <p className="text-gray-400">
            © 2024 Smart Solution Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;