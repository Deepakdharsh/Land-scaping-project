import React from 'react'

const Card = () => {
  return (
    <div className="item bg-white h-full w-full absolute inset-0 overflow-hidden">

                    {/* BOTTOM SHADOW */}
                    <div
                        className="top-shadow absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none"
                        style={{
                            opacity: 0,
                            backdropFilter: "blur(20px)",
                            background:
                                "linear-gradient(to top, rgba(0,53,52,0.9), transparent)",
                        }}
                    />

                    <div className='h-full w-full   px-[35px] pt-[82px] text-[#05201F] pb-[95px] '>
                        <div className="border-b border-[##05201F] pb-[37px] font-semibold">
                            <p >More Than Just Introduction</p>
                        </div>
                        <div className="pt-[70px] pb-[94px] text-5xl ">
                            <h2>
                                From concept to completion, I offer a full range of landscape
                                design services to<span className="italic font-playfair">
                                    transform outdoor spaces into beautiful ,</span> and
                                functional environments.
                            </h2>
                        </div>
                        <div className=" h-[340px] w-full pt-[60px]  pr-[35px]">
                            <img className="h-full w-[40%] object-cover" src="https://cms.bartoszkolenda.com/assets/b3e2c4e6-2427-4750-8bb8-649d95044a3e?width=2048&format=webp&quality=80" alt="" />
                        </div>
                    </div>
                </div>
  )
}

export default Card