"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative max-w-screen-2xl"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer font-montserrat rounded-full w-full text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <>
              {item === "About" && (
                <div className="absolute max-w-screen-2xl top-[calc(100%_+_0.5rem)] transform -translate-x-[25.5%] pr-0 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black rounded-2xl overflow-hidden border"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Products" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[31.5%] pr-0 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] "
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Application" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[39%] pr-1 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] "
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Solution" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[48.5%] pl-2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] "
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Support" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[55.5%] pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] "
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Resources" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[62.8%] pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] "
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full  dark:bg-black dark:border-white/[0.2] bg-white  flex justify-center px-2 py-2"
    >
      {React.Children.map(children, (child) => (
        <div className="mx-4">{child}</div>
      ))}
    </nav>
  );
};

