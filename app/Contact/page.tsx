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

          <div className='contact_details text-[#9B9B9C] text-[14px]' style={{ display: "flex", flexDirection: "column", gap: "23px" }} >
            <div className='flex gap-[10px]' >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_213_680)">
                  <path d="M3.24375 5.39531L5.73984 2.90156C5.91592 2.72471 6.1252 2.58439 6.35567 2.48867C6.58614 2.39294 6.83325 2.34369 7.08281 2.34375C7.5914 2.34375 8.06953 2.54297 8.42812 2.90156L11.1141 5.5875C11.2909 5.76358 11.4312 5.97286 11.527 6.20333C11.6227 6.4338 11.6719 6.68091 11.6719 6.93047C11.6719 7.43906 11.4727 7.91719 11.1141 8.27578L9.15 10.2398C9.60974 11.2532 10.2489 12.175 11.0367 12.9609C11.8225 13.7506 12.7443 14.3922 13.7578 14.8547L15.7219 12.8906C15.898 12.7138 16.1072 12.5735 16.3377 12.4777C16.5682 12.382 16.8153 12.3328 17.0648 12.3328C17.5734 12.3328 18.0516 12.532 18.4102 12.8906L21.0984 15.5742C21.2755 15.7506 21.4159 15.9603 21.5117 16.1912C21.6074 16.4221 21.6565 16.6696 21.6562 16.9195C21.6562 17.4281 21.457 17.9062 21.0984 18.2648L18.607 20.7562C18.0352 21.3305 17.2453 21.6562 16.4344 21.6562C16.2633 21.6562 16.0992 21.6422 15.9375 21.6141C12.7781 21.0938 9.64453 19.4133 7.11562 16.8867C4.58906 14.3625 2.91094 11.2312 2.38359 8.0625C2.22422 7.09453 2.54531 6.09844 3.24375 5.39531Z" fill="#192031" />
                </g>
                <defs>
                  <clipPath id="clip0_213_680">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
                  </clipPath>
                </defs>
              </svg>
              <div className='flex gap-[10px]' >
                <a href="">+91-7012191993</a>
                <a href="">+91-9633888123</a>
              </div>
            </div>
            <div className='flex gap-[10px]' >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.64272 4.7998H20.5427C22.0427 4.7998 22.7987 5.5078 22.7987 6.9478V17.0518C22.7987 18.4798 22.0427 19.1998 20.5427 19.1998H4.64272C3.14272 19.1998 2.38672 18.4798 2.38672 17.0518V6.9478C2.38672 5.5078 3.14272 4.7998 4.64272 4.7998ZM12.5867 15.1198L20.6747 8.4838C20.9627 8.2438 21.1907 7.6918 20.8307 7.1998C20.4827 6.7078 19.8467 6.6958 19.4267 6.9958L12.5867 11.6278L5.75872 6.9958C5.33872 6.6958 4.70272 6.7078 4.35472 7.1998C3.99472 7.6918 4.22272 8.2438 4.51072 8.4838L12.5867 15.1198Z" fill="#192031" />
              </svg>
              <div className='flex' >
                <a href="">info@lempirebuilders.com</a>
              </div>
            </div>

            <div style={{ width: "70%", display: "flex", flexDirection: "column", gap: "23px" }} >
              <div className='flex' style={{ justifyContent: "space-between" }} >
                <div className='flex gap-[10px]' >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_213_684)">
                      <path d="M11.1359 21.525C9.23281 19.1426 5 13.3684 5 10.125C5 6.18992 8.13396 3 12 3C15.8646 3 19 6.18992 19 10.125C19 13.3684 14.7344 19.1426 12.8641 21.525C12.4156 22.0928 11.5844 22.0928 11.1359 21.525ZM12 12.5C13.287 12.5 14.3333 11.435 14.3333 10.125C14.3333 8.81504 13.287 7.75 12 7.75C10.713 7.75 9.66667 8.81504 9.66667 10.125C9.66667 11.435 10.713 12.5 12 12.5Z" fill="#192031" />
                    </g>
                    <defs>
                      <clipPath id="clip0_213_684">
                        <rect width="14" height="19" fill="white" transform="translate(5 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='text-[#010205] text-[16px]' >Kottayam</p>
                </div>
                <p>Lempire Builders <br /> '#975 B', Vallamattam Building <br /> Perumbaikadu PO <br /> Kottayam</p>
              </div>

              <div className='flex' style={{ justifyContent: "space-between" }} >
                <div className='flex gap-[10px]' >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_213_684)">
                      <path d="M11.1359 21.525C9.23281 19.1426 5 13.3684 5 10.125C5 6.18992 8.13396 3 12 3C15.8646 3 19 6.18992 19 10.125C19 13.3684 14.7344 19.1426 12.8641 21.525C12.4156 22.0928 11.5844 22.0928 11.1359 21.525ZM12 12.5C13.287 12.5 14.3333 11.435 14.3333 10.125C14.3333 8.81504 13.287 7.75 12 7.75C10.713 7.75 9.66667 8.81504 9.66667 10.125C9.66667 11.435 10.713 12.5 12 12.5Z" fill="#192031" />
                    </g>
                    <defs>
                      <clipPath id="clip0_213_684">
                        <rect width="14" height="19" fill="white" transform="translate(5 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='text-[#010205] text-[16px]' >Kochi</p>
                </div>
                <p>Lempire Builders <br /> '#975 B', Vallamattam Building <br /> Perumbaikadu PO <br /> Kottayam</p>
              </div>
            </div>
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