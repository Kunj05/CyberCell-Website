import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button';
import ContactInput from '../../components/ui/ContactInput';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 ">
      <ContactInput
        label="Name"
        value={formData.name}
        onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
        required
      />

      <ContactInput
        type="email"
        label="Email"
        value={formData.email}
        onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
        required
      />

      <ContactInput
        type="textarea"
        label="Message"
        value={formData.message}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, message: value }))
        }
        required
      />

      <Button type="submit" className="w-full group">
        Send Message
        <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};

export default ContactForm;
