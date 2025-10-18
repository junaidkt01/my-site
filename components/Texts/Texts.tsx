'use client'

import React from 'react'
import "./Texts.scss";
import { motion } from 'framer-motion';

const TitleText = () => {
    return (
        <div className='texts_component' >
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }}
                className=""
            >
                <span className="">
                    We are Architects of Environment
                </span>

                <motion.span initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="block" >& Curators of Space</motion.span>
            </motion.h1>
        </div>
    )
}

export default TitleText;

export const SectionTitle = () => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
            className="section_title"
        >
            <span className="">
                Building Homes,
            </span>

            <motion.span initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                className="block" >Building Trust</motion.span>
        </motion.h1>
    )
}

export const DescTexts = ({ desc, color }: { desc: string; color: string }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
            className="desc_title" style={{ color: color }} >

            <motion.span initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                className="block" >{desc}</motion.span>
        </motion.p>
    )
}




export const ServicesTitle = ({ title }: { title: string }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
            className="service_title"
        >
            <span className="">

            </span>

            <motion.span initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                className="block" >{title}</motion.span>
        </motion.h2>
    )
}