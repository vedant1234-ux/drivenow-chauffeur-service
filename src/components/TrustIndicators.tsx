
import { Shield, Star, Clock, IndianRupee } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Verified",
      description: "Background-checked drivers",
      color: "text-blue-500"
    },
    {
      icon: Star,
      title: "4.8",
      description: "Average rating",
      color: "text-yellow-400"
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Support available",
      color: "text-blue-500"
    },
    {
      icon: IndianRupee,
      title: "200/hr",
      description: "Starting price",
      color: "text-green-500"
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {indicators.map((indicator, index) => (
            <div key={index} className="hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center">
                <indicator.icon className={`${indicator.color} h-8 w-8 mr-2`} />
                <span className="text-xl font-bold">{indicator.title}</span>
              </div>
              <p className="text-gray-600 mt-1">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
