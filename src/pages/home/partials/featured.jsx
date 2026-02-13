import { useState } from 'react';

const CardShop = ({ img, title, price }) => {
    return (
        <div>
            <div className="w-[22vw] h-[70vh]">
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className="">
                <p className='text-black/70'>{title}</p>
                <span className='text-black/70'>{price}</span>
            </div>
        </div>
    );
};

const Carousel22 = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = pages.length;

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (index) => {
        setCurrentPage(index);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Carousel Container */}
            <div className="relative">
                {/* Cards Grid */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentPage * 100}%)` }}
                    >
                        {pages.map((page, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="min-w-full flex justify-center gap-6 px-4"
                            >
                                {page.map((item) => (
                                    <CardShop
                                        key={item.id}
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevPage}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all"
                    aria-label="Previous page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextPage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all"
                    aria-label="Next page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {pages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentPage === index
                                ? 'bg-black w-8'
                                : 'bg-black/30 hover:bg-black/50'
                            }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>

            {/* Page Counter */}
            <div className="text-center mt-4 text-black/70">
                <span className="text-sm">
                    Page {currentPage + 1} of {totalPages}
                </span>
            </div>
        </div>
    );
};

export default Carousel22;