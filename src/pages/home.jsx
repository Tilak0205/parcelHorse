import React from "react";
// import NavbarMenu from "@/components/ui/navbar-menu";
import "@fontsource/inter"; // Loads Inter font
import "/public/css/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FaBox, FaTruckPickup, FaPlane, FaMapMarkerAlt } from "react-icons/fa";
// import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Carousel from 'better-react-carousel';
import CarouselCard, { TeamCardCarousel } from '@/widgets/cards/carousel-card';
import carouselData, { teamDataCarousel } from '@/data/carousel-data';
import TestimonialCard from "@/widgets/cards/testimonial-card";
import testimonialData from "@/data/testimonial-data";
import Navbar from "@/components/Navbar";


const SelectWithInput = ({ label, selectOptions, inputPlaceholder }) => (
  <motion.div 
    className="space-y-2"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <label className="block text-[#014AB2] text-sm font-semibold mb-2">{label}</label>
    <div className="flex gap-2">
      <motion.select 
        className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300"
        whileTap={{ scale: 0.98 }}
      >
        {selectOptions.map((option, index) => (
          <option key={index} value={option.value} className="text-[#014AB2]">
            {option.label}
          </option>
        ))}
      </motion.select>
      <motion.input
        type="text"
        placeholder={inputPlaceholder}
        className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
        whileTap={{ scale: 0.98 }}
      />
    </div>
  </motion.div>
);


