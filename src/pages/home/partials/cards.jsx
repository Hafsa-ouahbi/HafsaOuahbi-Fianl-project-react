import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cards1, cards2, cards3, cards4, cards5, cards6, image } from '../../../constant/images/images';
import { div } from 'motion/react-client';

const Scale = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.4, ease: "easeOut" } }
};

const Cards = () => {
    return (
        <div className="mt-10 px-30 grid grid-cols-3 grid-rows-2 py-10 gap-4 h-300">

            {/* 1. Dresses - Left (Tall) */}
            <motion.div className="row-span-2 relative group overflow-hidden">
                <motion.img variants={Scale} initial="rest" whileHover="hover" src={cards1} className="w-full h-full object-cover" alt="Dresses" />
                <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">DRESSES</Link>
            </motion.div>

            {/* 2. Watches - Middle Top (Square/Wide) */}
            <div className="col-span-1 relative group overflow-hidden">
                <motion.img variants={Scale} initial="rest" whileHover="hover" src={cards2} className="w-full h-full object-cover" alt="Watches" />
                <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">WATCHES</Link>
            </div>

            {/* 3. Shoes - Middle Bottom (Tall/Square) */}
            <div className="col-span-1 row-span-2 relative group overflow-hidden">
                <motion.img variants={Scale} initial="rest" whileHover="hover" src={cards3} className="w-full h-full object-cover" alt="Shoes" />
                <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">FOOTWEAR</Link>
            </div>

            <div className="row-span-2 relative group overflow-hidden" >
                <motion.img variants={Scale} initial="rest" whileHover="hover" src={cards5} className="w-full h-full object-cover" alt="FOOTERWEAR" />
                <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">FOOTERWEAR</Link>
            </div>

            <div className="row-span-1 relative group overflow-hidden">
                <motion.img variants={Scale} initial="rest" whileHover="hover" src={cards4} className="w-full h-full object-cover" alt="SUNGLASSES" />
                <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">SUNGLASSES</Link>
            </div>

            <div className="row-span-1 relative group overflow-hidden" >
                <motion.img variants={Scale} initial="rest" whileHover="hover" src={cards6} className="w-full h-full object-cover" alt="ACCESSORIES" />
                <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">ACCESSORIES</Link>
            </div>
        </div>
    );
};

export default Cards;