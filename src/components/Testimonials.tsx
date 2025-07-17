const Testimonials = () => {
  const testimonials = [
    {
      name: "Don Camillo",
      business: "Camvest Inc Auto Sales",
      avatar: "DC",
      text: "Smart Solution Agency helped us scale from $2M to $5.2M in just 18 months. Their strategic planning and operational systems transformed how we run our business. We're now positioned for continued growth without the growing pains."
    },
    {
      name: "Rev. Ron Burgio",
      business: "Love Joy Church",
      avatar: "RB",
      text: "Working with Smart Solution Agency allowed us to grow our congregation by 300% and expand to 3 locations. Their strategic approach to growth and leadership development gave us the framework to scale sustainably while maintaining our mission."
    },
    {
      name: "Leon McBride",
      business: "LM Stone",
      avatar: "LM",
      text: "The results speak for themselves - we increased revenue by 400% while reducing my working hours by 50%. Smart Solution Agency's systems and processes allowed me to step back from day-to-day operations and focus on strategic growth."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-8 rounded-xl border-l-4 border-primary relative animate-fade-in-delay-${index + 1} hover:animate-scale-in hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-6xl text-primary opacity-20 absolute top-4 right-6 animate-bounce-subtle">
                "
              </div>
              <p className="text-muted-foreground italic leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 animate-scale-in">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;