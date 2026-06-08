// import React, { useEffect, useRef } from "react";
// import Flickity from "flickity";
// import "flickity/css/flickity.css";

// const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// export default function ImageCarousel() {
//   const carouselRef = useRef(null);
//   const flickityRef = useRef(null);

//   useEffect(() => {
//     flickityRef.current = new Flickity(carouselRef.current, {
//       accessibility: false,
//       autoPlay: false,
//       pauseAutoPlayOnHover: false,
//       cellAlign: "center",
//       contain: false,
//       draggable: true,
//       friction: 0.2,
//       initialIndex: 0,
//       lazyLoad: false,
//       percentPosition: true,
//       prevNextButtons: false,
//       pageDots: false,
//       resize: true,
//       rightToLeft: false,
//       setGallerySize: true,
//       watchCSS: false,
//       wrapAround: true,
//     });

//     const flkty = flickityRef.current;

//     const resizeCells = () => {
//       const current = flkty.selectedIndex;
//       const length = flkty.cells.length;

//       const cells =
//         carouselRef.current.querySelectorAll(".carousel-cell");

//       cells.forEach((cell) => {
//         cell.classList.remove(
//           "next-left",
//           "next-right",
//           "next-left-2",
//           "next-right-2"
//         );
//       });

//       if (cells[current - 1]) {
//         cells[current - 1].classList.add("next-left");
//       }

//       if (cells[current - 2]) {
//         cells[current - 2].classList.add("next-left-2");
//       }

//       let endCell = current + 1 === length ? 0 : current + 1;

//       if (cells[endCell]) {
//         cells[endCell].classList.add("next-right");
//       }

//       if (cells[endCell + 1]) {
//         cells[endCell + 1].classList.add("next-right-2");
//       } else if (cells[0]) {
//         cells[0].classList.add("next-right-2");
//       }
//     };

//     resizeCells();

//     flkty.on("scroll", resizeCells);

//     return () => {
//       flkty.destroy();
//     };
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-100 py-16">
//       {/* Carousel */}
//       <div ref={carouselRef} className="w-full">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="
//               carousel-cell
//               mx-4
//               mt-10
//               mb-12
//               flex
//               h-14
//               w-[50%]
//               items-center
//               justify-center
//               border
//               border-black
//               bg-white
//               text-lg
//               transition-transform
//               duration-500
//               md:w-[30%]
//               xl:w-[20%]
//             "
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       {/* Left Gradient */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           top-0
//           h-full
//           w-[8%]
//           bg-gradient-to-r
//           from-gray-100
//           to-transparent
//           z-10
//         "
//       />

//       {/* Right Gradient */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-0
//           top-0
//           h-full
//           w-[8%]
//           bg-gradient-to-l
//           from-gray-100
//           to-transparent
//           z-10
//         "
//       />

//       {/* Extra styles */}
//       <style jsx>{`
//         .carousel-cell.is-selected {
//           border: 1.5px solid #00adee;
//           color: #00adee;
//           z-index: 10;
//           transform: scale(1);
//         }

//         .carousel-cell.next-left,
//         .carousel-cell.next-right {
//           transform: scale(1);
//           z-index: 5;
//         }

//         .flickity-viewport {
//           overflow: hidden;
//           width: 100%;
//           margin-bottom: 100px;
//         }

//         .flickity-slider {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const cards = [
  {
    id: 1,
    number: "01",
    title: "Private Residential Gardens",
    description:
      "Green spaces designed for individual homes, offering privacy, beauty, and a personal connection with nature.",
    image:
      "https://cms.bartoszkolenda.com/assets/82e8a311-4ad5-4003-b543-5853b34a271d?width=2048&format=webp&quality=80",
  },
  {
    id: 2,
    number: "02",
    title: "Commercial Landscapes",
    description:
      "Professionally designed outdoor environments for offices, retail spaces, and hospitality venues.",
    image:
      "https://cms.bartoszkolenda.com/assets/27b5dc96-04e1-412d-b0d8-988834994c51?width=2048&format=webp&quality=80",
  },
  {
    id: 3,
    number: "03",
    title: "Public Park Design",
    description:
      "Thoughtfully planned community spaces that promote well-being, recreation, and ecological harmony.",
    image:
      "https://cms.bartoszkolenda.com/assets/0d127154-d2e7-44ec-9f5d-609cff8ff7f4?width=2048&format=webp&quality=80",
  },
  {
    id: 4,
    number: "04",
    title: "Rooftop & Urban Gardens",
    description:
      "Innovative green solutions for urban environments, transforming rooftops and terraces into lush retreats.",
    image:
      "https://cms.bartoszkolenda.com/assets/b4e5884f-7e6a-4b4a-99e9-905af3159d5f?width=2048&format=webp&quality=80",
  },
];

export default function DraggableCarousel() {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringArrow, setIsHoveringArrow] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handlePointerMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    }
  };

  useEffect(() => {
    const calcWidth = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    // Small delay to ensure cards with vw units have rendered at correct size
    const timer = setTimeout(calcWidth, 100);
    window.addEventListener("resize", calcWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calcWidth);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden font-Figtree relative"
      onPointerMove={handlePointerMove}
    >
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 z-50 flex h-20 w-20 items-center justify-center rounded-full text-sm font-medium uppercase tracking-widest text-[#003534]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgba(196, 209, 182, 0.85)", // #C4D1B6 with reduced opacity
          opacity: isHovering && !isHoveringArrow ? 1 : 0,
          scale: isHovering && !isHoveringArrow ? 1 : 0,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovering && !isHoveringArrow ? 1 : 0,
          scale: isHovering && !isHoveringArrow ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        Drag
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          className="flex gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="select-none shrink-0 overflow-hidden "
              style={{
                width: "70vw",
                maxWidth: "1100px",
                minWidth: "320px",
                background: "transparent",
              }}
            >
              {/* Card inner layout: image left + text right */}
              <div className="flex flex-col sm:flex-row h-full min-h-[320px] lg:min-h-[380px]">
                {/* Image side */}
                <div className="w-full sm:w-[55%] h-[200px] sm:h-auto overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                {/* Content side */}
                <div className="w-full sm:w-[45%] flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  {/* Top: number + nav arrows */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm tracking-wider"
                      style={{ color: "rgba(196, 209, 182, 0.5)" }}
                    >
                      ({card.number})
                    </span>

                    <div 
                      className="flex items-center gap-2"
                      onMouseEnter={() => setIsHoveringArrow(true)}
                      onMouseLeave={() => setIsHoveringArrow(false)}
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                        style={{
                          border: "1.5px solid rgba(196, 209, 182, 0.3)",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C4D1B6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </div>
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                        style={{
                          border: "1.5px solid rgba(196, 209, 182, 0.3)",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C4D1B6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Middle: title + description */}
                  <div className="mt-6 sm:mt-0">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-[2.25rem] font-Figtree"
                      style={{ color: "#C4D1B6" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mt-4 text-sm sm:text-base text-white font-Figtree "
                      // style={{ color: "white" }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom spacer */}
                  <div className="mt-6 sm:mt-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}