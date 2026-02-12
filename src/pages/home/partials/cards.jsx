import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cards1, cards2, cards3, cards4, cards5, cards6 } from '../../../constant/images/images';

// Add the Scale animation variant that was missing
const Scale = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.4, ease: "easeOut" } }
};

const Cards = () => {
  return (
    <div className="mt-10 px-5">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]">

        {/* 1. Dresses - Left (Tall) */}
        <motion.div className="row-span-2 relative group overflow-hidden rounded-lg">
          <motion.img 
            variants={Scale} 
            initial="rest" 
            whileHover="hover" 
            src={cards1} 
            className="w-full h-full object-cover" 
            alt="Dresses" 
          />
          <Link 
            to="/shop" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer px-8 py-2 font-semibold"
          >
            DRESSES
          </Link>
        </motion.div>

        {/* 2. Watches - Middle Top */}
        <motion.div className="col-span-1 relative group overflow-hidden rounded-lg">
          <motion.img 
            variants={Scale} 
            initial="rest" 
            whileHover="hover" 
            src={cards2} 
            className="w-full h-full object-cover" 
            alt="Watches" 
          />
          <Link 
            to="/shop" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer px-8 py-2 font-semibold"
          >
            WATCHES
          </Link>
        </motion.div>

        {/* 3. Shoes - Middle Center (Tall) */}
        <motion.div className="col-span-1 row-span-2 relative group overflow-hidden rounded-lg">
          <motion.img 
            variants={Scale} 
            initial="rest" 
            whileHover="hover" 
            src={cards3} 
            className="w-full h-full object-cover" 
            alt="Shoes" 
          />
          <Link 
            to="/shop" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer px-8 py-2 font-semibold"
          >
            FOOTWEAR
          </Link>
        </motion.div>

        {/* 4. Footwear - Right (Tall) */}
        <motion.div className="row-span-2 relative group overflow-hidden rounded-lg">
          <motion.img 
            variants={Scale} 
            initial="rest" 
            whileHover="hover" 
            src={cards4} 
            className="w-full h-full object-cover" 
            alt="Footwear" 
          />
          <Link 
            to="/shop" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer px-8 py-2 font-semibold"
          >
            FOOTWEAR
          </Link>
        </motion.div>

        {/* 5. Sunglasses - Bottom Middle */}
        <motion.div className="row-span-1 relative group overflow-hidden rounded-lg">
          <motion.img 
            variants={Scale} 
            initial="rest" 
            whileHover="hover" 
            src={cards5} 
            className="w-full h-full object-cover" 
            alt="Sunglasses" 
          />
          <Link 
            to="/shop" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer px-8 py-2 font-semibold"
          >
            SUNGLASSES
          </Link>
        </motion.div>

        {/* 6. Accessories - Bottom Right */}
        <motion.div className="row-span-1 relative group overflow-hidden rounded-lg">
          <motion.img 
            variants={Scale} 
            initial="rest" 
            whileHover="hover" 
            src={cards6} 
            className="w-full h-full object-cover" 
            alt="Accessories" 
          />
          <Link 
            to="/shop" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer px-8 py-2 font-semibold"
          >
            ACCESSORIES
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Cards;