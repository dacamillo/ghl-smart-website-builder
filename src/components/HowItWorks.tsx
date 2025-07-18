const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Growth Assessment",
      description: "Comprehensive business audit to identify growth bottlenecks, analyze current systems and processes, and uncover scaling opportunities."
    },
    {
      number: "2",
      title: "Strategic Planning",
      description: "Custom growth roadmap creation with clear implementation timeline, resource allocation planning, and strategic milestone mapping."
    },
    {
      number: "3",
      title: "Execution & Scaling",
      description: "Hands-on implementation support with performance monitoring, continuous optimization, and strategic adjustments for sustainable growth."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            How It Works
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className={`flex-1 text-center relative animate-fade-in-delay-${index + 1}`}>
              <div className="bg-gradient-to-r from-primary to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-scale-in hover:animate-bounce-subtle transition-all duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 animate-slide-in-left">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed animate-slide-in-right">
                {step.description}
              </p>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-3xl text-primary animate-bounce-subtle">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;