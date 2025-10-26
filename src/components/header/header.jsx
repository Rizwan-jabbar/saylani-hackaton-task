import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/userSlice/userSlice";

function Header() {
  const [isMobileView, setIsMobileView] = useState(true);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const loginUser = useSelector((state) => state.users.loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuRef = useRef();
  const hamburgerRef = useRef();

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleOutClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMobileView(true);
      }
    };
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  // Fixed navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter cart items for current user
  const currentUserItems = cartItems.filter(
    (item) => item.addedBy === loginUser?.email
  );

  return (
    <header
      className={`flex justify-between items-center px-4 py-2 lg:px-6 lg:py-3 bg-gray-200 shadow-md text-xs lg:text-base transition-all duration-300 ${
        fixedNavbar ? "fixed top-0 left-0 w-full z-30" : ""
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="text-[14px] lg:text-[20px] font-bold">
        My Ecommerce App
      </NavLink>

      {/* Hamburger for mobile */}
      <div
        ref={hamburgerRef}
        className="lg:hidden cursor-pointer text-xl"
        onClick={() => setIsMobileView(!isMobileView)}
      >
        <span
          className={`ri-${isMobileView ? "menu" : "close"}-line transition-all duration-150`}
        ></span>
      </div>

      {/* Navigation Menu */}
      <nav
        ref={menuRef}
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-56 bg-gray-200 flex flex-col items-center gap-4 pt-8 transition-transform duration-500
          lg:flex lg:flex-row lg:h-auto lg:w-auto lg:pt-0 ${
            isMobileView ? "-translate-x-full" : "translate-x-0"
          }`}
      >
        <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6 text-xs lg:text-lg">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>

        {/* Mobile cart/user inside menu */}
        {!isMobileView && (
          <div className="flex flex-col gap-2 mt-4 w-full px-4">
            {loginUser ? (
              <>
                <NavLink
                  to="/cart"
                  className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                >
                  <span className="ri-shopping-cart-line text-xl"></span>
                  Cart ({currentUserItems.length})
                </NavLink>
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                  className="text-red-500 hover:bg-gray-100 px-2 py-1 rounded text-left w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="px-2 py-1 hover:bg-gray-100 rounded"
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </nav>

      {/* Cart & Username (always visible) */}
      <div className="flex items-center gap-3 relative">
        {/* Cart Icon */}
        {loginUser && (
          <div className="relative cursor-pointer ml-2">
            <NavLink to="/cart">
              <span className="ri-shopping-cart-line text-xl lg:text-2xl"></span>
            </NavLink>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {currentUserItems.length}
            </span>
          </div>
        )}

        {/* Username */}
        <div className="relative group">
          {loginUser ? (
            <p className="text-xs lg:text-sm cursor-pointer px-2 py-1">{loginUser.name}</p>
          ) : (
            <p
              className="text-xs lg:text-sm cursor-pointer px-2 py-1"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          )}

          {loginUser && (
            <ul className="absolute right-0 mt-2 z-50 top-4 bg-white text-gray-800 rounded shadow-lg border border-gray-300 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              <li
                onClick={() => navigate("/cart")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Cart
              </li>
              <li
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
