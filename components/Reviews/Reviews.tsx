import Image from 'next/image'
import React from 'react'
import "./Reviews.scss"

const Reviews = () => {
    return (
        <div className='review_carousel' >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }} >
                <Review />
                <Review />
            </div>

            <div className='carousel_buttons' >
                <button aria-label="Previous slide" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button aria-label="Next slide" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Reviews

const Review = () => {
    return (
        <div className='review' >
            <div className='client' >
                <div className='client_pic' >
                    <Image height={70} width={70} alt='client' src={"/images/portfolio/MR. RIYAS RESIDENCE_1.jpg"} />
                </div>
                <div className='client_details' >
                    <h3>Mr. Joe & Family</h3>
                    <p>Stock Consultant</p>
                </div>
            </div>
            <div className='client_review' >
                <p>“I had an outstanding experience with L'empire Builders! From the start, their team demonstrated remarkable planning and attention to detail. They listened carefully to our needs, creating a plan that aligned perfectly with our vision and budget. I highly recommend L'empire Builders to anyone seeking reliable and professional construction services.”</p>
            </div>
        </div>
    )
}