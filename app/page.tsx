import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import ContactSection from '@/components/ContactSection/ContactSection'
import OverlaySection, { OverlayCountSection } from '@/components/OverlaySection/OverlaySection'
import Services from '@/components/Services/Services'
import TitleText, { DescTexts, SectionTitle } from '@/components/Texts/Texts'
import React from 'react'


const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="banner_section h-[100dvh] bg-[#242424] flex items-end justify-center" >
          <h1 className='text-[84px] text-[white] ' >Architecture of <span className='text-[#3CBBCE]' >Being</span> </h1>
        </div>

        <div className="who_we_are_section"> <TitleText /> </div>
        <OverlaySection>
          <div className="home_aboutus_section">
            <div className='flex-1 gap-[40px]' >
              <BreadCrumbs title='ABOUT US' />
              <SectionTitle />
            </div>
            <div className='flex-1' >
              <DescTexts color='#878C91' desc={`At L'empire Builders, we believe great spaces should feel right from the moment you enter. We create homes that balance beautiful design with practical living, blending timeless Vaastu principles with contemporary comfort. Our approach is simple: listen deeply, design intentionally, and deliver spaces where life unfolds naturally.`} />
            </div>
          </div>
        </OverlaySection>

        <div className="home_services_section" style={{ backgroundColor: "black", width: "100%", position: "sticky", top: 0 }} >
          <Services />
        </div>

        <div className="home_reveiw_count_section" >
          <OverlayCountSection
            content_1={"HOMES DELIVERED"}
            content_2={"YEARS IN INDUSTRY"}
            content_3={"COUNTRY’S NRI CLIENTS"}
          />
        </div>

      </div>
      <div className="home_contact_section" >
        <ContactSection />
      </div>
    </>
  )
}

export default Home;


// 'use client'

// import OverlaySection from '@/components/OverlaySection/OverlaySection'
// import React from 'react'
// import { motion } from 'framer-motion'

// const Home = () => {
//   return (
//     <div className='home_page'>


//       <div className='who_we_are_section' >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-[40px] font-bold"
//         >
//           <h1>We are Architects of Environment & <br /> Curators of Space</h1>
//         </motion.p>
//       </div>

//       <OverlaySection />
//     </div>
//   )
// }

// export default Home;