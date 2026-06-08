import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.to("#vid1", {
            scale: 1.2,
            y: -60,


            scrollTrigger: {
                trigger: container.current,
                start: "top-=400 top",
                end: "bottom-=500 top",
                scrub: true,
                // markers:true
            },
        })

        gsap.to("#vid2", {
            scale: 1.1,
            y: -60,


            scrollTrigger: {
                trigger: container.current,
                start: "top-=400 top",
                end: "bottom-=500 top",
                scrub: true,
                // markers:true
            },
        })

        gsap.to("#text3", {
            opacity: 0,


            scrollTrigger: {
                trigger: container.current,
                start: "top-=400 top",
                end: "bottom-=500 top",
                scrub: true,
                // markers:true
            },
        })
    }, { scope: container })

    return (
        <div ref={container} className='h-screen w-full  flex justify-between '>
            <div className='h-full w-[38%] -translate-y-20'>
                {/* <video autoplay="" muted="" loop="" playsinline="" src='https://assets.bartoszkolenda.com/bartkolenda/uploads/4409e2c1-ef7b-493e-aeab-baaf8077d972.mp4' class="w-full h-full object-cover translate-y-[-10%] scale-[1.4]" preload="metadata" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, -1.2418px, 0px) scale(1.0177, 1.0177);"></video> */}
                <video id="vid1" className='h-full w-full object-cover ' muted loop autoPlay src="https://assets.bartoszkolenda.com/bartkolenda/uploads/4409e2c1-ef7b-493e-aeab-baaf8077d972.mp4"></video>
            </div>
            <div className='h-full w-[38%] flex flex-col justify-between overflow-hidden'>
                <p id="text3" className='text-white font-medium text-xl absolute -translate-y-20'>Designing Functional and Aesthetic <br />
                    Outdoor Green Environments.</p>
                {/* <video autoplay="" muted="" loop="" playsinline="" class="w-full h-full object-cover translate-y-[-10%] scale-[1.4]" preload="metadata" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, -6.9058px, 0px) scale(1.0544, 1.0544);"><source src="https://assets.bartoszkolenda.com/bartkolenda/uploads/c6f382eb-554f-48e1-8120-f88904ad39a2.mp4" type="video/mp4"></video> */}
                <video id="vid2" className='h-full w-full object-cover translate-y-20 ' muted loop autoPlay src="https://assets.bartoszkolenda.com/bartkolenda/uploads/c6f382eb-554f-48e1-8120-f88904ad39a2.mp4"></video>
            </div>
        </div>
    )
}

export default Section2