import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({
    // Trip Details only
    pickup: '',
    destination: '',
    date: '',
    time: '',
    duration: '',
  });

  const handleBookNow = () => {
    // Validate required fields
    if (!form.pickup || !form.destination || !form.date || !form.time || !form.duration) {
      alert('Please fill in all required fields before booking.');
      return;
    }

    // Create WhatsApp message with booking details (properly formatted)
    const message = `🚗 *DriveNow Booking Request*

📍 *Trip Details*
• 🏁 Pickup Location: ${form.pickup}
• 🎯 Destination: ${form.destination}
• 📅 Date: ${form.date}
• ⏰ Time: ${form.time}
• ⏳ Duration: ${form.duration} hour(s)

✅ Please confirm this booking and share driver details.

Thank you!
– Team DriveNow`;

    // WhatsApp phone number (Demo)
    const phoneNumber = "15551234567";

    // Create WhatsApp URL with properly encoded message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Driver</h2>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleBookNow(); }}>
              <div>
                <Label htmlFor="pickup">Pickup Location *</Label>
                <Input
                  id="pickup"
                  placeholder="Enter pickup address"
                  className="mt-1"
                  value={form.pickup}
                  onChange={e => setForm(f => ({ ...f, pickup: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="destination">Destination *</Label>
                <Input
                  id="destination"
                  placeholder="Enter destination address"
                  className="mt-1"
                  value={form.destination}
                  onChange={e => setForm(f => ({ ...f, destination: e.target.value }))}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    className="mt-1"
                    value={form.date}
                    onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    className="mt-1"
                    value={form.time}
                    onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="duration">Duration (hours) *</Label>
                <Select value={form.duration} onValueChange={val => setForm(f => ({ ...f, duration: val }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 hours</SelectItem>
                    <SelectItem value="4">4 hours</SelectItem>
                    <SelectItem value="8">8 hours</SelectItem>
                    <SelectItem value="12">Full day (12 hours)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-8 py-3 text-lg font-semibold"
                >
                  Book Now
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600 mt-4">
                <p>📞 You'll be redirected to WhatsApp to complete your booking</p>
                <p>💬 Our team will confirm your booking and assign a driver</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingForm;
