import { useRef } from 'react'
import { GoHeart } from "react-icons/go";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

export default function Text({timeline}) {
    const Text = useRef()
    useGSAP(()=>{
    timeline && timeline.from(Text.current,{
      y:100,
      duration:2,
      opacity:0,
      scale:0.6,
     
    })
    },{scope:Text , dependencies:[timeline]})
  return (
   
        <h1 className="Text" ref={Text}>
         Happy Birthday MAMA <GoHeart />
        </h1>
        
  )    
}
