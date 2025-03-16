import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaShippingFast, FaGlobe, FaUserShield, FaClock } from 'react-icons/fa';

function AboutUs() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-[#014AB2]" />,
      title: "Fast Delivery",
      description: "Express shipping solutions to meet your urgent delivery needs across the globe."
    },
    {
      icon: <FaGlobe className="text-4xl text-[#014AB2]" />,
      title: "Global Reach",
      description: "Connected to over 200+ countries, ensuring your packages reach anywhere in the world."
    },
    {
      icon: <FaUserShield className="text-4xl text-[#014AB2]" />,
      title: "Secure Shipping",
      description: "Advanced tracking and security measures to keep your shipments safe."
    },
    {
      icon: <FaClock className="text-4xl text-[#014AB2]" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you with any queries."
    }
  ];

  const stats = [
    { number: "200+", label: "Countries Served" },
    { number: "1M+", label: "Packages Delivered" },
    { number: "50k+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/img/team/ceo.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Operations Director",
      image: "/img/team/operations.jpg"
    },
    {
      name: "Michael Chen",
      position: "Technology Head",
      image: "/img/team/tech.jpg"
    }
  ];

  return (
    <>
      {/* Home Button */}
      <motion.div 
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/home">
          <motion.button
            className="flex items-center gap-2 text-[#014AB2] font-medium px-4 py-2 rounded-xl hover:bg-[#014AB2]/10 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoArrowBack className="text-xl" />
            <span>Back to Home</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#014AB2]/0 to-transparent" />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#014AB2]/0 to-transparent" /> */}
          <img 
            src="/img/about-us.jpg" 
            alt="Background Pattern" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Typography variant="h1" className="text-5xl md:text-6xl font-black text-[#014AB2] mb-6">
              About Our Journey
            </Typography>
            <Typography variant="lead" className="text-[#4178C6] text-xl mb-8">
              Connecting the world through reliable and efficient shipping solutions since 2010.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-[#014AB2]/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl"
                onClick={() => window.location.href = '#contact'}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <Typography variant="h5" className="text-[#014AB2] mb-2">
                  {feature.title}
                </Typography>
                <Typography className="text-[#4178C6]">
                  {feature.description}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#014AB2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Typography variant="h2" className="text-[#fffc00] text-4xl md:text-5xl font-black mb-2">
                  {stat.number}
                </Typography>
                <Typography className="text-white text-lg">
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Typography variant="h2" className="text-[#014AB2] text-4xl font-black text-center mb-12">
            Meet Our Team
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 relative overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <Typography variant="h5" className="text-[#014AB2] mb-1">
                  {member.name}
                </Typography>
                <Typography className="text-[#4178C6]">
                  {member.position}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h2" className="text-[#014AB2] text-4xl font-black mb-8">
              Get in Touch
            </Typography>
            <Typography className="text-[#4178C6] mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-[#014AB2]/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl"
                onClick={() => navigate('/contact-us')}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
