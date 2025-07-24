import michaelCipolla from "@/assets/michael-cipolla.jpg";
import leonMcbride from "@/assets/leon-mcbride.jpg";
import markKmoitek from "@/assets/mark-kmoitek.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Cipolla",
      business: "716 Realty",
      image: michaelCipolla,
      text: "The all-in-one CRM tool and social media marketing strategies from Smart Solution Agency completely transformed how I manage my real estate business. I've seen a significant increase in qualified leads and my client management has never been more organized!"
    },
    {
      name: "Leon McBride",
      business: "LM Stone",
      image: leonMcbride,
      text: "Smart Solution Agency optimized our website and overall online presence, and the results speak for themselves. We're finally seeing real traction online and getting more visibility than we ever had before. Our website is actually working for us now!"
    },
    {
      name: "Mark Kmoitek",
      business: "Plumbing Services",
      image: markKmoitek,
      text: "The team set up our entire digital presence - website, missed call text back system, and AI chatbots trained specifically for our plumbing business. We never miss a lead anymore and the AI receptionist handles appointments and social media perfectly. It's like having a fully trained staff member working 24/7!"
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
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary shadow-lg animate-scale-in"
                />
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