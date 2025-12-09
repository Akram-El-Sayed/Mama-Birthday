import React from 'react'
import { BsBalloonHeartFill } from "react-icons/bs";
import { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)
export default function Love({timeline}) {
    const Text = useRef()
        useGSAP(()=>{
        timeline && timeline.from(Text.current,{
          y:100,
          duration:1,
          opacity:0,
          scale:0.6,
         
        })
        },{scope:Text , dependencies:[timeline]})
  return (
    <h1 className='Text2' ref={Text}>I Love You MaMa <BsBalloonHeartFill /></h1>
  )
}
