'use client'

import { useState, useRef, useEffect } from "react";

interface AccordionProps {
    title: string;
    content: string[];
    // content: React.ReactNode;
}

const Accordion = ({ title, content }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="border-t border-[#000000] grid gap-[20px]">
            <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium" style={{ fontSize: "clamp(16px, 3vw, 24px)" }} >{title}</span>
                <span className="text-xl transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
            >
                {
                    content.map((item) => <div className="pb-4 text-gray-600 leading-relaxed" >{item}</div>)
                    // content.map((item) => <DescTexts color="#878C91" desc={item} />)
                }
            </div>
        </div>
    );
};

export default Accordion;
