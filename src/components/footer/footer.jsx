import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are an e-commerce platform delivering top-quality products right
            to your doorstep. Fast shipping, secure payments, and excellent
            customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-white transition" onClick={() => window.scrollTo({top : 0 , behavior : 'smooth'})}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition" onClick={() => window.scrollTo({top : 0 , behavior : 'smooth'})}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition" onClick={() => window.scrollTo({top : 0 , behavior : 'smooth'})}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-white transition" onClick={() => window.scrollTo({top : 0 , behavior : 'smooth'})}>
                Products
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition text-2xl">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="hover:text-white transition text-2xl">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="hover:text-white transition text-2xl">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#" className="hover:text-white transition text-2xl">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Ecommerce App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
