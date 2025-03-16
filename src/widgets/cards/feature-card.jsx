import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

export function FeatureCard({ title, description, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }} // Add a subtle hover animation
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
    >
      <Card className="relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: "0 4px 14px 0 rgba(65, 120, 198, 0.3)" }}>
        {/* Image overlapping the card */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full">
          <img
            src={imageUrl}
            alt="Feature"
            className="h-full w-full object-cover rounded-l-xl"
          />
        </div>

        {/* Card Content */}
        <CardBody className="p-8 text-left relative z-10">
          {/* Heading */}
          <Typography variant="h3" className="mb-4 font-bold text-[#014AB2]">
            {title}
          </Typography>

          {/* Description */}
          <Typography className="font-normal text-[#014AB2]">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired, // Add imageUrl prop for the overlapping image
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;