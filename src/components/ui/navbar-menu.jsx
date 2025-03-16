"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils"; // Ensure cn is correctly imported

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-black dark:text-white",
          "hover:opacity-90"
        )}
      >
        {item}
      </motion.p>

      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/20 dark:border-white/20 shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4">{children}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ children }) => {
  const [active, setActive] = useState(""); // Default to empty string

  return (
    <nav
      onMouseLeave={() => setActive("")}
      className={cn(
        "relative rounded-full border dark:bg-black bg-white shadow-input",
        "border-transparent dark:border-white/20 flex justify-center space-x-4 px-8 py-6"
      )}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setActive, active })
      )}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="flex space-x-2">
        <Image
          src={src}
          width={140}
          height={70}
          alt={title}
          className="flex-shrink-0 rounded-md shadow-2xl"
        />
        <div>
          <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
          <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link {...rest} legacyBehavior>
      <a className="text-neutral-700 dark:text-neutral-200 hover:text-black">{children}</a>
    </Link>
  );
};
