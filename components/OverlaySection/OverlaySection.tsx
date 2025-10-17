'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './OverlaySection.scss';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { DescTexts, SectionTitle } from '../Texts/Texts';

const OverlaySection = ({ children }: { children: any }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Track scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end center'], // triggers when section is in view
    });

    // Smooth transition
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });

    // Map scroll progress to viewport height (not section height)
    const height1 = useTransform(smoothScroll, [0, 1], ['0vh', '100vh']);
    const height2 = useTransform(smoothScroll, [0, 1], ['0vh', '75vh']);
    const height3 = useTransform(smoothScroll, [0, 1], ['0vh', '50vh']);
    const height4 = useTransform(smoothScroll, [0, 1], ['0vh', '35vh']);

    return (
        <section ref={ref} className="overlay-section-wrapper">
            <div className="bars">
                <motion.div className="bar bar_1" style={{ height: height1, backgroundColor: "white" }} />
                <motion.div className="bar bar_2" style={{ height: height2, backgroundColor: "white" }} />
                <motion.div className="bar bar_3" style={{ height: height3, backgroundColor: "white" }} />
                <motion.div className="bar bar_4" style={{ height: height4, backgroundColor: "white" }} />
            </div>

            {children}
        </section>
    );
};

export default OverlaySection;



// 'use client';
// import React from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import './OverlaySection.scss';

// const OverlaySection = () => {
//     // track scroll progress (0 -> 1)
//     const { scrollYProgress } = useScroll();

//     // smooth spring motion for better feel
//     const smoothScroll = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 20,
//         restDelta: 0.001,
//     });

//     // create “staircase” height differences
//     const height1 = useTransform(smoothScroll, [0, 1], ['0%', '100%']);
//     const height2 = useTransform(smoothScroll, [0, 1], ['0%', '80%']);
//     const height3 = useTransform(smoothScroll, [0, 1], ['0%', '60%']);
//     const height4 = useTransform(smoothScroll, [0, 1], ['0%', '40%']);

//     return (
//         <div className="overlay-wrapper">
//             {/* Bars stay fixed behind everything */}
//             <div className="bars">
//                 <motion.div className="bar bar_1" style={{ height: height1 }} />
//                 <motion.div className="bar bar_2" style={{ height: height2 }} />
//                 <motion.div className="bar bar_3" style={{ height: height3 }} />
//                 <motion.div className="bar bar_4" style={{ height: height4 }} />
//             </div>
//         </div>
//     );
// };

// export default OverlaySection;
