// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
// import { DescTexts, ServicesTitle } from "../Texts/Texts";
// import { PrimaryButton } from "../Button/Button";

// const servicesData = [
//     { title: "TURNKEY RESIDENCES", desc: "Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence." },
//     { title: "NRI DREAM PROJECTS", desc: "Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers" },
//     { title: "INTERIOR TRANSFORMATIONS", desc: "Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers" },
//     { title: "VAASTU-COMPLIANT DESIGNS", desc: "Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly." },
// ];

// const Services = () => {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"],
//     });

//     // Controls parallax image movement
//     const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

//     // Controls the fade-in of the left column
//     const leftOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.9, 1], [0, 1, 1, 0]);

//     return (
//         <section
//             ref={sectionRef}
//             className="services_section flex gap-[32px] bg-white"
//             style={{ justifyContent: "space-between", width: "100%", minHeight: "500vh", position: "relative", }}>
//             {/* LEFT SECTION */}
//             <motion.div className="flex-1 flex flex-col" style={{ padding: "0px 0 110px 90px", position: "sticky", top: 0, height: "100vh", opacity: leftOpacity, justifyContent: "center" }}>
//                 {/* Sticky Header */}
//                 <div style={{ marginBottom: "60px", display: "flex", alignItems: "center" }}>
//                     <BreadCrumbs />
//                 </div>

//                 {/* Service List */}
//                 <div>
//                     {servicesData.map((service, index) => (
//                         <AnimatedService
//                             key={index}
//                             index={index}
//                             total={servicesData.length}
//                             title={service.title}
//                             scrollYProgress={scrollYProgress}
//                         />
//                     ))}
//                     <div>
//                         <PrimaryButton label='MORE ABOUT US' />
//                     </div>
//                 </div>
//             </motion.div>

//             {/* RIGHT IMAGE SECTION */}
//             <div className="flex-2 relative" style={{ height: "100vh", position: "sticky", top: 0, overflow: "hidden" }}>
//                 <motion.div style={{ y: imageY, height: "100%", width: "100%", position: "relative" }}>
//                     <Image src="/images/service_img.jpg" alt="Service Image" fill style={{ objectFit: "cover", objectPosition: "center", }} priority />
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// // === Service Animation (appears and stays visible) ===
// const AnimatedService = ({ title, index, total, scrollYProgress }: { title: string; index: number; total: number; scrollYProgress: any }) => {
//     const step = 1 / total;
//     const start = index * step;
//     const end = (index + 1) * step;

//     // Fade in only once, stays visible
//     const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
//     const y = useTransform(scrollYProgress, [start, start + 0.1], [40, 0]);

//     return (
//         <motion.div style={{ opacity, y, transition: "opacity 0.6s ease, transform 0.6s ease", marginBottom: "40px" }} >
//             <ServicesTitle title={title} />
//             <DescTexts color='#878C91' desc='Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers' />
//         </motion.div>
//     );
// };

// export default Services;


"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { DescTexts, ServicesTitle } from "../Texts/Texts";
import { PrimaryButton } from "../Button/Button";

const servicesData = [
    {
        title: "TURNKEY RESIDENCES",
        desc: "Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.",
        image: "/images/service_img.jpg",
    },
    {
        title: "NRI DREAM PROJECTS",
        desc: "Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers.",
        image: "/images/service_img_2.jpg",
    },
    {
        title: "INTERIOR TRANSFORMATIONS",
        desc: "Creative makeovers showcasing dramatic yet functional transformations.",
        image: "/images/service_img.jpg",
    },
    {
        title: "VAASTU-COMPLIANT DESIGNS",
        desc: "Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly.",
        image: "/images/service_img_2.jpg",
    },
];

