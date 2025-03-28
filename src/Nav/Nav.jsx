import { useState } from 'react'
import Menu from './Menu'

const Nav = () => {
const [topVal, setTopVal] = useState('-40')

let open = () => {
  setTopVal('0')
}

  return (
    <>
    <div className='flex justify-between px-4 py-5 border-b border-b-[#111]'>
        <h3 className='opacity-[0.4]'>
            Amsterdan, NL
        </h3>
        <img className='w-32' src='https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg' />
        <div onClick={open} class="w-8 h-8 flex flex-col justify-center gap-1 items-center cursor-pointer group">
            <div class="w-8 h-[2px] bg-black group-hover:translate-x-[8px] transition-all duration-300"></div>
            <div class="w-8 h-[2px] bg-black group-hover:translate-x-[-8px] transition-all duration-300"></div>
        </div>
    </div>
    <Menu topVal={topVal} setTopVal={setTopVal}/>
    </>
  )
}

export default Nav