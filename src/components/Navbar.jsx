import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Send a Parcel", path: "/send-parcel" },
    { name: "Tracking", path: "/tracking-page" }, 
    { name: "Prohibited Items", path: "/prohibited-items" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "About Us", path: "/about-us" },
    // { name: "Sign In", path: "/sign-in" },
    // { name: "Sign Up", path: "/sign-up" },
  ];

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section - Adjusted size for mobile */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0" // Prevent logo from shrinking
          >
            <motion.img
              alt="Parcel Horse Logo"
              src="/img/parcel-horse-logo.png"
              className="h-8 w-auto sm:h-10 object-contain" // Responsive height
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={link.path}
                  className={`relative px-4 py-2 text-sm rounded-full font-bold transition-all duration-300 ${
                    activeLink === link.name
                      ? "text-[#014AB2]"
                      : "text-gray-600 hover:text-[#014AB2]"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#014AB2] rounded-full"
                      layoutId="underline"
                      initial={false}
                    />
                  )}
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="/sign-in" 
              className="relative overflow-hidden px-4 py-2 text-sm font-medium text-[#014AB2] rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Login</span>
              <motion.div
                className="absolute inset-0 bg-[#014AB2]/10 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.a>

            <motion.a
              href="/sign-up"
              className="relative overflow-hidden px-6 py-2 text-sm font-bold text-white bg-[#014AB2] rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(1, 74, 178, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Sign Up</span>
              <motion.div
                className="absolute inset-0 bg-[#013A8F]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button - Adjusted positioning and size */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#014AB2] hover:bg-[#014AB2]/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-lg">
              <div className="px-4 py-2 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.path}
                    className={`block px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                      activeLink === link.name
                        ? "bg-[#014AB2]/10 text-[#014AB2] font-bold"
                        : "text-gray-600 hover:bg-[#014AB2]/5"
                    }`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="pt-4 pb-2 space-y-2">
                  <motion.a
                    href="/sign-in"
                    className="block w-full px-4 py-3 text-sm text-center font-medium text-[#014AB2] rounded-lg bg-[#014AB2]/10"
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.a>
                  <motion.a
                    href="/sign-up"
                    className="block w-full px-4 py-3 text-sm text-center font-bold text-white bg-[#014AB2] rounded-lg"
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;