import heroImage from '/banner.png'; // Replace with your hero image
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-gray-200">
        <img
          src={heroImage}
          alt="About Hero"
          className="absolute w-full h-full object-cover opacity-70"
        />
        <div className="relative text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Our Store
          </h1>
          <p className="text-white mt-2 md:mt-4 md:text-lg drop-shadow-md">
            Quality products delivered to your doorstep
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Our Story
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Founded in 2022, our e-commerce platform was created with one goal:
          to make shopping seamless, reliable, and enjoyable for everyone. We
          believe in offering top-quality products, exceptional customer
          service, and fast delivery. Our mission is to bring the best online
          shopping experience right to your home.
        </p>
      </section>

      {/* Features / Highlights */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <span className="text-4xl md:text-5xl mb-4 block">🚚</span>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Get your products delivered quickly and reliably anywhere in the country.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <span className="text-4xl md:text-5xl mb-4 block">💳</span>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Shop with confidence using our secure and encrypted payment options.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <span className="text-4xl md:text-5xl mb-4 block">⭐</span>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We carefully select our products to ensure top quality and value.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-500 py-12 text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Start Shopping Today!
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-sm md:text-lg">
          Explore our collection of top-quality products and enjoy a seamless shopping experience.
        </p>
        <NavLink
          to="/products"
          className="bg-white text-green-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Shop Now
        </NavLink>
      </section>
    </div>
  );
}

export default About;
