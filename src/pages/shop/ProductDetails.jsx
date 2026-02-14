import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../../data/product.json';
import { productImages } from '../../constant/images/images';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                <Link to="/shop" className="text-hafsa hover:underline">
                    Back to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link to="/" className="text-gray-600 hover:text-hafsa">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/shop" className="text-gray-600 hover:text-hafsa">Shop</Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="rounded-lg overflow-hidden bg-gray-100">
                    <img
                        src={productImages[product.image]}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {product.name}
                    </h1>

                    <p className="text-3xl font-semibold text-hafsa mb-6">
                        ${product.price.toFixed(2)}
                    </p>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                        High-quality t-shirt with boxy fit and stylish roll sleeves. Perfect for casual everyday wear.
                    </p>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                        <div className="flex gap-2 flex-wrap">
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border-2 transition-colors rounded ${selectedSize === size
                                            ? 'border-hafsa text-hafsa'
                                            : 'border-gray-300 hover:border-hafsa hover:text-hafsa'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
                        <div className="flex gap-2 flex-wrap">
                            {['White', 'Black', 'Gray'].map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-4 py-2 border-2 transition-colors rounded ${selectedColor === color
                                            ? 'border-hafsa text-hafsa'
                                            : 'border-gray-300 hover:border-hafsa hover:text-hafsa'
                                        }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="w-full md:w-auto px-8 py-3 bg-hafsa text-white font-semibold rounded hover:bg-opacity-90 transition-colors mb-8">
                        Add to Cart
                    </button>

                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Product Details</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-700 flex items-start">
                                <span className="mr-2">•</span>
                                Material: 100% Cotton
                            </li>
                            <li className="text-gray-700 flex items-start">
                                <span className="mr-2">•</span>
                                Machine washable
                            </li>
                            <li className="text-gray-700 flex items-start">
                                <span className="mr-2">•</span>
                                Imported
                            </li>
                            <li className="text-gray-700 flex items-start">
                                <span className="mr-2">•</span>
                                Boxy fit with roll sleeves
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
