import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { shopi2, shopy3, shopy4, shopy5, shopy6, shopy7, shopy8, itemCart01 } from '../../../constant/images/images';

function Carousel2() {
    const products = [
        { img: shopi2, title: "Boxy3 T-Shirt with Roll sleeve", price: "$20,00" },
        { img: shopy3, title: "Boxy2 T-Shirt with Roll sleeve", price: "$20,00" },
        { img: shopy4, title: "Boxy1 T-Shirt with Roll sleeve", price: "$20,00" },
        { img: shopy5, title: "Boxy T-Shirt with Roll sleeve Details", price: "$20,00" },
        { img: shopy6, title: "Boxy7 T-Shirt with Roll sleeve", price: "$20,00" },
        { img: shopy7, title: "Boxy6 T-Shirt with Roll sleeve", price: "$20,00" },
        { img: shopy8, title: "Boxy5 T-Shirt with Roll sleeve", price: "$20,00" },
        { img: itemCart01, title: "Boxy4 T-Shirt with Roll sleeve", price: "$20,00" },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-center text-3xl tracking-wide pb-18 font-bold">FEATURES PRODUCTS</h1>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{ delay: 4000 }}
                loop={true}
                speed={800}
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                    640: { slidesPerView: 2, slidesPerGroup: 2 },
                    1024: { slidesPerView: 4, slidesPerGroup: 4 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative overflow-hidden "
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-100 object-cover"
                            />

                            <div
                                className={`absolute inset-0 flex items-center justify-center transition duration-300 ${hoveredIndex === index ? "bg-black/30" : "bg-black/0"
                                    }`}
                            >
                                {hoveredIndex === index && (
                                    <button className="bg-black absolute bottom-3  hover:bg-blend-screen hover:bg-[#E65540] text-[17px] font-light text-white px-10 py-2 rounded-full transition duration-300">
                                        ADD TO CARD
                                    </button>
                                )}
                            </div>


                        </div>
                        <div className="mt-2 text-center">
                            <h3 className="text-[17px] font-light tracking-wide text-start">{product.title}</h3>
                            <p className="text-[18px] font-light text-black text-start">{product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-prev absolute -left-12 top-1/2 -translate-y-1/2 z-30
                      w-12 h-12 flex items-center justify-center text-7xl text-gray-400 hover:text-gray-600 cursor-pointer text-3xl">
                &#8249;
            </div>

            <div className="custom-next absolute -right-12 top-1/2 -translate-y-1/2 z-30
                      w-12 h-12 flex items-center justify-center text-7xl text-gray-400 hover:text-gray-600 cursor-pointer text-3xl">
                &#8250;
            </div>
        </div>
    );
}

export default Carousel2;