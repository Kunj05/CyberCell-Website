import { Mail, MapPin, Phone, Users } from 'lucide-react'; // Import necessary icons
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about cybersecurity? Want to join our community? We'd
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Map Component */}
            <Map />
          </div>

          <div className="relative group">
            <div className="absolute " />
            <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-white mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
