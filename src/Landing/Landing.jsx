import React, { useEffect } from 'react';
import Slide from './Slide';
import Text from './Text';

const Landing = () => {

    useEffect(()=>{
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
              dynamicBullets: true,
            },
            breakpoints: {
                501: {
                    slidesPerView:2,
                },
                769:{
                    slidesPerView:3,
                },
            },
        });
    },[])

    let slideData = [
        {
            img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?',
            name: 'AVRO | KO',
            span: 'NEW',
            desc: 'Introducing the latest collection from AVRO | KO, designed for a modern look.',
        },
        {
            img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?',
            name: 'LUXOR',
            span: 'SALE',
            desc: 'Shop the Luxor series at an exclusive discounted price. Limited time offer!',
        },
        {
            img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/647dc0777b1a5df29f8e5a58_thumbnail-small.webp?',
            name: 'EXPLORER',
            span: 'ARRIVAL',
            desc: 'Explore the new Explorer Edition, crafted for adventure and durability.',
        },
        {
            img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/615d965c7d1e647b4cb97b73_thumbnail-small.jpeg?',
            name: 'SLEEK',
            span: 'LIMITED',
            desc: 'Sleek, modern, and minimalist designs now available in limited stock.',
        },
        {
            img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/61cdc506856e75d4b33cd9bd_thumbnail-small.jpeg?',
            name: 'ARTISAN',
            span: 'EXCLUSIVE',
            desc: 'The Artisan Collection – A masterpiece of craftsmanship and style.',
        },
        {
            img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/621f2de86891ea03211fe874_thumbnail-small.jpeg?',
            name: 'ROYAL',
            span: 'PREMIUM',
            desc: 'Premium quality, for those who demand the best in every detail.',
        }
    ];

    return (
        <>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    {
                        slideData.map((item, index) => {
                            return (
                                <Slide key={index} item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <Text />
        </>
    )
}

export default Landing;
