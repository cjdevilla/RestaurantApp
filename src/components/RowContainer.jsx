import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 bg-black ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-225 h-auto backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src=""
            alt=""
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Something
          </p>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
