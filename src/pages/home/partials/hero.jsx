import React from 'react';
import { carousel1 } from '../../../constant/images/images';
import { carousel2 } from '../../../constant/images/images';
import { carousel3 } from '../../../constant/images/images';

const Hero = () => {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carousel1} alt="" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={carousel2} alt="" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src={carousel3} alt="" class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;