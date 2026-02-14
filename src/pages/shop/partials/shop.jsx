import React from 'react';
import ProductCard from '../../../components/ProductCard';
import productsData from '../../../data/product.json';

const ProductsGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsGrid;