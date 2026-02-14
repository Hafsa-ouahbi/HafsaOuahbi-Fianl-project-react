import React from 'react';

const imgHero = ({ title, image }) => {
    return (
        <div className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/40" />

            <h1 className="relative text-4xl md:text-6xl font-bold text-white tracking-wider z-10">
                {title}
            </h1>
        </div>
    );
};

export default imgHero;