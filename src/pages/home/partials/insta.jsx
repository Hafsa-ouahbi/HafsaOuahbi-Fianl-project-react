export default function InstagramFollow() {
    const features = [
        {
            title: "Free Delivery Worldwide",
            description: "Mirum est notare quam littera gothica"
        },
        {
            title: "30 Days Return",
            description: "Simply return it within 30 days for an exchange."
        },
        {
            title: "Store Opening",
            description: "Shop open from Monday to Sunday"
        }
    ];

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    @ FOLLOW US ON INSTAGRAM
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-gray-200">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-6 md:px-12">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-500 italic">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}