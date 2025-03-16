import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Card,
  CardBody,
  Stepper,
  Step,
  Switch,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { 
  FaBox,
  FaMapMarkerAlt,
  FaTruck,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWeightHanging,
  FaRuler,
} from 'react-icons/fa';

function SendParcel() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sameAsShipper, setSameAsShipper] = useState(false);

  const [formData, setFormData] = useState({
    // Shipper Details
    shipperName: "",
    shipperEmail: "",
    shipperPhone: "",
    shipperAddress: "",
    shipperCity: "",
    shipperCountry: "",
    shipperPostcode: "",

    // Recipient Details
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    recipientCountry: "",
    recipientPostcode: "",

    // Parcel Details
    weight: "",
    length: "",
    width: "",
    height: "",
    parcelType: "",
    description: "",
    
    // Shipping Options
    serviceType: "",
    insurance: false,
    signature: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSameAsShipper = () => {
    setSameAsShipper(!sameAsShipper);
    if (!sameAsShipper) {
      setFormData(prev => ({
        ...prev,
        recipientName: prev.shipperName,
        recipientEmail: prev.shipperEmail,
        recipientPhone: prev.shipperPhone,
        recipientAddress: prev.shipperAddress,
        recipientCity: prev.shipperCity,
        recipientCountry: prev.shipperCountry,
        recipientPostcode: prev.shipperPostcode,
      }));
    }
  };

  const handleNext = () => {
    setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => {
    setActiveStep((cur) => cur - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle successful submission
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {/* Header Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Typography variant="h1" className="text-4xl md:text-5xl font-black text-[#014AB2] mb-4">
                Send a Parcel
              </Typography>
              <Typography variant="lead" className="text-[#4178C6] mb-8">
                Fill in the details below to send your parcel quickly and securely.
              </Typography>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-[1200px] mx-auto">
              <CardBody className="p-8">
                <Stepper
                  activeStep={activeStep}
                  className="mb-16"
                >
                  <Step onClick={() => setActiveStep(0)}>
                    <FaUser className="h-5 w-5" />
                    <div className="absolute -bottom-[2.5rem] w-max text-center">
                      <Typography
                        variant="h6"
                        className={`text-sm ${activeStep === 0 ? "text-[#014AB2]" : "text-blue-gray-600"}`}
                      >
                        Shipper Details
                      </Typography>
                    </div>
                  </Step>
                  <Step onClick={() => setActiveStep(1)}>
                    <FaMapMarkerAlt className="h-5 w-5" />
                    <div className="absolute -bottom-[2.5rem] w-max text-center">
                      <Typography
                        variant="h6"
                        className={`text-sm ${activeStep === 1 ? "text-[#014AB2]" : "text-blue-gray-600"}`}
                      >
                        Recipient Details
                      </Typography>
                    </div>
                  </Step>
                  <Step onClick={() => setActiveStep(2)}>
                    <FaBox className="h-5 w-5" />
                    <div className="absolute -bottom-[2.5rem] w-max text-center">
                      <Typography
                        variant="h6"
                        className={`text-sm ${activeStep === 2 ? "text-[#014AB2]" : "text-blue-gray-600"}`}
                      >
                        Parcel Details
                      </Typography>
                    </div>
                  </Step>
                  <Step onClick={() => setActiveStep(3)}>
                    <FaTruck className="h-5 w-5" />
                    <div className="absolute -bottom-[2.5rem] w-max text-center">
                      <Typography
                        variant="h6"
                        className={`text-sm ${activeStep === 3 ? "text-[#014AB2]" : "text-blue-gray-600"}`}
                      >
                        Shipping Options
                      </Typography>
                    </div>
                  </Step>
                </Stepper>

                <form onSubmit={handleSubmit} className="mt-16">
                  {activeStep === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
                    >
                      <Input
                        type="text"
                        label="Full Name"
                        name="shipperName"
                        value={formData.shipperName}
                        onChange={handleChange}
                        icon={<FaUser />}
                        required
                      />
                      <Input
                        type="email"
                        label="Email"
                        name="shipperEmail"
                        value={formData.shipperEmail}
                        onChange={handleChange}
                        icon={<FaEnvelope />}
                        required
                      />
                      <Input
                        type="tel"
                        label="Phone"
                        name="shipperPhone"
                        value={formData.shipperPhone}
                        onChange={handleChange}
                        icon={<FaPhone />}
                        required
                      />
                      <Input
                        type="text"
                        label="Address"
                        name="shipperAddress"
                        value={formData.shipperAddress}
                        onChange={handleChange}
                        icon={<FaMapMarkerAlt />}
                        required
                      />
                      <Input
                        type="text"
                        label="City"
                        name="shipperCity"
                        value={formData.shipperCity}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        type="text"
                        label="Postcode"
                        name="shipperPostcode"
                        value={formData.shipperPostcode}
                        onChange={handleChange}
                        required
                      />
                      <Select
                        label="Country"
                        name="shipperCountry"
                        value={formData.shipperCountry}
                        onChange={(value) => handleChange({ target: { name: 'shipperCountry', value } })}
                        required
                      >
                        <Option value="UK">United Kingdom</Option>
                        <Option value="US">United States</Option>
                        <Option value="CA">Canada</Option>
                        {/* Add more countries */}
                      </Select>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6 px-4"
                    >
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={sameAsShipper}
                          onChange={handleSameAsShipper}
                        />
                        <Typography>Same as shipper</Typography>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          type="text"
                          label="Full Name"
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleChange}
                          icon={<FaUser />}
                          required
                        />
                        <Input
                          type="email"
                          label="Email"
                          name="recipientEmail"
                          value={formData.recipientEmail}
                          onChange={handleChange}
                          icon={<FaEnvelope />}
                          required
                        />
                        {/* Add remaining recipient fields similar to shipper fields */}
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
                    >
                      <Input
                        type="number"
                        label="Weight (kg)"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        icon={<FaWeightHanging />}
                        required
                      />
                      <Input
                        type="number"
                        label="Length (cm)"
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        icon={<FaRuler />}
                        required
                      />
                      <Input
                        type="number"
                        label="Width (cm)"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                        icon={<FaRuler />}
                        required
                      />
                      <Input
                        type="number"
                        label="Height (cm)"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        icon={<FaRuler />}
                        required
                      />
                      <Select
                        label="Parcel Type"
                        name="parcelType"
                        value={formData.parcelType}
                        onChange={(value) => handleChange({ target: { name: 'parcelType', value } })}
                        required
                      >
                        <Option value="document">Document</Option>
                        <Option value="package">Package</Option>
                        <Option value="large">Large Item</Option>
                      </Select>
                      <Textarea
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6 px-4"
                    >
                      <Select
                        label="Service Type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={(value) => handleChange({ target: { name: 'serviceType', value } })}
                        required
                      >
                        <Option value="standard">Standard Delivery</Option>
                        <Option value="express">Express Delivery</Option>
                        <Option value="next-day">Next Day Delivery</Option>
                      </Select>

                      <div className="flex items-center gap-4">
                        <Switch
                          label="Add Insurance"
                          checked={formData.insurance}
                          onChange={() => setFormData(prev => ({ ...prev, insurance: !prev.insurance }))}
                        />
                        <Switch
                          label="Require Signature"
                          checked={formData.signature}
                          onChange={() => setFormData(prev => ({ ...prev, signature: !prev.signature }))}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-12 px-4">
                    {activeStep > 0 && (
                      <Button onClick={handlePrev} variant="text" className="text-[#014AB2]">
                        Prev
                      </Button>
                    )}
                    {activeStep < 3 ? (
                      <Button onClick={handleNext} className="ml-auto bg-[#014AB2]">
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" className="ml-auto bg-[#014AB2]" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    )}
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

export default SendParcel;
