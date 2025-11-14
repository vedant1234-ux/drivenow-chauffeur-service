import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
          Ready to Book Your Professional Driver?
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
          Experience safe, reliable chauffeur service with just a few clicks.
        </p>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          ⏱️ Book online in under 2 minutes – no app needed!
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold"
          >
            👉 Book Now on DriveNow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
