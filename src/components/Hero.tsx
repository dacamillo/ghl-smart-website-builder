const Hero = () => {
  const scrollToCalendar = () => {
    window.location.href = '/contact#calendar';
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-primary to-purple-600 text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Break Through Your Growth Ceiling
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed animate-fade-in-up-delay-1">
            We help established businesses scale from $500K to $5M+ through proven systems, strategic planning, and operational excellence
          </p>
          <button
            onClick={scrollToCalendar}
            className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-block animate-fade-in-up-delay-2 hover:animate-bounce-subtle"
          >
            Book Your Growth Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;