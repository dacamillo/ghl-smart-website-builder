const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We learn about your business, goals, and current challenges to create a custom automation strategy."
    },
    {
      number: "2",
      title: "Automation Setup",
      description: "Our team implements and configures your AI-powered systems to work seamlessly with your business."
    },
    {
      number: "3",
      title: "Smart Growth Results",
      description: "Watch your business grow on autopilot while you focus on what you do best."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A simple 3-step process that transforms your business operations
          </p>
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