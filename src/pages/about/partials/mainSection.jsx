import React from 'react';
import { shopy4 } from '../../../constant/images/images';

const MainSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start overflow-hidden">
                {/* left Side */}
                <div className="flex rounded-2xl justify-center md:justify-end overflow-hidden group">
                    <img
                        src={shopy4}
                        alt="About us"
                        className="w-full max-w-md rounded-xl h-auto transition-transform duration-500 overflow-hidden group-hover:scale-110"
                    />
                    
                </div>

                {/* right Side */}
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our story</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                        <p>
                            Phasellus egestas nisi nisi, lobortis ultricies netus semper hac. Vestibulum pharetra ac arcu at
                            pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
                            porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida
                            lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam
                            imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
                            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
                            pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed
                            rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                            Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-gray-300 p-6 my-8">
                            <p className="italic text-gray-700 mb-3 text-sm">
                                Creativity is just connecting things. When you ask creative people how they did something, they
                                feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to
                                them after a while.
                            </p>
                            <p className="text-xs text-gray-500">- Steve Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;