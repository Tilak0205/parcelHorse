import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      link: "tel:+15551234567"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: ["support@parcelhorse.com", "info@parcelhorse.com"],
      link: "mailto:support@parcelhorse.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      details: ["123 Shipping Street", "Logistics City, LC 12345"],
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
    { icon: <FaFacebook />, link: "#", label: "Facebook" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" }
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

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-white to-[#014AB2]/5">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Typography variant="h1" className="text-4xl md:text-5xl font-black text-[#014AB2] mb-4">
                Get in Touch
              </Typography>
              <Typography variant="lead" className="text-[#4178C6]">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </Typography>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#014AB2]/10 text-[#014AB2] mb-4">
                      {info.icon}
                    </div>
                    <Typography variant="h5" className="text-[#014AB2] mb-2">
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography key={idx} className="text-[#4178C6]">
                        {detail}
                      </Typography>
                    ))}
                    {info.link && (
                      <a
                        href={info.link}
                        className="mt-2 text-[#014AB2] hover:text-[#013A8F] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View More →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl bg-white shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="!border-[#014AB2]/20 focus:!border-[#014AB2]"
                      required
                    />
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="!border-[#014AB2]/20 focus:!border-[#014AB2]"
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="!border-[#014AB2]/20 focus:!border-[#014AB2]"
                    required
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="!border-[#014AB2]/20 focus:!border-[#014AB2]"
                    rows={6}
                    required
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="bg-[#014AB2]/80 hover:bg-[#013A8F] w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                  
                  {submitStatus === 'success' && (
                    <Typography className="text-green-500 text-center">
                      Message sent successfully!
                    </Typography>
                  )}
                  
                  {submitStatus === 'error' && (
                    <Typography className="text-red-500 text-center">
                      Error sending message. Please try again.
                    </Typography>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Typography variant="h4" className="text-[#014AB2] mb-6">
                Connect With Us
              </Typography>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#014AB2]/10 text-[#014AB2] hover:bg-[#014AB2] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
