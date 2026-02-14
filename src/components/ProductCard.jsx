import React from 'react';
import { Link } from 'react-router-dom';
import { productImages } from '../constant/images/images';

const ProductCard = ({ product }) => {
    return (
        <div className="group cursor-pointer">
            <Link to={`/shop/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <img
                        src={productImages[product.image]}
                        alt={product.name}
                        className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
            </Link>

            <Link
                to={`/shop/product/${product.id}`}
                className="block font-medium text-gray-900 mb-2 hover:text-hafsa transition-colors"
            >
                {product.name}
            </Link>

            <p className="text-lg font-semibold text-gray-900">
                ${product.price.toFixed(2)}
            </p>
        </div>
    );
};

export default ProductCard;