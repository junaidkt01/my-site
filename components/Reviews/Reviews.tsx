"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./Reviews.scss";

const Reviews = () => {
    const reviews = [
        {
            name: "Mr. Joe & Family",
            role: "Stock Consultant",
            img: "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
            review:
                "I had an outstanding experience with L'empire Builders! From the start, their team demonstrated remarkable planning and attention to detail. They listened carefully to our needs, creating a plan that aligned perfectly with our vision and budget. Highly recommended!",
        },
        {
            name: "Mrs. Aisha Thomas",
            role: "Entrepreneur",
            img: "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
            review:
                "The team exceeded all our expectations! Every aspect, from design to delivery, was handled professionally. We love our new home!",
        },
        {
            name: "Mr. Daniel",
            role: "Bank Manager",
            img: "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
            review:
                "Excellent craftsmanship and attention to detail. They kept us updated throughout and delivered on time. A truly trustworthy builder!",
        },
        {
            name: "Ms. Reema",
            role: "Architect",
            img: "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
            review:
                "Their creativity and professionalism made our dream space come true. The process was smooth and transparent!",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Math.ceil(reviews.length / 2);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="review_carousel">
            {/* Slider Container */}
            <div className="carousel_track">
                <div
                    className="carousel_inner"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                        const first = reviews[slideIndex * 2];
                        const second = reviews[slideIndex * 2 + 1];
                        return (
                            <div className="carousel_slide" key={slideIndex}>
                                {first && <Review {...first} />}
                                {second && <Review {...second} />}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Buttons */}
            <div className="carousel_buttons">
                <button onClick={prevSlide} aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="carousel_slide_count">
                    <p>{currentIndex + 1}</p>
                    <p>/</p>
                    <p>{totalSlides}</p>
                </div>

                <button onClick={nextSlide} aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Reviews;

const Review = ({ name, role, img, review }: { name: string; role: string; img: string; review: string; }) => (
    <div className="review">
        <div className="client">
            <div className="client_pic">
                <Image height={70} width={70} alt={name} src={img} />
            </div>
            <div className="client_details">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </div>
        <div className="client_review">
            <p>“{review}”</p>
        </div>
    </div>
);

// import Image from 'next/image'
// import React from 'react'
// import "./Reviews.scss"

// const Reviews = () => {
//     return (
//         <div className='review_carousel' >
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }} >
//                 <Review />
//                 <Review />
//             </div>

//             <div className='carousel_buttons' >
//                 <button aria-label="Previous slide" >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </button>
//                 <button aria-label="Next slide" >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Reviews

// const Review = () => {
//     return (
//         <div className='review' >
//             <div className='client' >
//                 <div className='client_pic' >
//                     <Image height={70} width={70} alt='client' src={"/images/portfolio/MR. RIYAS RESIDENCE_1.jpg"} />
//                 </div>
//                 <div className='client_details' >
//                     <h3>Mr. Joe & Family</h3>
//                     <p>Stock Consultant</p>
//                 </div>
//             </div>
//             <div className='client_review' >
//                 <p>“I had an outstanding experience with L'empire Builders! From the start, their team demonstrated remarkable planning and attention to detail. They listened carefully to our needs, creating a plan that aligned perfectly with our vision and budget. I highly recommend L'empire Builders to anyone seeking reliable and professional construction services.”</p>
//             </div>
//         </div>
//     )
// }