
import { Card, CardContent } from '@/components/ui/card';
import { Wine, UserCheck, Shield, Route } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Wine,
      title: "Post-party Commute",
      description: "User needs a safe ride home in their own car after a night out.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Corporate Travel",
      description: "User wants a consistent daily driver for business meetings and commutes.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Senior Transport",
      description: "Elderly parent needs a reliable chauffeur to medical appointments.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Route,
      title: "Outstation Trips",
      description: "Hire a driver for long-distance journeys using your own vehicle.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">When to Use DriveNow</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Professional drivers for your personal needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300 hover:scale-105 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full mr-4 ${useCase.color}`}>
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
