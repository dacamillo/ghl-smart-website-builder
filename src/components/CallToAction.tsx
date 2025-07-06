const CallToAction = () => {
  const scrollToCalendar = () => {
    window.location.href = '/contact#calendar';
  };

  return (
    <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
          Let's Build Something Smart Together
        </h2>
        <p className="text-xl mb-8 opacity-90 animate-fade-in-up-delay-1">
          Ready to transform your business with automation?
        </p>
        <button
          onClick={scrollToCalendar}
          className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up-delay-2 hover:animate-bounce-subtle"
        >
          Start Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction;