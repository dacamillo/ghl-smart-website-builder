const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Johnson",
      business: "Johnson Roofing Services",
      avatar: "MJ",
      text: "Smart Solution Agency transformed our lead generation completely. We went from struggling to find customers to having a steady stream of qualified leads every week. The automation saves us hours each day!"
    },
    {
      name: "Dr. Sarah Williams",
      business: "Bright Smile Dental",
      avatar: "SW",
      text: "The AI-powered CRM has been a game changer for our dental practice. Patient follow-ups are automatic, appointments stay filled, and our online reputation has never been better. Highly recommend!"
    },
    {
      name: "Tom Chen",
      business: "Chen's Home Services",
      avatar: "TC",
      text: "Working with Smart Solution Agency was the best business decision we made this year. Their automation systems helped us double our revenue while actually working fewer hours. The team is incredibly knowledgeable and supportive."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary relative"
            >
              <div className="text-6xl text-primary opacity-20 absolute top-4 right-6">
                "
              </div>
              <p className="text-muted-foreground italic leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
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