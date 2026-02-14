import React from 'react';
import ImgHero from '../../components/imgHero';
import ProductsGrid from './partials/shop';
import { banner } from '../../constant/images/images';

const Shop = () => {
    return (
        <div>
            <ImgHero title="PRODUCTS" image={banner} />
            <ProductsGrid />
        </div>
    );
};

export default Shop;