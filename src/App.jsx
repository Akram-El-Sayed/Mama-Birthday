import { useRef, useState } from "react";
import FireWorks from "./Component/FireWorks";

import Middile from "./Component/Middile";

import "./fonts.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import Text from "./Component/Text";
import Foot from "./Component/Foot";
import Love from "./Component/Love";
gsap.registerPlugin(useGSAP)
function App() {
 const container = useRef()
 const [tl , stTL] = useState()
 useGSAP(()=>{

 const timeline = gsap.timeline()
  stTL(timeline)
 },{scope: container})
  return (
    <>
      <div className="containerALL" ref={container} >
     <Text timeline={tl}/>
    <FireWorks timeline={tl}/>
    <Middile timeline={tl}/>
    <Foot timeline={tl}/>
    <Love timeline={tl}/>
      </div>
    </>
  )
}

export default App
