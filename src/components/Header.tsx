import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Smart Solution Agency</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('calendar')}
                className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-purple-600 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('calendar')}
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;