import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion"; // Make sure framer-motion is imported

// Star icon (for ratings)
function StarIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-400"
      whileHover={{ scale: 1.2, rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </motion.svg>
  );
}

export function TestimonialCard({ name, position, testimonial, rating }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="w-full max-w-[26rem] overflow-hidden backdrop-blur-md bg-white/30 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader 
            floated={false} 
            shadow={false} 
            className="mx-6 mt-6 flex items-center gap-4 pt-0 pb-8 bg-transparent"
          >
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography variant="h5" className="text-[#014ab2] font-bold">
                    {name}
                  </Typography>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-0.5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {[...Array(rating)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </motion.div>
              </div>
              <Typography className="text-[#014ab2]/70">{position}</Typography>
            </div>
          </CardHeader>

          <CardBody className="mb-6 p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography className="text-[#014ab2] italic relative">
                <span className="text-4xl absolute -left-4 -top-2 opacity-20">"</span>
                {testimonial}
                <span className="text-4xl absolute -right-4 bottom-0 opacity-20">"</span>
              </Typography>
            </motion.div>
          </CardBody>
        </motion.div>
      </Card>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

TestimonialCard.displayName = "/src/widgets/layout/testimonial-card.jsx";

export default TestimonialCard;
