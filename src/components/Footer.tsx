
import { Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "DriveNow",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Hourly Driver", href: "#" },
        { name: "Daily Driver", href: "#" },
        { name: "Outstation Trips", href: "#" },
        { name: "Corporate Plans", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Safety", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Insurance Info", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Car className="text-blue-400 h-8 w-8 mr-2" />
            <span className="text-xl font-bold">DriveNow</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2023 DriveNow Technologies Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