const HeroSection = () => {
  return (
    <>
      {/* Large Screen Layout (unchanged) */}
      <div className="hidden md:block relative flex h-screen content-center items-center justify-center pt-0 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/home-background-ph.jpg')] bg-cover bg-center opacity-90"></div>
        <div className="absolute top-0 h-full w-full bg-white/20"></div>

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-col items-center">
            {/* Heading Section */}
            <div className="w-full text-center px-6 mb-12">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  style={{ color: "#014AB2" }}
                  className="mb-8 mt-20 font-black text-5xl md:text-6xl"
                >
                  Trusted Logistics Partner
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Typography
                  style={{ color: "#4178C6" }}
                  className="opacity-80 text-xl md:text-2xl leading-relaxed mb-6"
                >
                  Ensure your parcels reach their destination safely and on time.
                </Typography>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-8xl p-0 pb-20">
              <motion.div
                className="bg-white/30 backdrop-blur-md p-8 border border-white/50 shadow-xl rounded-2xl"
                whileHover={{ boxShadow: "0 20px 40px rgba(1, 74, 178, 0.1)" }}
              >
                <Typography
                  variant="h3"
                  className="mb-8 font-bold text-center text-2xl text-[#014AB2]"
                >
                  Quick Enquiry
                </Typography>

                {/* Form Content */}
                <form className="space-y-6">
                  {/* Sending To/From Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                        Sending To
                      </label>
                      <div className="flex gap-2">
                        <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="in">India</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Postcode"
                          className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                        Sending From
                      </label>
                      <div className="flex gap-2">
                        <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="in">India</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Postcode"
                          className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Measurements Row */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                        Weight
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                        />
                        <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                          <option value="kg">kg</option>
                          <option value="lb">lb</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                        Length
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                        />
                        <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                          <option value="cm">cm</option>
                          <option value="in">in</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                        Width
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                        />
                        <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                          <option value="cm">cm</option>
                          <option value="in">in</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                        Height
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                        />
                        <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                          <option value="cm">cm</option>
                          <option value="in">in</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Buttons Row */}
                  <div className="flex flex-col md:flex-row justify-center gap-4 pt-4 pb-4">
                    <motion.button
                      type="reset"
                      className="bg-gray-500/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Clear Form
                    </motion.button>
                    <motion.button
                      type="button"
                      className="bg-[#014AB2]/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(1,74,178,0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add Another Parcel
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="bg-green-500/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(34,197,94,0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get a Quote
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="block md:hidden relative flex flex-col items-center justify-center pt-16 pb-32">
        {/* Background Image */}
        <div className="absolute top-0 h-full w-full bg-[url('/img/home-background-ph.jpg')] bg-cover bg-center opacity-90"></div>
        <div className="absolute top-0 h-full w-full bg-white/20"></div>

        {/* Content Container */}
        <div className="container relative mx-auto px-4">
          {/* Heading Section */}
          <div className="w-full text-center mb-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                style={{ color: "#014AB2" }}
                className="mb-4 font-black text-3xl sm:text-4xl"
              >
                Trusted Logistics Partner
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography
                style={{ color: "#4178C6" }}
                className="opacity-80 text-base sm:text-lg leading-relaxed"
              >
                Ensure your parcels reach their destination safely and on time.
              </Typography>
            </motion.div>
          </div>

          {/* Form Section */}
          <div className="w-full mt-8">
            <motion.div
              className="bg-white/30 backdrop-blur-md p-6 border border-white/50 shadow-xl rounded-2xl"
              whileHover={{ boxShadow: "0 20px 40px rgba(1, 74, 178, 0.1)" }}
            >
              <Typography
                variant="h3"
                className="mb-6 font-bold text-center text-xl text-[#014AB2]"
              >
                Quick Enquiry
              </Typography>

              {/* Form Content */}
              <form className="space-y-6">
                {/* Sending To/From Row */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                      Sending To
                    </label>
                    <div className="flex gap-2">
                      <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="in">India</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Postcode"
                        className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                      Sending From
                    </label>
                    <div className="flex gap-2">
                      <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="in">India</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Postcode"
                        className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Measurements Row */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                      Weight
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                      />
                      <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                        <option value="kg">kg</option>
                        <option value="lb">lb</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                      Length
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                      />
                      <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                        <option value="cm">cm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                      Width
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                      />
                      <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                        <option value="cm">cm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#014AB2] text-sm font-semibold mb-2">
                      Height
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
                      />
                      <select className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300">
                        <option value="cm">cm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-col md:flex-row justify-center gap-4 pt-4 pb-4">
                  <motion.button
                    type="reset"
                    className="bg-gray-500/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear Form
                  </motion.button>
                  <motion.button
                    type="button"
                    className="bg-[#014AB2]/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(1,74,178,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add Another Parcel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-green-500/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(34,197,94,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get a Quote
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};




const RatesSection = () => {
  const [showAll, setShowAll] = React.useState(false); // State to manage "View More"

  const headings = [
    "India", "Pakistan", "China", "USA", "Europe", "Nigeria", "Australia", 
    "Bangladesh", "Canada", "Brazil", "Rwanda", "New Zealand"
  ];

  const contents = [
    "from £4.75", "from £5.00", "from £13.00", "from £5.00", "from £4.75", 
    "from £4.99", "from £4.00", "from £2.50", "from £5.00", "from £13.00", 
    "from £5.00", "from £7.00"
  ];

  return (
    <motion.section
      className="px-4 pt-16 pb-16"
      style={{ backgroundColor: '#014AB2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <Typography
          variant="h3"
          style={{ color: 'white' }}
          className="mb-8 font-black text-center lg:center"
        >
          Today's Rate Per KG
        </Typography>

        {/* Animated Search Input */}
        <motion.div
          className="mt-4 mb-10 order-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring focus:ring-[#4178C6] order-2 w-1/3"
          />
        </motion.div>

        {/* Grid for Rates */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {headings
            .slice(0, showAll ? headings.length : (window.innerWidth >= 768 ? headings.length : 4))
            .map((heading, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(0,0,0,0.05)] bg-white transition-transform transform hover:scale-105 hover:shadow-[7px_7px_20px_rgba(0,0,0,0.1),-7px_-7px_20px_rgba(0,0,0,0.1)]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                  rotate: [0, -2, 2, 0]
                }}
              >
                <h2 className="font-semibold mb-2 ml-4 text-[#014AB2]">{heading}</h2>
                <p className="text-gray-600 ml-4">{contents[index]}</p>
              </motion.div>
            ))}
        </motion.div>

        {/* "View More" Button for Small Screens */}
        {headings.length > 4 && window.innerWidth < 768 && (
          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="text-[#014AB2] font-medium text-sm border-2 border-[#014AB2] rounded-full px-6 py-2 bg-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : 'View More'}
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

// export RatesSection;

const FieldGroup = ({ label, placeholder, selectOptions }) => (
  <motion.div 
    className="space-y-2"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <label className="block text-[#014AB2] text-sm font-semibold mb-2">{label}</label>
    <div className="flex gap-2">
      <motion.input
        type="number"
        placeholder={placeholder}
        className="border-2 border-[#014AB2]/20 rounded-xl p-3 flex-grow bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium placeholder:text-[#014AB2]/50 transition-all duration-300"
        whileTap={{ scale: 0.98 }}
      />
      <motion.select 
        className="border-2 border-[#014AB2]/20 rounded-xl p-3 w-32 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#014AB2] focus:border-transparent text-[#014AB2] font-medium transition-all duration-300"
        whileTap={{ scale: 0.98 }}
      >
        {selectOptions.map((option, index) => (
          <option key={index} value={option.value} className="text-[#014AB2]">
            {option.label}
          </option>
        ))}
      </motion.select>
    </div>
  </motion.div>
);

const TestimonialSection = () => {
  const [showAll, setShowAll] = React.useState(false);
  
  return (
    <section className="px-4 pt-10 pb-20">
      <div className="container mx-auto">
        {/* Headers with responsive text sizes */}
        <Typography
          variant="lead"
          style={{ color: '#4178C6' }}
          className="mb-2 font-black text-center text-sm sm:text-base md:text-lg"
        >
          Don't take our word for it!
        </Typography>
        <Typography
          variant="h3"
          style={{ color: '#014AB2' }}
          className="mb-8 font-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Thousands of people give us 5 stars!
        </Typography>
        
        <div className="mt-12 sm:mt-24 relative">
          {/* Mobile View: Vertical Stack */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-6 p-4 bg-gray-100">
              {testimonialData.slice(0, showAll ? testimonialData.length : 2).map(({ name, position, image, testimonial, rating }) => (
                <motion.div
                  key={name}
                  className="w-full h-auto text-white flex items-center justify-center rounded-lg shadow-md p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard
                    name={name}
                    position={position}
                    image={image}
                    testimonial={testimonial}
                    rating={rating}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* View More Button - Only on mobile */}
            {testimonialData.length > 2 && (
              <div className="mt-8 flex justify-center">
                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  className="text-[#014AB2] font-medium text-sm border-2 border-[#014AB2] rounded-full px-6 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAll ? 'Show Less' : 'View More'}
                </motion.button>
              </div>
            )}
          </div>

          {/* Desktop View: Horizontal Scroll */}
          <div className="hidden md:block">
            <div className="flex overflow-x-auto space-x-4 p-4 bg-gray-100 testimonial-scroll scrollbar-hide">
              {testimonialData.map(({ name, position, image, testimonial, rating }) => (
                <motion.div
                  key={name}
                  className="flex-shrink-0 min-w-[300px] h-auto text-white flex items-center justify-center rounded-lg shadow-md p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard
                    name={name}
                    position={position}
                    image={image}
                    testimonial={testimonial}
                    rating={rating}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get a Quote Button */}
          <div className="mt-12 flex justify-center">
            <motion.div
              animate={{ 
                y: [0, -8, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button 
                variant="filled" 
                style={{
                  backgroundColor: "#014ab2",
                  borderRadius: "30px",
                  padding: "0.75rem 2rem",
                  boxShadow: "0 4px 14px rgba(1, 74, 178, 0.3)",
                }}
                className="text-sm sm:text-base hover:shadow-lg hover:bg-[#013A8F] transform hover:-translate-y-1 transition-all duration-300"
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function Home() {
  const headings = [
    "India", "Pakistan", "China", "USA", "Europe", "Nigeria", "Australia", "Bangladesh", "Canada", "Brazil", "Rwanda", "New Zealand", "Australia", "Bangladesh", "Canada",
];

const contents = [
    "from £4.75",  "from £5.00", "from £13.00", "from £5.00", "from £4.75", "from £4.99", "from £4.00", "from £2.50", "from £5.00", "from £13.00", "from £5.00", "from £7.00", "from £4.99", "from £4.99", "from £7.00"
];

  const [active, setActive] = React.useState(null);

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "in", label: "India" },
    { value: "cn", label: "India" },
  ];

  const weightOptions = [
    { value: "kg", label: "kg" },
    { value: "lb", label: "lb" },
  ];

  const lengthOptions = [
    { value: "cm", label: "cm" },
    { value: "in", label: "in" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for child elements
      },
    },
  };
  
  

  const featuresData = [
    {
      title: "International Shipping",
      description: "We can help you ship to over 200 global destinations.",
      imageUrl: "/img/airplane-white-image.png", // Replace with your image path
    },
    {
      title: "Domestic Shipping",
      description: "Get discounted rates with UPS, USPS, and more.",
      imageUrl: "/img/truck-image.png", // Replace with your image path
    },
    // Add more features as needed
  ];

  

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  
  const stepsData = [
    {
      step: "1",
      icon: "📦", // Replace with your icon or image
      heading: "Get a Quote",
      description: "Enter your package details & get instant pricing.",
    },
    {
      step: "2",
      icon: "🚚", // Replace with your icon or image
      heading: "Schedule Pickup",
      description: "We collect your parcel from your doorstep.",
    },
    {
      step: "3",
      icon: "✈️", // Replace with your icon or image
      heading: "Secure Shipping",
      description: "Your package is shipped via trusted couriers.",
    },
    {
      step: "4",
      icon: "📍", // Replace with your icon or image
      heading: "Track & Receive",
      description: "Track your parcel & receive it hassle-free.",
    },
  ];

  

  return (
    <>
    
    <>
      <Navbar />

      

      {/* Second Section: Form */}
      
    </>
      
    <HeroSection />

    <RatesSection />



        <section className="mt-10 px-4 pb-10 pt-10">
          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="container mx-auto">
              <div className="relative flex flex-col items-center">
                {/* Mobile Background - Simplified version */}
                <div 
                  className="absolute inset-0 bg-[#4178C6] rounded-3xl"
                  style={{
                    borderBottomRightRadius: '120px',
                    borderTopRightRadius: '120px',
                    borderBottomLeftRadius: '2px',
                    borderTopLeftRadius: '120px',
                    background: `
                      linear-gradient(to right, transparent 95%, rgba(255, 255, 255, 0.05) 20%),
                      linear-gradient(to bottom, transparent 95%, rgba(255, 255, 255, 0.05) 20%),
                      #4178C6
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Content Container */}
                <div className="relative z-20 w-full p-6 pt-10 pb-8">
                  {/* Image positioned at top */}
                  {/* <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    animate={{ 
                      y: [-60, -50, -60],
                      filter: [
                        'drop-shadow(-5px 5px 5px rgba(0,0,0,0.2))',
                        'drop-shadow(5px 5px 8px rgba(0,0,0,0.15))',
                        'drop-shadow(-5px 5px 5px rgba(0,0,0,0.2))'
                      ]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      alt="Courier Boy"
                      src="/img/why-parcel-horse-image.png"
                      className="w-full h-auto"
                    />
                  </motion.div> */}

                  {/* Text Content */}
                  <Typography
                    variant="h2"
                    className="mb-4 font-bold text-white text-2xl sm:text-3xl text-center"
                  >
                    Why Parcel Horse?
                  </Typography>
                  <Typography className="mb-6 text-white/90 text-sm sm:text-base text-center">
                    Don't let your users guess by attaching tooltips and popovers to
                    any element. Just make sure you enable them first via JavaScript.
                    <br /><br />
                    The kit comes with three pre-built pages to help you get started
                    faster. You can change the text and images, and you're good to
                    go. Just make sure you enable them first via JavaScript.
                  </Typography>
                  <div className="flex justify-center">
                    <Button
                      variant="filled"
                      className="bg-white text-[#014ab2] hover:bg-white/90 transition-all duration-300 text-sm sm:text-base"
                    >
                      Learn more about us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Keep existing code unchanged */}
          <div className="hidden md:block">
            <div className="container mx-auto">
              <div className="relative mt-32 flex flex-wrap items-center">
                {/* Overlapping Image with Animation */}
                <motion.div
                  className="absolute left-20 bottom-0 z-30 -ml-12 -mt-12 w-1/3 md:-ml-16 md:-mt-16 lg:-ml-0 lg:-mt-20"
                  initial={{ opacity: 1, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ 
                    x: [-20, 20, -20],
                    filter: [
                      'drop-shadow(-10px 10px 10px rgba(0,0,0,0.3))',
                      'drop-shadow(10px 10px 15px rgba(0,0,0,0.2))',
                      'drop-shadow(-10px 10px 10px rgba(0,0,0,0.3))'
                    ]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  viewport={{ once: false }}
                >
                  <img
                    alt="Courier Boy"
                    src="/img/why-parcel-horse-image.png"
                    className="h-auto w-full"
                  />
                </motion.div>

                {/* Rectangle Box with Text and CTA with Animation */}
                <motion.div
                  className="relative z-20 left-20 mx-auto w-full rounded-3xl border border-white/20 p-8 md:w-8/12 lg:w-6/12"
                  style={{
                    borderBottomRightRadius: 200,
                    borderTopRightRadius: 200,
                    background: `
                      linear-gradient(to right, transparent 95%, rgba(255, 255, 255, 0.05) 20%),
                      linear-gradient(to bottom, transparent 95%, rgba(255, 255, 255, 0.05) 20%),
                      #4178C6
                    `,
                    backgroundSize: '40px 40px',
                    boxShadow: '0 8px 32px rgba(1, 74, 178, 0.12)'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                >
                  <Typography
                    variant="h2"
                    className="mb-4 ml-20 mt-10 font-bold text-white"
                  >
                    Why Parcel Horse?
                  </Typography>
                  <Typography className="mb-8 ml-20 text-white/90 align-text-center">
                    Don't let your users guess by attaching tooltips and popovers to
                    any element. Just make sure you enable them first via JavaScript.
                    <br />
                    <br />
                    The kit comes with three pre-built pages to help you get started
                    faster. You can change the text and images, and you're good to
                    go. Just make sure you enable them first via JavaScript.
                  </Typography>
                  <Button
                    variant="filled"
                    className="bg-white text-[#014ab2] ml-20 hover:bg-white/90 mb-10 transition-all duration-300"
                  >
                    Learn more about us
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        <section className="flex flex-col items-center justify-center py-10 mb-10">
          <Typography
            variant="h3"
            style={{ color: '#014AB2' }}
            className="mb-12 font-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4"
          >
            How does Parcel Horse work?
          </Typography>

          {/* Mobile View (Stacked) */}
          <div className="block md:hidden w-full px-4">
            {[
              {
                icon: "/img/quote-icon.svg",
                title: "Get a Quote",
                description: "Enter your package details & get instant pricing."
              },
              {
                icon: "/img/pickup-icon.svg",
                title: "Schedule Pickup",
                description: "We collect your parcel from your doorstep."
              },
              {
                icon: "/img/shipping-icon.svg",
                title: "Secure Shipping",
                description: "Your package is shipped via trusted couriers."
              },
              {
                icon: "/img/receive-icon.svg",
                title: "Track & Receive",
                description: "Track your parcel & receive it hassle-free."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-white shadow-lg rounded-tr-xl rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4">
                    <img src={step.icon} alt={step.title} className="w-16 h-16 sm:w-20 sm:h-20" />
                  </div>
                  <Typography variant="h5" className="mb-2 font-bold text-[#014AB2] text-lg sm:text-xl">
                    {step.title}
                  </Typography>
                  <Typography className="font-body text-gray-600 text-sm sm:text-base">
                    {step.description}
                  </Typography>
                </div>
                {index < 3 && (
                  <div className="flex justify-center my-4">
                    <img 
                      src="/img/arrow-down.svg" 
                      alt="arrow" 
                      className="w-8 h-8 opacity-50"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop View (Horizontal with Arrows) */}
          <div className="hidden md:flex items-center gap-6 ml-20 mr-20">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-64"
            >
              <div className="p-4 bg-white shadow-lg rounded-tr-xl rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4">
                <img src="/img/quote-icon.svg" alt="icon" className="w-24 h-24" />
              </div>
              <Typography variant="h5" className="mb-2 font-bold text-[#014AB2]">
                Get a Quote
              </Typography>
              <Typography className="font-body text-gray-600">
                Enter your package details & get instant pricing.
              </Typography>
            </motion.div>
            <motion.img
              src="/img/arrow-up.svg"
              alt="arrow"
              className="w-46 relative bottom-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center w-64"
            >
              <div className="p-4 bg-white shadow-lg rounded-tr-xl rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4">
                <img src="/img/pickup-icon.svg" alt="icon" className="w-24 h-24" />
              </div>
              <Typography variant="h5" className="mb-2 font-bold text-[#014AB2]">
                Schedule Pickup
              </Typography>
              <Typography className="font-body text-gray-600">
                We collect your parcel from your doorstep.
              </Typography>
            </motion.div>
            <motion.img
              src="/img/arrow-down.svg"
              alt="arrow"
              className="w-46 relative top-2" // Adjusted positioning
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center text-center w-64"
            >
              <div className="p-4 bg-white shadow-lg rounded-tr-xl rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4">
                <img src="/img/shipping-icon.svg" alt="icon" className="w-24 h-24" />
              </div>
              <Typography variant="h5" className="mb-2 font-bold text-[#014AB2]">
                Secure Shipping
              </Typography>
              <Typography className="font-body text-gray-600">
                Your package is shipped via trusted couriers.
              </Typography>
            </motion.div>
            <motion.img
              src="/img/arrow-up.svg"
              alt="arrow"

              
              className="w-46 relative bottom-12" // Adjusted positioning
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col items-center text-center w-64"
            >
              <div className="p-4 bg-white shadow-lg rounded-tr-xl rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4">
                <img src="/img/receive-icon.svg" alt="icon" className="w-24 h-24" />
              </div>
              <Typography variant="h5" className="mb-2 font-bold text-[#014AB2]">
                Track & Receive
              </Typography>
              <Typography className="font-body text-gray-600">
                Track your parcel & receive it hassle-free.
              </Typography>
            </motion.div>
          </div>
        </section>

      <section className="px-4 pt-10 pb-20 flex flex-col items-center">
        <div className="container mx-auto text-center">
        <Typography
            variant="h3"
            style={{ color: '#014AB2' }}
            className="mb-8 font-black text-center lg:center "
        >
            Here are the countries we ship to!
        </Typography>
          {/* <PageTitle section="Countries we serve" heading="Here are the countries we ship to!" /> */}
        </div>

        <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
          {/* Card 1 */}
          <div className="card-container">
            <div className="card">
              <div className="front">
                <img src="/img/india-flag.png" alt="Front Side Image" />
              </div>
              <div className="back">
                <img src="/img/canada-flag.png" alt="Back Side Image" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-container">
            <div className="card">
              <div className="front">
                <img src="/img/gb-flag.png" alt="Front Side Image" />
              </div>
              <div className="back">
                <img src="/img/hm-flag.png" alt="Back Side Image" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-container">
            <div className="card">
              <div className="front">
                <img src="/img/brazil-flag.png" alt="Front Side Image" />
              </div>
              <div className="back">
                <img src="/img/dk-flag.png" alt="Back Side Image" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card-container">
            <div className="card">
              <div className="front">
                <img src="/img/srilanka-flag.png" alt="Front Side Image" />
              </div>
              <div className="back">
                <img src="/img/nepal-flag.png" alt="Back Side Image" />
              </div>
            </div>
          </div>
        </div>
      </section>


        <section className="px-2 xs:px-4 pt-0 pb-10">
          <div className="container mx-auto">
            {/* Page Title with responsive text sizes */}
            <div className="text-center mb-6 sm:mb-10">
              <Typography 
                variant="h6" 
                className="text-blue-500 font-semibold text-xs xs:text-sm sm:text-base md:text-lg mb-2"
              >
                We have different services!
              </Typography>
              <Typography
                variant="h3"
                style={{ color: '#014AB2' }}
                className="font-black text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 sm:px-4"
              >
                Choose a delivery service that's right for you
              </Typography>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 pt-4 xs:pt-6 sm:pt-10">
              {featuresData.map(({ title, description, imageUrl }) => (
                <motion.div
                  key={title}
                  className="w-full px-0 xs:px-2 sm:px-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="relative rounded-xl overflow-hidden bg-[#014AB2] shadow-lg h-full min-h-[160px] xs:min-h-[180px]">
                    {/* Image Container - Further adjusted for very small screens */}
                    <div className="absolute right-2 xs:right-3 sm:right-10 top-1/2 transform -translate-y-1/2 w-1/5 xs:w-1/4 sm:w-1/3 h-3/4">
                      <img
                        src={imageUrl}
                        alt="Feature"
                        className="h-full w-full object-contain sm:object-cover rounded-xl"
                      />
                    </div>
                    {/* Card Content - Improved layout for very small screens */}
                    <CardBody className="p-3 xs:p-4 sm:p-8 text-left relative z-10">
                      <div className="pr-8 xs:pr-12 sm:pr-24 md:pr-32">
                        <Typography 
                          variant="h3" 
                          className="mb-1 xs:mb-2 sm:mb-4 font-bold text-[#fffc00] text-sm xs:text-base sm:text-xl md:text-2xl"
                        >
                          {title}
                        </Typography>
                        <Typography 
                          className="font-normal text-white text-xs xs:text-sm sm:text-base md:text-lg line-clamp-3 xs:line-clamp-none"
                        >
                          {description}
                        </Typography>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      <TestimonialSection />
      
      <div className="bg-transparent">
        <Footer />
      </div>
    </>
  );
}

export default Home;
