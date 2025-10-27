import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import PropertyCarousel from '@/components/PropertyCarousel/PropertyCarousel';
import React from 'react'

const portfolio = () => {
    return (
        <div className='portfolio_page padding_section' >
            <div>
                <div className='flex' style={{ marginBottom: "23px" }} >
                    <BreadCrumbs title='Portfolio' />
                </div>
                <div className='grid gap-[50px]' >
                    <PropertyCarousel />
                    <PropertyCarousel />
                    <PropertyCarousel />
                    <PropertyCarousel />
                    <PropertyCarousel />
                </div>
            </div>
        </div>
    )
}

export default portfolio;
