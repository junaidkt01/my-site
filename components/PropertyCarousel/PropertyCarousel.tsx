'use client'

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import "./PropertyCarousel.scss"

const PropertyCarousel = () => {
    const slides = [
        {
            id: 1,
            title: "MR. RIYAS'S RESIDENCE",
            location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
            images: [
                "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
                "/images/portfolio/MR. RIYAS RESIDENCE_2.jpg"
            ]
        },
        {
            id: 2,
            title: "MR. RIHAB'S RESIDENCE",
            location: "Mukkam, Kerala | G+Ray Residence | 2500 Sq. feet",
            images: [
                "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
                "/images/portfolio/MR. RIYAS RESIDENCE_2.jpg"
            ]
        },
        {
            id: 3,
            title: "DR. SUMESH'S RESIDENCE",
            location: "Kottayam, Kerala | Completed in 2025 | Turnkey Residence | 2500 Sq. feet",
            images: [
                "/images/portfolio/DR. SUMESH'S RESIDENCE_1.jpg"
            ]
        },
        {
            id: 4,
            title: "MODERN VILLA",
            location: "Trivandrum, Kerala | Contemporary Design | 3200 Sq. feet",
            images: [
                "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
                "/images/portfolio/MR. RIYAS RESIDENCE_2.jpg"
            ]
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [slides.length, isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsTransitioning(false), 600);
    }, [slides.length, isTransitioning]);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const currentSlideData = slides[currentSlide];

    return (
        <div
            className='property_carousel'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className='carousel_track'>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`property_images ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : 'next'}`}
                    >
                        {slide.images.map((image, imgIndex) => (
                            <div key={imgIndex} className='property_image_wrapper'>
                                <Image
                                    className='property_image'
                                    alt={`${slide.title} - Image ${imgIndex + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    src={image}
                                    style={{ objectFit: 'cover' }}
                                    priority={index === 0 && imgIndex === 0}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className='property_details'>
                <div className='grid gap-[2px] text_content'>
                    <p className='client_name' key={`name-${currentSlide}`}>{currentSlideData.title}</p>
                    <p className='property_address' key={`address-${currentSlide}`}>{currentSlideData.location}</p>
                </div>
                <div className='carousel_buttons'>
                    <button onClick={prevSlide} aria-label="Previous slide" disabled={isTransitioning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className='carousel_slide_count'>
                        <p key={`count-${currentSlide}`}>{String(currentSlide + 1).padStart(2, '0')}</p>
                        <span>/</span>
                        <p>{String(slides.length).padStart(2, '0')}</p>
                    </div>
                    <button onClick={nextSlide} aria-label="Next slide" disabled={isTransitioning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Progress bar */}
            {/* <div className='carousel_progress'>
                    <div
                        className='progress_bar'
                        style={{
                            animationPlayState: isPaused ? 'paused' : 'running',
                            animationName: `progress-${currentSlide}`
                        }}
                        key={currentSlide}
                    />
                </div> */}
        </div>
    );
};

export default PropertyCarousel;

// 'use client'

// import Image from 'next/image';
// import React, { useState, useEffect, useCallback } from 'react';
// import "./PropertyCarousel.scss"

// const PropertyCarousel = () => {
//     const slides = [
//         {
//             id: 1,
//             title: "MR. RIYAS'S RESIDENCE",
//             location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
//             images: [
//                 "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
//                 "/images/portfolio/MR. RIYAS RESIDENCE_2.jpg"
//             ]
//         },
//         {
//             id: 2,
//             title: "MR. RIHAB'S RESIDENCE",
//             location: "Mukkam, Kerala | G+Ray Residence | 2500 Sq. feet",
//             images: [
//                 "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
//                 "/images/portfolio/MR. RIYAS RESIDENCE_2.jpg"
//             ]
//         },
//         {
//             id: 3,
//             title: "DR. SUMESH'S RESIDENCE",
//             location: "Kottayam, Kerala | Completed in 2025 | Turnkey Residence | 2500 Sq. feet",
//             images: [
//                 "/images/portfolio/DR. SUMESH'S RESIDENCE_1.jpg"
//             ]
//         },
//         {
//             id: 4,
//             title: "MODERN VILLA",
//             location: "Trivandrum, Kerala | Contemporary Design | 3200 Sq. feet",
//             images: [
//                 "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg",
//                 "/images/portfolio/MR. RIYAS RESIDENCE_1.jpg"
//             ]
//         }
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     const nextSlide = useCallback(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, [slides.length]);

//     const prevSlide = useCallback(() => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     }, [slides.length]);

//     // Auto-play functionality
//     useEffect(() => {
//         if (isPaused) return;

//         const interval = setInterval(() => {
//             nextSlide();
//         }, 5000); // Change slide every 5 seconds

//         return () => clearInterval(interval);
//     }, [isPaused, nextSlide]);

//     const currentSlideData = slides[currentSlide];

//     return (
//         <div
//             className='property_carousel'
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//         >
//             <div className='property_images'>
//                 {currentSlideData.images.map((image, index) => (
//                     <div key={index} className='property_image_wrapper'>
//                         <Image
//                             className='property_image'
//                             alt={`${currentSlideData.title} - Image ${index + 1}`}
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//                             src={image}
//                             style={{ objectFit: 'cover' }}
//                             priority={index === 0}
//                         />
//                     </div>
//                 ))}
//             </div>
//             <div className='property_details'>
//                 <div className='grid gap-[2px]'>
//                     <p className='client_name'>{currentSlideData.title}</p>
//                     <p className='property_address'>{currentSlideData.location}</p>
//                 </div>
//                 <div className='carousel_buttons'>
//                     <button onClick={prevSlide} aria-label="Previous slide">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M12 5L5 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                     <div className='carousel_slide_count'>
//                         <p>{String(currentSlide + 1).padStart(2, '0')}</p>
//                         <span>/</span>
//                         <p>{String(slides.length).padStart(2, '0')}</p>
//                     </div>
//                     <button onClick={nextSlide} aria-label="Next slide">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyCarousel;