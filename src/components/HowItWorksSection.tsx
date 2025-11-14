
import { Search, CalendarCheck, Car } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Find a Driver",
      description: "Browse our verified drivers, check ratings, and select the one that fits your needs."
    },
    {
      icon: CalendarCheck,
      title: "2. Book Online",
      description: "Select date, time, and provide your vehicle details. Get instant confirmation."
    },
    {
      icon: Car,
      title: "3. Enjoy Your Ride",
      description: "Your professional driver arrives on time and drives your car safely to your destination."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How DriveNow Works</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Simple steps to book your professional driver
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center hover:scale-105 transition-transform duration-200">
              <div className="mx-auto bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 transition-colors">
                <step.icon className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
