
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Used DriveNow after a wedding reception. The driver was professional and got me home safely in my own car. Highly recommend!",
      author: "Ananya P.",
      location: "Mumbai",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "2 days ago"
    },
    {
      rating: 5,
      text: "Perfect solution for my elderly father's doctor visits. The same driver comes every time and knows exactly what to do.",
      author: "Rajesh K.",
      location: "Bangalore",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "1 week ago"
    },
    {
      rating: 4.5,
      text: "Booked a driver for our family trip to Goa. He drove our car safely for 12 hours straight. Will definitely use again.",
      author: "Priyanka M.",
      location: "Delhi",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-current text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-current text-yellow-400 opacity-50" />);
    }

    return stars;
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Trusted by thousands of happy customers across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
