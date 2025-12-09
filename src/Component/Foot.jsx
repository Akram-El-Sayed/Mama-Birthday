import React from 'react'
import img from "../assets/images/colorful-balloons-isolated-white_392895-138392.avif"
import img2 from "../assets/images/colorful-balloons-isolated-white_392895-451714.avif"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
gsap.registerPlugin(useGSAP)
export default function Foot({timeline}) {
   const container = useRef();
        useGSAP(()=>{
        timeline && timeline.fromTo(".imgleft",{
          y:800,
          opacity:0,
          
        },{ 
          opacity:1,
          y:-800,
          
          duration:2
          ,stagger:{
            each:0.9,
            from: "end",
            // repeat:1,
            yoyo:true,
          },
        })
        },{scope:container , dependencies:[timeline]})
  return (
    <div className="BallonsContainer" ref={container}>
    <img src={img} alt="baloon" className='imgleft'/>
    <img src={img2} alt="baloon" className='imgleft'/>
     <img src={img2} alt="baloon" className='imgleft'/>
    
    </div>
  )
}
