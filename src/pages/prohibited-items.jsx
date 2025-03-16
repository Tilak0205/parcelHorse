import React from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { 
  FaSkull, 
  FaBomb, 
  FaFlask, 
  FaFire,
  FaPrescriptionBottleAlt,
  FaShieldAlt,
  FaWineGlass,
  FaExclamationTriangle
} from 'react-icons/fa';

function ProhibitedItems() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const prohibitedCategories = [
    {
      icon: <FaSkull className="text-3xl text-red-500" />,
      title: "Dangerous Goods",
      items: [
        "Explosives",
        "Radioactive materials",
        "Compressed gases",
        "Flammable liquids",
        "Toxic substances"
      ]
    },
    {
      icon: <FaPrescriptionBottleAlt className="text-3xl text-red-500" />,
      title: "Controlled Substances",
      items: [
        "Illegal drugs",
        "Prescription medications without proper documentation",
        "Psychoactive substances",
        "Steroids",
        "Unregistered pharmaceuticals"
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      title: "Weapons & Ammunition",
      items: [
        "Firearms",
        "Ammunition",
        "Weapon parts",
        "Explosives",
        "Military equipment"
      ]
    },
    {
      icon: <FaWineGlass className="text-3xl text-red-500" />,
      title: "Restricted Liquids",
      items: [
        "Alcohol without proper permits",
        "Flammable liquids",
        "Corrosive substances",
        "Hazardous chemicals",
        "Unauthorized beverages"
      ]
    }
  ];

  const additionalInfo = [
    {
      title: "Legal Restrictions",
      content: "Shipping prohibited items may result in legal consequences including fines and imprisonment. Always check local and international shipping regulations."
    },
    {
      title: "Special Permits",
      content: "Some restricted items may be shipped with special permits and proper documentation. Contact our support team for more information."
    },
    {
      title: "Declaration Requirements",
      content: "All items must be properly declared. False declarations may result in penalties and permanent shipping restrictions."
    },
    {
      title: "Safety Guidelines",
      content: "Our prohibited items policy is designed to ensure the safety of our staff, shipping partners, and recipients."
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

      <div className="min-h-screen bg-gradient-to-b from-white to-[#014AB2]/5 pt-6">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <FaExclamationTriangle className="text-5xl text-red-500" />
              </div>
              <Typography variant="h1" className="text-4xl md:text-5xl font-black text-[#014AB2] mb-4">
                Prohibited Items
              </Typography>
              <Typography variant="lead" className="text-[#4178C6] mb-8">
                For everyone's safety, the following items are strictly prohibited from shipping through our service.
              </Typography>
            </motion.div>
          </div>
        </section>

        {/* Prohibited Items Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardBody>
                      <div className="flex items-center gap-4 mb-4">
                        {category.icon}
                        <Typography variant="h5" className="text-[#014AB2]">
                          {category.title}
                        </Typography>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-[#4178C6]">
                        {category.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Typography variant="h3" className="text-[#014AB2] text-2xl font-bold mb-6 text-center">
              Important Information
            </Typography>
            <div className="max-w-3xl mx-auto">
              {additionalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Accordion
                    open={open === index + 1}
                    className="mb-2 rounded-lg border border-[#014AB2]/20 px-4"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index + 1)}
                      className="text-[#014AB2]"
                    >
                      {info.title}
                    </AccordionHeader>
                    <AccordionBody className="text-[#4178C6]">
                      {info.content}
                    </AccordionBody>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-xl p-6 text-center"
            >
              <Typography variant="h5" className="text-red-500 mb-2">
                Important Notice
              </Typography>
              <Typography className="text-red-700">
                Attempting to ship prohibited items may result in confiscation, fines, and legal action. 
                When in doubt, please contact our support team for clarification.
              </Typography>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProhibitedItems;
