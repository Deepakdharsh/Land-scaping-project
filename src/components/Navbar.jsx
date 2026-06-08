const Navbar = () => {
  return (
    <>
      <div className='w-full h-[8px] bg-[#C4D1B6]'></div>
      <nav className="px-8 w-full h-[100px] border-b border-[#C4D1B6] relative flex items-center">

        <div>
          <span className="text-white">
            Landscape and Garden Designer
          </span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 font-medium">
          Bartkolenda
        </div>

        <div className="ml-auto">
           <a className=" flex items-center gap-2">
              Instagram
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
            </a>
        </div>

      </nav>
    </>
  )
}

export default Navbar