const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the image section
    const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);
    // Fade in left section
    const leftOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            className="services_section flex gap-[32px] bg-white"
            style={{
                justifyContent: "space-between",
                width: "100%",
                minHeight: "500vh",
                position: "relative",
            }}
        >
            {/* LEFT SECTION */}
            <motion.div
                className="flex-1 flex flex-col"
                style={{
                    padding: "0px 0 110px 90px",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    opacity: leftOpacity,
                    justifyContent: "center",
                }}
            >
                {/* Sticky Header */}
                <div style={{ marginBottom: "60px", display: "flex", alignItems: "center" }}>
                    <BreadCrumbs title="SERVICES" />
                </div>

                {/* Service List */}
                <div>
                    {servicesData.map((service, index) => (
                        <AnimatedService
                            key={index}
                            index={index}
                            total={servicesData.length}
                            title={service.title}
                            desc={service.desc}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}

                    <div>
                        <PrimaryButton label="MORE ABOUT US" />
                    </div>
                </div>
            </motion.div>

            {/* RIGHT IMAGE SECTION (Multiple crossfade images) */}
            <div
                className="flex-1 relative"
                style={{
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    overflow: "hidden",
                }}
            >
                {servicesData.map((service, index) => (
                    <CrossfadeImage
                        key={index}
                        index={index}
                        total={servicesData.length}
                        image={service.image}
                        scrollYProgress={scrollYProgress}
                        imageY={imageY}
                    />
                ))}
            </div>
        </section>
    );
};

// === Service Animation (appears and stays visible) ===
const AnimatedService = ({
    title,
    desc,
    index,
    total,
    scrollYProgress,
}: {
    title: string;
    desc: string;
    index: number;
    total: number;
    scrollYProgress: any;
}) => {
    const step = 1 / total;
    const start = index * step;
    const end = (index + 1) * step;

    // Fade in only once (stays visible)
    const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
    const y = useTransform(scrollYProgress, [start, start + 0.1], [40, 0]);

    return (
        <motion.div
            style={{
                opacity,
                y,
                transition: "opacity 0.6s ease, transform 0.6s ease",
                marginBottom: "40px",
            }}
        >
            <ServicesTitle title={title} />
            <DescTexts color="#878C91" desc={desc} />
        </motion.div>
    );
};

// === Crossfading Image Component ===
const CrossfadeImage = ({
    image,
    index,
    total,
    scrollYProgress,
    imageY,
}: {
    image: string;
    index: number;
    total: number;
    scrollYProgress: any;
    imageY: any;
}) => {
    const step = 1 / total;
    const start = index * step;
    const end = (index + 1) * step;

    // Image fade in/out range
    const opacity = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{
                opacity,
                y: imageY,
                position: "absolute",
                inset: 0,
            }}
        >
            <Image
                src={image}
                alt="Service Image"
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                priority
            />
        </motion.div>
    );
};

export default Services;

// import React from 'react'
// import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
// import { DescTexts, ServicesTitle } from '../Texts/Texts'
// import Image from 'next/image'
// import { PrimaryButton } from '../Button/Button'

// const Services = () => {
//     return (
//         <div className='services_section flex gap-[32px]' style={{ justifyContent: "space-between", backgroundColor: "white", width: "100%", position: "relative", top: '0px' }}  >
//             <div className='flex-1 flex gap-[40px]' style={{ padding: "0px 0 110px 90px" }} >
//                 <div>
//                     <BreadCrumbs />
//                 </div>
//                 <div style={{ display: 'grid' }} >
//                     <div>
//                         <ServicesTitle title={'TURNKEY RESIDENCES'} />
//                         <DescTexts color='#878C91' desc='Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.' />
//                     </div>
//                     <div>
//                         <ServicesTitle title={'NRI DREAM PROJECTS'} />
//                         <DescTexts color='#878C91' desc='Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers' />
//                     </div>
//                     <div>
//                         <ServicesTitle title={'INTERIOR TRANSFORMATIONS'} />
//                         <DescTexts color='#878C91' desc='Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers' />
//                     </div>
//                     <div>
//                         <ServicesTitle title={'VAASTU-COMPLIANT DESIGNS'} />
//                         <DescTexts color='#878C91' desc='Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly.' />
//                     </div>
// <div>
//     <PrimaryButton label='MORE ABOUT US' />
// </div>
//                 </div>
//             </div>
//             <div className="service_img flex-2" style={{ backgroundColor: "green", height: '100dvh' }}>
//                 <Image style={{ height: "100%", width: "100%", objectFit: "fill" }} src="/images/service_img.jpg" alt="..." width={708} height={561} />
//             </div>
//         </div>

//     )
// }

// export default Services
