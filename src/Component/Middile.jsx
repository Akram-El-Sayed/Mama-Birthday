import React from 'react'
import img from "../assets/images/birthday-cake-isolated-white-background_431718-297.avif"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import "./ALL.css"
gsap.registerPlugin(useGSAP)
export default function Middile({timeline}) {
  const container = useRef();
        useGSAP(()=>{
       if (!timeline) return;
        timeline && timeline.from(".img",{
          y:100,
          duration:2,
          opacity:0,
          scale:0.8,
          rotate:90,
        })
        },{scope:container , dependencies:[timeline]})
  return (
    <div  className="container" ref={container}>
        <img src={img} alt="cake" className='img' />
        </div>
  )
}
