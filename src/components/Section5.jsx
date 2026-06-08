import React from 'react'
import DraggableCarousel from './DraggableCarousel'
import Section7 from './Section6'

const Section5 = () => {
    return (
        <div className='h-[170vh] w-full pt-[82px] '>
            <div className="px-[35px]">
                <div className="border-b border-[##05201F] pb-[37px] font-semibold">
                    <p >More Than Just Introduction</p>
                </div>
                <div className="pt-[70px] pb-[94px] text-5xl relative ">
                    <h2>
                        Support a<span className="italic font-playfair">
                            wide range of garden types and green spaces,</span> <br /> tailored to every need, style, and setting — from intimate <br />
                        private gardens to expansive public landscapes.
                    </h2>
                </div>
            </div>
            <DraggableCarousel />
        </div>
    )
}

export default Section6