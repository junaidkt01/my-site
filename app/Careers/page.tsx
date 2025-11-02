import React from 'react'
// import "./ContactSection.scss"
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { SectionTitle } from '@/components/Texts/Texts';
import InputField from '@/components/InputField/InputField';
import { PrimaryButton } from '@/components/Button/Button';
import TextareaField from '@/components/InputField/TextareaField';

const Careers = () => {
  return (
    <div className='contact_careers_page padding_section' >
      <BreadCrumbs title='CAREERS' />

      <div className='page_contents' >
        <div className='flex gap-[25px]' >
          <div className='text-nowrap' >
            <SectionTitle title_1={"Build Legacies With Us"} txt_color="#010205" />
          </div>
          {/* <DescTexts color='#878C91' desc="Join a team where architecture meets artistry, and innovation blends with tradition. At L' empire Builders, we're not just constructing buildings—we're crafting environments that inspire." /> */}
        </div>
        <div className='contact_details_inputs_wrapper' >
          <div className='contact_details'></div>
          <div className='contact_inputs' >
            <InputField isWhiteBG placeHolder="your name*" />
            <InputField isWhiteBG placeHolder="email*" />
            <InputField isWhiteBG placeHolder="phone*" />
            <TextareaField label='message' isWhiteBG placeHolder='cover letter' />
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

export default Careers;