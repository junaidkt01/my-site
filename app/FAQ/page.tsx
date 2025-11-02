import Accordion from '@/components/Accordion/Accordion'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '@/components/Texts/Texts'
import React from 'react'
import "./faq.scss"
import { faqs } from '@/lib/cms'


const FAQ = () => {
    return (
        <div className='faq_page padding_section' >
            <BreadCrumbs title='FAQs' />

            <div className='faq_wrapper' >
                {
                    faqs.map((item, index) => {
                        return (
                            <div className='accordians_wrapper' key={index} >
                                <div style={{ textWrap: "nowrap", width: "100%" }} >
                                    <SectionTitle title_1={item.title} txt_color="#010205" />
                                </div>
                                <div className="accordians" style={{ width: "100%" }} >
                                    {
                                        item.accordian.map((accordion, i) => <Accordion
                                            key={i}
                                            title={accordion.title}
                                            content={accordion.desc}
                                        />)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FAQ
