'use client'

// import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useEffect } from "react";

function Typed() {
  useEffect(()=>{
    gsap.to("#typing", {
      duration: 2,
      text: "This is the new text",
      ease: "none",
    });
  })
  return (
    <div id="typing">
      
    </div>
  )
}

export default Typed