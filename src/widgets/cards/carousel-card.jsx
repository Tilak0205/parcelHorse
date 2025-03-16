import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCardCarousel({ img, name }) {
  return (
    <Card color="transparent" shadow={false} className="text-center w-72 flex-shrink-0">
      <div className="w-full h-72 overflow-hidden rounded-lg">
        <Avatar
          src={img}
          alt={name}
          size="s"
          variant="rounded"
          className="w-full h-full object-cover "
        />
      </div>
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
    </Card>
  );
}

TeamCardCarousel.defaultProps = {
  position: "",
  socials: null,
};

TeamCardCarousel.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCardCarousel.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCardCarousel;
