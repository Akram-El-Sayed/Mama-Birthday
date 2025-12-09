import img from "../assets/images/celebration-firework-white-background-v-6-job-id-70e7e2f11f474c99be1079d9ab103752_1134901-6311.avif"
import img2 from "../assets/images/celebration-firework-white-background-v-6-job-id-83c4add2d69f40f6932dc69dda5eb95e_1134901-6416.avif"
import img3 from "../assets/images/celebration-firework-white-background-v-6-job-id-b54c67ae02e8440498904905f12ef635_1134901-6400.jpg"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
gsap.registerPlugin(useGSAP)
export default function FireWorks({timeline}) {
  const container = useRef();
      useGSAP(()=>{
      timeline && timeline.from(".fireimg",{
        y:100,
        duration:2,
        opacity:0,
        stagger:{
          each:1,
          from: "center",
          repeat:1,
          yoyo:true,
        },
      })
      },{scope:container , dependencies:[timeline]})
  return (
    <div className='fireContainer' ref={container}>
    <img src={img} alt="baloon" className='fireimg'/>
    <img src={img2} alt="baloon" className='fireimg'/>
    <img src={img3} alt="baloon" className='fireimg'/>
    </div>
  )
}
