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
    const height5 = useTransform(smoothScroll, [0, 1], ['0vh', '10vh']);

    return (
        <section ref={ref} className="overlay-section-wrapper">
            <div className="bars">
                <motion.div className="bar bar_1" style={{ height: height1, backgroundColor: "white" }} />
                <motion.div className="bar bar_2" style={{ height: height2, backgroundColor: "white" }} />
                <motion.div className="bar bar_3" style={{ height: height3, backgroundColor: "white" }} />
                <motion.div className="bar bar_4" style={{ height: height4, backgroundColor: "white" }} />
                <motion.div className="bar bar_5" style={{ height: height5, backgroundColor: "white" }} />
                <motion.div className="bar bar_5" style={{ height: height5, backgroundColor: "white" }} />
            </div>

            {children}
        </section>
    );
};

export default OverlaySection;



export const OverlayCountSection = ({ content_1, content_2, content_3 }: { content_1: any, content_2: any, content_3: any }) => {
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
    const height5 = useTransform(smoothScroll, [0, 1], ['0vh', '10vh']);

    return (
        <section ref={ref} className="overlay-section-wrapper" style={{ maxHeight: "calc(100vh + 300px)", backgroundColor: "" }} >
            <div className="bars" style={{ backgroundColor: "" }} >
                <motion.div className="bar bar_1 bg-[black]" style={{ height: height1 }} />
                <motion.div className="bar bar_2 bg-[black]" style={{ height: height2 }} />
                <motion.div className="bar bar_3 bg-[black]" style={{ height: height3 }} />
                <motion.div className="bar bar_4 bg-[black]" style={{ height: height4 }} />
                <motion.div className="bar bar_5 bg-[black]" style={{ height: height5 }} />
                <motion.div className="bar bar_5 bg-[black]" style={{ height: height5 }} />
            </div>
            <div style={{ backgroundColor: "black", width: "100%", height: "300px" }} ></div>
            <div className="bars" style={{ backgroundColor: "black" }} >
                <motion.div className="bar bar_1 content bg-[#F7F6F1]" style={{ height: height1 }} ><div> <span>250 <span>+</span> </span> <p>{content_1}</p> </div></motion.div>
                <motion.div className="bar bar_2 content bg-[#F7F6F1]" style={{ height: height2 }} ><div> <span>250 <span>+</span> </span> <p>{content_2}</p> </div></motion.div>
                <motion.div className="bar bar_3 content bg-[#F7F6F1]" style={{ height: height3 }} ><div> <span>250 <span>+</span> </span> <p>{content_3}</p> </div></motion.div>
                <motion.div className="bar bar_4 content bg-[#F7F6F1]" style={{ height: height4 }} />
                <motion.div className="bar bar_5 content bg-[#F7F6F1]" style={{ height: height5 }} />
                <motion.div className="bar bar_5 content bg-[#F7F6F1]" style={{ height: height5 }} />
            </div>

            {/* <div className="bars" style={{ backgroundColor: "black" }} >
                <motion.div className="bar bar_1" style={{ height: height1, backgroundColor: "white" }} ><h1 style={{ fontSize: "32px", color: "white", position: "relative", left: "100%", top: "8%", textWrap: "nowrap" }} dangerouslySetInnerHTML={{ __html: content_1 }} /></motion.div>
                <motion.div className="bar bar_2" style={{ height: height2, backgroundColor: "white" }} ><h1 style={{ fontSize: "32px", color: "white", position: "relative", left: "100%", top: "8%", textWrap: "nowrap" }} dangerouslySetInnerHTML={{ __html: content_2 }} /></motion.div>
                <motion.div className="bar bar_3" style={{ height: height3, backgroundColor: "white" }} ><h1 style={{ fontSize: "32px", color: "white", position: "relative", left: "100%", top: "8%", textWrap: "nowrap" }} dangerouslySetInnerHTML={{ __html: content_3 }} /></motion.div>
                <motion.div className="bar bar_4" style={{ height: height4, backgroundColor: "white" }} />
                <motion.div className="bar bar_5" style={{ height: height5, backgroundColor: "white" }} />
                <motion.div className="bar bar_5" style={{ height: height5, backgroundColor: "white" }} />
            </div> */}
        </section>
    );
};