import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Button,
  Input,
  Card,
  CardBody,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { 
  FaBox, 
  FaTruck, 
  FaWarehouse, 
  FaCheckCircle,
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaExclamationCircle
} from 'react-icons/fa';

function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState(null);

  // Mock tracking data - replace with actual API call
  const mockTrackingData = {
    status: "In Transit",
    estimatedDelivery: "March 25, 2024",
    currentLocation: "London Distribution Center",
    trackingEvents: [
      {
        status: "Out for Delivery",
        location: "London Local Courier Facility",
        timestamp: "March 24, 2024 08:30 AM",
        icon: <FaTruck />
      },
      {
        status: "Arrived at Distribution Center",
        location: "London Distribution Center",
        timestamp: "March 23, 2024 11:45 PM",
        icon: <FaWarehouse />
      },
      {
        status: "Package Processed",
        location: "Manchester Sorting Facility",
        timestamp: "March 23, 2024 03:20 PM",
        icon: <FaBox />
      },
      {
        status: "Package Picked Up",
        location: "Manchester, UK",
        timestamp: "March 23, 2024 09:15 AM",
        icon: <FaCheckCircle />
      }
    ]
  };

  const handleTracking = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (trackingNumber.length < 5) {
        throw new Error("Invalid tracking number");
      }
      
      setTrackingResult(mockTrackingData);
    } catch (error) {
      setError(error.message);
      setTrackingResult(null);
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-500";
      case "In Transit":
        return "text-blue-500";
      case "Pending":
        return "text-orange-500";
      default:
        return "text-gray-500";
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
        {/* Search Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Typography variant="h1" className="text-4xl md:text-5xl font-black text-[#014AB2] mb-4">
                Track Your Package
              </Typography>
              <Typography variant="lead" className="text-[#4178C6] mb-8">
                Enter your tracking number to get real-time updates on your shipment.
              </Typography>

              <form onSubmit={handleTracking} className="flex flex-col md:flex-row gap-4 justify-center">
                <Input
                  type="text"
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="!border-[#014AB2]/20 focus:!border-[#014AB2] bg-white/50 backdrop-blur-sm"
                  containerProps={{ className: "min-w-[300px]" }}
                  icon={<FaSearch className="text-[#014AB2]" />}
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit"
                    className="bg-[#014AB2]/80 hover:bg-[#013A8F]"
                    disabled={isSearching}
                  >
                    {isSearching ? "Searching..." : "Track Package"}
                  </Button>
                </motion.div>
              </form>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-red-500 flex items-center justify-center gap-2"
                >
                  <FaExclamationCircle />
                  <span>{error}</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        {trackingResult && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                {/* Package Status Card */}
                <Card className="mb-8">
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Typography variant="h6" className="text-[#014AB2] mb-2">
                          Status
                        </Typography>
                        <Typography className={`text-lg font-medium ${getStatusColor(trackingResult.status)}`}>
                          {trackingResult.status}
                        </Typography>
                      </div>
                      <div className="text-center">
                        <Typography variant="h6" className="text-[#014AB2] mb-2">
                          Estimated Delivery
                        </Typography>
                        <div className="flex items-center justify-center gap-2">
                          <FaClock className="text-[#4178C6]" />
                          <Typography>{trackingResult.estimatedDelivery}</Typography>
                        </div>
                      </div>
                      <div className="text-center">
                        <Typography variant="h6" className="text-[#014AB2] mb-2">
                          Current Location
                        </Typography>
                        <div className="flex items-center justify-center gap-2">
                          <FaMapMarkerAlt className="text-[#4178C6]" />
                          <Typography>{trackingResult.currentLocation}</Typography>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Tracking Timeline */}
                <Card>
                  <CardBody>
                    <Typography variant="h5" className="text-[#014AB2] mb-6">
                      Tracking History
                    </Typography>
                    <Timeline>
                      {trackingResult.trackingEvents.map((event, index) => (
                        <TimelineItem key={index}>
                          {index !== trackingResult.trackingEvents.length - 1 && (
                            <TimelineConnector />
                          )}
                          <TimelineHeader>
                            <TimelineIcon className="bg-[#014AB2]">
                              {event.icon}
                            </TimelineIcon>
                            <div className="flex flex-col">
                              <Typography variant="h6" className="text-[#014AB2]">
                                {event.status}
                              </Typography>
                              <Typography variant="small" className="text-[#4178C6]">
                                {event.timestamp}
                              </Typography>
                            </div>
                          </TimelineHeader>
                          <TimelineBody>
                            <Typography className="text-[#4178C6]">
                              {event.location}
                            </Typography>
                          </TimelineBody>
                        </TimelineItem>
                      ))}
                    </Timeline>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default TrackingPage;
