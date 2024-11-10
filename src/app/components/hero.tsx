"use client";
import React from 'react';
import Slider from "react-slick";
import Slide from './slide';




const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
   
    
  };

  const slideData = [
    {
      id: 0,
      img: "/Banner 1.jpg",
      // title: "Trending items",
      // mainTitle: "WOMEN'S LATEST FASHION S",
      price: "$30",
    },
    {
      id: 1,
      img: "/Banner 2.jpg",
      // title: "Trending items",
      // mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$50",
    },
    {
      id: 2,
      img: "/Banner 3.jpg",
      // title: "Trending items",
      // mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$40",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide 
             key={item.id}
             img={item.img}
             title={item.title}
             mainTitle={item.mainTitle}
             price= {item.price}



            />
            
          ))}
        </Slider>
        
      </div>
    </div>
  );
};

export default Hero;
