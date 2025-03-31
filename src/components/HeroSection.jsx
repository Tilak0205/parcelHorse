import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import SelectWithInput from "./SelectWithInput";
import FieldGroup from "./FieldGroup";

const HeroSection = () => {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "in", label: "India" },
  ];

  const weightOptions = [
    { value: "kg", label: "kg" },
    { value: "lb", label: "lb" },
  ];

  const lengthOptions = [
    { value: "cm", label: "cm" },
    { value: "in", label: "in" },
  ];

  return (
    <div className="relative flex h-screen content-center items-center justify-center pt-32 pb-32">
      <div className="absolute top-0 h-full w-full bg-[url('/img/home-background-ph.jpg')] bg-cover bg-center opacity-100"></div>

      <div className="max-w-8xl container top-0 relative mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Left Section */}
          <div className="ml-auto mr-auto w-full h-full px-6 lg:w-5/12 flex flex-col justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                style={{ color: "#014AB2" }}
                className="mb-10 font-black text-center lg:text-left ml-20 text-5xl md:text-6xl"
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
                className="opacity-80 text-center lg:text-left ml-20 text-xl md:text-2xl leading-relaxed"
              >
                Ensure your parcels reach their destination safely and on time.
              </Typography>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            className="w-full pt-20 px-6 lg:w-7/12"
          >
            <motion.div
              className="bg-white/30 backdrop-blur-md p-8 border border-white/50 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ boxShadow: "0 20px 40px rgba(1, 74, 178, 0.1)" }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                <Typography
                  variant="h3"
                  className="mb-6 font-bold text-center text-2xl text-[#014AB2]"
                >
                  Quick Enquiry
                </Typography>
              </motion.div>

              <form className="mx-auto w-full">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                >
                  {[
                    {
                      component: (
                        <SelectWithInput
                          label="Sending From"
                          selectOptions={countryOptions}
                          inputPlaceholder="Postal Code"
                        />
                      ),
                    },
                    {
                      component: (
                        <SelectWithInput
                          label="Sending To"
                          selectOptions={countryOptions}
                          inputPlaceholder="Postal Code"
                        />
                      ),
                    },
                    {
                      component: (
                        <FieldGroup
                          label="Weight"
                          placeholder="Weight"
                          selectOptions={weightOptions}
                        />
                      ),
                    },
                    {
                      component: (
                        <FieldGroup
                          label="Height"
                          placeholder="Height"
                          selectOptions={lengthOptions}
                        />
                      ),
                    },
                    {
                      component: (
                        <FieldGroup
                          label="Width"
                          placeholder="Width"
                          selectOptions={lengthOptions}
                        />
                      ),
                    },
                    {
                      component: (
                        <FieldGroup
                          label="Length"
                          placeholder="Length"
                          selectOptions={lengthOptions}
                        />
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="transform transition-all duration-200"
                    >
                      {item.component}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex justify-center mt-8 space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 }}
                >
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
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(1,74,178,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add Another Parcel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-green-500/80 backdrop-blur-sm text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(34,197,94,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get a Quote
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;