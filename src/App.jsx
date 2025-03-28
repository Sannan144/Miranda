import './App.css'
import Landing from './Landing/Landing'
import Nav from './Nav/Nav'
import Animation from './Landing/Animation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Cards from './Cards/Cards'
import About from './About/About'
import TextImg from './TextImg/TextImg'
import MidPart from './MidPart/MidPart'
import Awards from './Awards/Awards'
import Marquee from './Marquee/Marquee'
import AllWork from './AllWork/AllWork'
import Footer from './Footer/Footer'

const App = () => {
  let tl = gsap.timeline()
  useGSAP(()=>{
    tl.set('.animation',{
      y:"100%",
    })
    .set('.main',{
      opacity:0,
    })
    .to('.animation',{
      y:0,
      delay:1,
      duration:1,
    })
    .to('.animation',{
      rotate:'360deg',
      scaleX:1,
      duration:1,
    })
    .to('.anim-text',{
      opacity:0,
      delay:-.5,
    })
    .set('.main',{
      opacity:1,
    })
    .to('.anim-parent',{
      opacity:'0',
      delay:0.2,
    })
    .set('.anim-parent',{
      display:'none'
    })
  })

  return (
    <>
      <Animation/>
    <div className='main w-full min-h-screen bg-[#C3BCB2]'>
      <Nav/>
      <Landing/>
      <About/>
      <TextImg/>
      <MidPart/>
      <Cards/>
      <Awards/>
      <AllWork/>
      <Marquee/>
      <Footer/>
    </div>
    </>
  )
}

export default App