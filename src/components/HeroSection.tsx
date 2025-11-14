import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4 animate-fade-in">
              Your Car. Our Driver. Travel Made Easy.
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8 animate-fade-in">
              Book professional drivers who operate your personal vehicle. Safe, reliable, and convenient transportation when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-200"
              >
                Find a Driver
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Professional driver"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
