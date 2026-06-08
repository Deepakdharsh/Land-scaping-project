import { ReactLenis, useLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'


const App = () => {

  const lenis = useLenis((lenis) => {
    console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />
      <div className='min-h-screen bg-[linear-gradient(180deg,#003534_0%,#05201f_46%,#003534_100%)] w-full box-border font-Figtree text-[#C4D1B6]'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
  )
}

export default App