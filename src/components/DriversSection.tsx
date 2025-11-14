
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, StarHalf } from 'lucide-react';

const DriversSection = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  const drivers = [
    {
      id: 1,
      name: "Rahul S.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      rating: 4.7,
      reviews: 128,
      price: 200,
      availability: "Available Now",
      availabilityColor: "bg-blue-500",
      experience: "5+ Years Exp",
      languages: "Hindi, English",
      badges: ["Verified", "5+ Years Exp", "Hindi, English"]
    },
    {
      id: 2,
      name: "Priya M.",
      image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80",
      rating: 5.0,
      reviews: 96,
      price: 250,
      availability: "Available Tomorrow",
      availabilityColor: "bg-gray-500",
      experience: "8+ Years Exp",
      languages: "Hindi, English, Tamil",
      badges: ["Verified", "8+ Years Exp", "Hindi, English, Tamil"]
    },
    {
      id: 3,
      name: "Vikram J.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 4.2,
      reviews: 87,
      price: 180,
      availability: "Available Now",
      availabilityColor: "bg-blue-500",
      experience: "3+ Years Exp",
      languages: "Hindi, English, Punjabi",
      badges: ["Verified", "3+ Years Exp", "Hindi, English, Punjabi"]
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
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-current text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Professional Drivers</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Verified, experienced drivers ready to serve you
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                <SelectTrigger>
                  <SelectValue placeholder="Available Now" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="now">Available Now</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="4+ Stars" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="any">Any Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="₹150-300/hr" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="150-300">₹150-300/hr</SelectItem>
                  <SelectItem value="300-500">₹300-500/hr</SelectItem>
                  <SelectItem value="500+">₹500+/hr</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {drivers.map((driver) => (
            <Card key={driver.id} className="overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="relative">
                <img 
                  src={driver.image} 
                  alt={driver.name} 
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-2 right-2 ${driver.availabilityColor} text-white`}>
                  {driver.availability}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{driver.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {renderStars(driver.rating)}
                      </div>
                      <span className="text-gray-600 text-sm ml-1">{driver.rating} ({driver.reviews})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Starting from</p>
                    <p className="text-blue-600 font-bold">₹{driver.price}/hr</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {driver.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            View All Drivers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DriversSection;
