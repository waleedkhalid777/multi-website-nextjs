import React from 'react';
import ProductCard from './productCard';


const productData = [
    {
        img: "/jacket.jpg",
        title: "Jacket",
        desc: "Parker men's jacket",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/skirt.jpg",
        title: "Skirt",
        desc: "Teal pleated skirt",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/ww.jpg",
        title: "Watch",
        desc: "Men's choice in pakistan",
        rating: 5,
        price: "65.00"
    },
    {
        img: "/jogger.jpg",
        title: "Jogger",
        desc: "Running jogger shoes",
        rating: 6,
        price: "85.00"
    },
    {
        img: "/shitss.jpg",
        title: "Shirt",
        desc: "Men's corporate shirt",
        rating: 3,
        price: "55.00"
    },
    {
        img: "/chain.jpg",
        title: "Chain",
        desc: "Stainless steel chain",
        rating: 2,
        price: "35.00"
    },


    {
        img: "/beg.jpeg",
        title: "Mens bag",
        desc: "mens bag  in pakistan",
        rating: 3,
        price: "40.00"
    },


    {
        img: "/lens.jpg",
        title: "Lens",
        desc: "Hd Wide Angle Lens",
        rating: 2,
        price: "35.00"
    }
];

const Product = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4">New Products</h2>
                
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
