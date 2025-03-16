import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, brandLogo, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2  text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {routes.map(({ name, path, icon }) => {
        const isActive = location.pathname === path;
        return (
          <Typography
            key={name}
            as="li"
            variant="small"
            className={`capitalize font-bold px-3 py-2 rounded-md transition duration-300 ${
              isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
            }`}
          >
            <Link to={path} className="flex items-center gap-2">
              {icon && React.createElement(icon, { className: "w-[18px] h-[18px] opacity-75" })}
              {name}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <nav className="bg-[#014AB2] border-b-4 border-[#FFFC00] fixed top-5 left-0 w-full z-50 py-3 px-6 rounded-3xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2">
          {brandLogo && <img src={brandLogo} alt="Brand Logo" className="h-10" />}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">{navList}</div>

        {/* Action Button */}
        <div className="hidden lg:block">{React.cloneElement(action)}</div>

        {/* Mobile Menu Button */}
        <button className="ml-auto text-white lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${openNav ? "block" : "hidden"} lg:hidden bg-[#014AB2] px-4 pt-2 pb-4 text-white`}> 
        {navList}
        <div className="mt-4">{React.cloneElement(action, { className: "w-full block" })}</div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  brandName: "Parcel Horse",
  brandLogo: "public/img/parcel-horse-logo.png",
  action: (
    <Button className="bg-[#FFFC00] text-[#014AB2] font-bold px-6 py-2 rounded-md">
      Sign in / Sign up
    </Button>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  brandLogo: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;


// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import {
//   Button,
//   Typography,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export function Navbar({ brandName, brandLogo, routes, action }) {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 text-gray-700 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       {routes.map(({ name, path, icon, href, target }) => (
//         <Typography
//           key={name}
//           as="li"
//           variant="small"
//           className="capitalize text-gray-700"
//         >
//           {href ? (
//             <a
//               href={href}
//               target={target}
//               className="flex items-center gap-1 p-1 font-bold"
//             >
//               {icon &&
//                 React.createElement(icon, {
//                   className: "w-[18px] h-[18px] opacity-75 mr-1",
//                 })}
//               {name}
//             </a>
//           ) : (
//             <Link
//               to={path}
//               target={target}
//               className="flex items-center gap-1 p-1 font-bold"
//             >
//               {icon &&
//                 React.createElement(icon, {
//                   className: "w-[18px] h-[18px] opacity-75 mr-1",
//                 })}
//               {name}
//             </Link>
//           )}
//         </Typography>
//       ))}
//     </ul>
//   );

//   return (
//     <nav className="bg-white rounded-full shadow-lg pl-6 pb-3 pt-3 pr-6 fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[100%] z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Brand Name & Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           {brandLogo && (
//             <img src={brandLogo} alt="Brand Logo" className="w-auto h-10" />
//           )}
//           {/* <Typography className="font-bold text-gray-800">{brandName}</Typography> */}
//         </Link>

//         {/* Navigation List (Desktop View) */}
//         <div className="hidden lg:block">{navList}</div>

//         {/* Search Bar & Action (Desktop View) */}
//         <div className="hidden lg:flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-500"
//             style={{ minWidth: "200px" }}
//           />
//           {React.cloneElement(action, {
//             className: "hidden lg:inline-block",
//           })}
//         </div>

//         {/* Mobile Navigation Toggle Button */}
//         <button
//           className="ml-auto text-gray-700 lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon strokeWidth={2} className="h-6 w-6" />
//           ) : (
//             <Bars3Icon strokeWidth={2} className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`${
//           openNav ? "block" : "hidden"
//         } lg:hidden bg-white px-4 pt-2 pb-4 text-gray-800 rounded-xl shadow-md`}
//       >
//         <div className="container mx-auto">
//           {navList}
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-500 w-full"
//             />
//           </div>
//           {React.cloneElement(action, {
//             className: "mt-4 w-full block",
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.defaultProps = {
//   brandName: "Parcel Horse",
//   brandLogo: "public/img/parcel-horse-logo.png", // Provide a default logo URL if needed
//   action: (
//     <a
//       href="https://www.creative-tim.com/product/material-tailwind-kit-react"
//       target="_blank"
//     >
//       <Button variant="gradient" size="sm" fullWidth>
//         Sign in/Sign up
//       </Button>
//     </a>
//   ),
// };

// Navbar.propTypes = {
//   brandName: PropTypes.string,
//   brandLogo: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   action: PropTypes.node,
// };

// Navbar.displayName = "/src/widgets/layout/navbar.jsx";

// export default Navbar;
