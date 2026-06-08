import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {

    const container = useRef();

    useGSAP(() => {
        gsap.fromTo("#vid3", {
            scale: 1.4,

        }, {
            scale: 1,

            scrollTrigger: {
                trigger: container.current,
                start: "top-=300 top",
                end: "bottom bottom",
                scrub: true,   // animation follows scroll
                // markers:true
            },
        })


        gsap.fromTo("#text4", {
            opacity: 1,
            x: 570


        }, {
            opacity: 0.1,
            x: 630,

            scrollTrigger: {
                trigger: container.current,
                start: "top-=180 top",
                end: "bottom center=+100",
                scrub: true,   // animation follows scroll
                // markers:true
            },
        })

        gsap.fromTo("#img1", {
            opacity: 1,
            scale: 1


        }, {
            opacity: 0.5,
            scale: 1.4,

            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom center=+100",
                scrub: true,   // animation follows scroll
                // markers:true
            },
        })


    }, { scope: container });

    return (
        <div ref={container} className='h-screen w-full flex justify-center items-end relative'>
            <div className='w-full h-[280px] absolute  overflow-hidden'><img id='img1' src="https://bartoszkolenda.com/images/logo.svg" className='object-contain h-full w-full' alt="" /></div>
            <div className='h-[80%] w-[50%] overflow-hidden'>
                <video id='vid3' className='h-full w-full object-cover ' muted loop autoPlay src="https://assets.bartoszkolenda.com/bartkolenda/uploads/764b9b23-3b0f-490f-85b7-a310cc1a2855.mp4"></video>
            </div>
            <div id='text4' className='w-[250px] h-[300px] text-5xl -translate-y-68 absolute z-1 font-medium text-white'>
                <p>Interested in <span className='italic font-playfair '>Seeing More</span> Projects?</p>
                <div className='h-[50px] w-[50px]'>
                    <a
                        href="/work"
                        className="w-11 h-11 block mt-5 mx-auto relative rounded-full"
                        aria-label="More projects"
                        style={{ backgroundColor: "transparent" }}
                    >
                        <svg
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.5"
                                y="0.5"
                                rx="50%"
                                width="98%"
                                height="98%"
                                stroke="currentColor"
                                className="stroke-green-300"
                            />

                            <path
                                d="M17 25.5593L24.504 18.1069L18 18.0125V16H28V26.0624H26L25.9358 19.5476L18.4318 27L17 25.5593Z"
                                fill="currentColor"
                                className="fill-green-300"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Section3