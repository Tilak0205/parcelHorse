import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { StarIcon, BadgeCheckIcon } from "@heroicons/react/24/solid";

export function ReviewCard({ rating, verified, title, description, username, postedTime }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10 w-full max-w-sm">
      <CardBody className="px-6 py-4">
        {/* Rating and Verified Badge */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          {verified && (
            <BadgeCheckIcon className="h-5 w-5 text-green-500" />
          )}
        </div>

        {/* Title */}
        <Typography variant="h6" className="mb-2 text-blue-gray-800">
          {title}
        </Typography>

        {/* Description */}
        <Typography className="font-normal text-blue-gray-600 mb-4">
          {description}
        </Typography>

        {/* Username and Posted Time */}
        <div className="flex justify-between text-sm text-blue-gray-500">
          <span>{username}</span>
          <span>{postedTime}</span>
        </div>
      </CardBody>
    </Card>
  );
}

ReviewCard.defaultProps = {
  rating: 0,
  verified: false,
};

ReviewCard.propTypes = {
  rating: PropTypes.number.isRequired,
  verified: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  postedTime: PropTypes.string.isRequired,
};

ReviewCard.displayName = "/src/widgets/layout/review-card.jsx";

export default ReviewCard;
