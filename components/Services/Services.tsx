import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import { DescTexts, ServicesTitle } from '../Texts/Texts'
import Image from 'next/image'
import { PrimaryButton } from '../Button/Button'

const Services = () => {
    return (
        <>
            <div className='services_section flex gap: 32px;' style={{ justifyContent: "space-between", backgroundColor: "white", width: "100%", position: "relative", top: '0px' }}  >
                <div className='flex-1 flex gap-[40px]' style={{ padding: "110px 0 110px 90px", position: "sticky", top: "100px" }} >
                    <div>
                        <BreadCrumbs />
                    </div>
                    <div style={{ display: 'grid' }} >
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <PrimaryButton label='MORE ABOUT US' />
                        </div>
                    </div>
                </div>
                <div className="service_img flex-1" style={{ backgroundColor: "green", height: '100dvh' }}>
                    <Image style={{ height: "100%", width: "100%", objectFit: "fill" }} src="/images/service_img.jpg" alt="..." width={708} height={561} />
                </div>
            </div>
            <div className='services_section flex gap: 32px;' style={{ justifyContent: "space-between", backgroundColor: "red", width: "100%" }}  >
                <div className='flex-1 flex gap-[40px]' style={{ padding: "110px 0 110px 90px" }} >
                    <div>
                        <BreadCrumbs />
                    </div>
                    <div style={{ display: 'grid' }} >
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <ServicesTitle />
                            <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
                        </div>
                        <div>
                            <PrimaryButton label='MORE ABOUT US' />
                        </div>
                    </div>
                </div>
                <div className="service_img flex-1" style={{ backgroundColor: "green", height: '100dvh' }}>
                    <Image style={{ height: "100%", width: "100%", objectFit: "fill" }} src="/images/service_img.jpg" alt="..." width={708} height={561} />
                </div>
            </div>
        </>
    )
}

export default Services
