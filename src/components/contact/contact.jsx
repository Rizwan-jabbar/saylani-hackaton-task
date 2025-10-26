import heroImage from '/banner.png'; // Replace with your hero image
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! \nName: ${formData.name} \nEmail: ${formData.email} \nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-gray-200">
        <img
          src={heroImage}
          alt="Contact Hero"
          className="absolute w-full h-full object-cover opacity-70"
        />
        <div className="relative text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white mt-2 md:mt-4 md:text-lg drop-shadow-md">
            We’d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 justify-center">
          <h2 className="text-2xl font-bold mb-4">Our Contact Info</h2>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 E-commerce St, Shop City, Country
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> support@ecommerce.com
          </p>
          <div className="mt-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086512772378!2d-122.41941568468253!3d37.77492977975957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c1a4e6d3%3A0x2d4c8a0a9f0d1d0!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1698315394715!5m2!1sen!2sus"
              width="100%"
              height="250"
              className="border-0 rounded"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
