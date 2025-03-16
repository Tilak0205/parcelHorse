import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";

export function CountryCard({ img, name }) {
  return (
    <Card color="transparent" shadow={false} className="text-center relative">
      <div className="relative overflow-hidden h-48">
        <div className="absolute w-full h-full animate-carousel">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Typography variant="h5" color="blue-gray" className="mt-4">
        {name}
      </Typography>
    </Card>
  );
}

CountryCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Inline CSS for the carousel animation
const style = `
  @keyframes carousel-move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-carousel {
    animation: carousel-move 20s linear infinite;
    display: flex;
  }
`;

export default CountryCard;
