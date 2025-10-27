import React from 'react'
import "./ContactSection.scss"
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '../Texts/Texts'
import InputField from '../InputField/InputField'
import { PrimaryButton } from '../Button/Button'

const ContactSection = () => {
    return (
        <div className='contact_section padding_section' >
            <div className='contact_title_section' >
                <BreadCrumbs title='REFERRAL' />
                <SectionTitle title_1={"Refer a friend"} txt_color="#F7F6F1" />
            </div>
            <div className='contact_inputs' >
                <InputField placeHolder="your name*" />
                <InputField placeHolder="email*" />
                <InputField placeHolder="phone*" />
                <InputField placeHolder="your friend’s name*" />
                <InputField placeHolder="email*" />
                <InputField placeHolder="phone*" />

                <div>
                    <PrimaryButton label='SUBMIT' />
                </div>
            </div>
        </div>
    )
}

export default ContactSection;