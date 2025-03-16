import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <div>
      {/* Add the scissor-effect SVG */}
      <img
        src="/img/scissor-effect.svg"
        alt="Scissor Effect"
        className="w-full"
        style={{ marginBottom: "-1px" }} // Ensures no unwanted gap between the image and the footer
      />

      <footer className="relative px-4 pt-8 pb-6 bg-[#014AB2] rounded-tl-[80px] sm:rounded-tl-[120px] md:rounded-tl-[180px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap pt-6 text-center lg:text-left">
            <div className="w-full px-4 mb-8 lg:mb-0 lg:w-6/12">
              <Typography
                variant="h4"
                className="mb-4 bold text-white text-2xl sm:text-3xl md:text-4xl"
                color="white"
              >
                {title}
              </Typography>
              <Typography className="font-normal text-white/80 text-sm sm:text-base mx-auto lg:mx-0 lg:w-2/3">
                {description}
              </Typography>
              <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
                {socials.map(({ name, path }) => (
                  <a
                    key={name}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="white"
                      className="rounded-full shadow-none bg-transparent hover:bg-white/20"
                    >
                      <Typography color="white">
                        <i className={`fa-brands fa-${name} text-sm sm:text-base`} />
                      </Typography>
                    </IconButton>
                  </a>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-8 lg:mt-0 w-full lg:w-6/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-24">
                {menus.map(({ name, items }) => (
                  <div key={name} className="mb-8 sm:mb-0">
                    <Typography
                      variant="small"
                      color="white"
                      className="mb-4 block font-bold uppercase text-white text-center lg:text-left"
                    >
                      {name}
                    </Typography>
                    <ul className="mt-3 space-y-2">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Typography
                            as="a"
                            href={item.path}
                            target="_blank"
                            rel="noreferrer"
                            variant="small"
                            className="block font-normal text-white/70 hover:text-white transition-colors text-sm text-center lg:text-left"
                          >
                            {item.name}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-6 border-white/20" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4">
              <Typography
                variant="small"
                className="font-normal text-white/70 text-center text-xs sm:text-sm"
              >
                {copyright}
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.defaultProps = {
  title: "Parcel Horse",
  description: "Trusted and seamless delivery service.",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "gray",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "Company",
      items: [
        { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        { name: "Reviews", path: "https://www.creative-tim.com/blog" },
        {
          name: "Blog",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        {
          name: "Privacy Policy",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
        {
          name: "Cookie Policy",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
        {
          name: "Terms & Conditions",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
        {
          name: "Acceptable Use Policy",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
        {
          name: "Sitemap",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
      ],
    },
    {
      name: "Shipping Services",
      items: [
        {
          name: "Ship A Package",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Track A Package",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Domestic Shipping",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "International Shipping",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "Bulk Shipping",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "Couriers",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "Delivery Services",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
    {
      name: "Customers",
      items: [
        {
          name: "login",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Signu Up",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Support hub",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "Preferences",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "Retailer Returns",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "Selling Guides",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
        {
          name: "How To Guides",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Mavixverse{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Team
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
