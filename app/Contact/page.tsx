import React from 'react'
// import "./ContactSection.scss"
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { SectionTitle } from '@/components/Texts/Texts';
import InputField from '@/components/InputField/InputField';
import { PrimaryButton } from '@/components/Button/Button';
import TextareaField from '@/components/InputField/TextareaField';

const Contact = () => {
  return (
    <div className='contact_careers_page padding_section' >
      <BreadCrumbs title='CONTACT' />

      <div className='page_contents' >
        <SectionTitle title_1={"Get in Touch"} txt_color="#010205" />
        <div className='contact_details_inputs_wrapper' >
          <div className='contact_details' >
          </div>
          <div className='contact_inputs' >
            <InputField isWhiteBG placeHolder="your name*" />
            <InputField isWhiteBG placeHolder="email*" />
            <InputField isWhiteBG placeHolder="phone*" />
            <TextareaField label='message' isWhiteBG placeHolder='message' />
            {/* <TextareaField label='message' isWhiteBG placeHolder='Max 45 characters' /> */}
            <div>
              <PrimaryButton label='SUBMIT' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact;