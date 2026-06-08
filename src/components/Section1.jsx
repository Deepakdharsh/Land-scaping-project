import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const Section1 = () => {

  const container = useRef();
  
  useGSAP(() => {
    gsap.to("#text1", {
      scale: 1.4,     
      opacity: 0,     // fade out
      ease: "none",

      scrollTrigger: {
        trigger: container.current,
        start: "top-=100 top",
        end: "bottom top",
        scrub: true,   // animation follows scroll
      },
    })
    
    gsap.to("#text2",{
        opacity: 0,     
        ease: "none",

        scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,   // animation follows scroll
      },
    })

    

  }, { scope: container });

    return (
        <div  ref={container} className='text-center flex flex-col justify-around h-[450px] overflow-x-hidden '>
            <div>
                <h1 id="text1" className='text-8xl font-semi mb-[10px]'>Everyday <span className='italic font-playfair'>Beauty — Gardens</span> <br />
                    You'll Always Want to See.</h1>
                <p className='text-white hidden'>Designing Functional and Aesthetic
                    Outdoor Green Environments.</p>
            </div>
            <div id="text2"><p className='font-bold'>(FEATURED WORK)</p></div>
        </div>
    )
}

export default Section1