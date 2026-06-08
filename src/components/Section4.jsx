
const Section4 = () => {
  return (
    <div className='h-[200vh] w-full bg-white -translate-y-10 px-[35px] pt-[82px] text-[#05201F] '>
      <div className="border-b border-[##05201F] pb-[37px] font-semibold">
        <p >More Than Just Introduction</p>
      </div>
      <div className="pt-[70px] pb-[94px] text-5xl ">
        <h2>Landscape & green space design is not just about placing<br /> plants — it's about <span className="italic font-playfair">
          shaping emotion, memory, and rhythm </span>  into<br /> a living form and connection with the nature.
        </h2>
      </div>
      <div className=" h-[850px] flex gap-[10%]">
        <div className="h-full w-[40%]">
          <img className="h-full w-full object-cover" src="https://cms.bartoszkolenda.com/assets/3a8693f5-e394-4314-9092-d206f78decc2?width=2048&format=webp&quality=80" alt="" />
        </div>
        <div className=" h-full w-[40%] flex items-start">
          <div className="flex flex-col justify-between h-[38%] w-full text-xl">
            <p>My Name is Bartosz Kolenda and I’m landscape designer. For me, every garden, from the moment it's planted until it reaches its final form, needs a few seasons for the plants to take root, grow, and begin to amaze. As someone wise once said about gardens: “A garden is a process.”</p>

            <p>Since 2017, designing green spaces has become both my passion and my profession — something I dedicate my free time to in order to keep growing and improving.</p>


            <button className="bg-[#E2FFC2] text-sm font-semibold py-[10px] px-[20px] self-start rounded-3xl flex items-center gap-2">
              MORE ABOUT ME
              <svg
                className="h-[12px] w-[12px]"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.0593L7.504 4.60687L1.00002 4.51248V2.5H11V12.5624H9L8.93581 6.04761L1.4318 13.5L0 12.0593Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4