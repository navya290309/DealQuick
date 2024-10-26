import React, { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="flex items-center mb-4 mr-4">
    <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm">{role}</p>
    </div>
  </div>
);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Get in Touch With Us</h2>
            <div className="flex items-center mb-4">
              <Phone className="mr-4" />
              <span>+91 7248067995</span>
            </div>
            <div className="flex items-center mb-8">
              <MapPin className="mr-4" />
              <span>
                Incubation Centre, Invertis University, Bareilly 243123, India
              </span>
            </div>
            <p className="mb-8">
              Discover exceptional quality products offered at competitive
              prices! We wholeheartedly recommend DealQuick to all retailers.
            </p>
            <div className="flex">
              <div className="mr-8">
                <TeamMember
                  name="Vaishnavi Chakraborty"
                  role="Manager"
                  imageSrc="src\images\lovee.png"
                />
                <TeamMember
                  name="Aryan Singh"
                  role="Operator"
                  imageSrc="src\images\ann.png"
                />
                <TeamMember
                  name="Krishna Gupta"
                  role="Market Analyser"
                  imageSrc="src\images\krishna.png"
                />
              </div>
              <div>
                <TeamMember
                  name="Sneha Sharma"
                  role="Developer"
                  imageSrc="src\images\sneha.png"
                />
                <TeamMember
                  name="Raghav Gaur"
                  role="Founder"
                  imageSrc="src\images\rghv.png"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Want to have a word with us?
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
