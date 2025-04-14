import React from 'react'

const Menu = ({topVal,setTopVal}) => {
   
let close = ()=>{
    setTopVal('-40')
}

  return (
    <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', top:`${topVal}vh` }} className='w-full h-[40vh] bg-[#a6998c] fixed left-0 z-50 flex justify-evenly items-center transition-all duration-400'>

        <h1 className='text-[8vw] uppercase cursor-pointer hover:scale-[1.1] transition-all duration-300'>index</h1>
        <h1 className='text-[8vw] uppercase cursor-pointer hover:scale-[1.1] transition-all duration-300'>About</h1>
        <h1 className='text-[8vw] uppercase cursor-pointer hover:scale-[1.1] transition-all duration-300'>works</h1>

            <button
            onClick={close}
            title="Add New"
            class="group cursor-pointer outline-none hover:rotate-90 duration-300 absolute left-1/2 -translate-x-1/2 bottom-5"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                class="stroke-[#BA3D12] fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-[#BA3D12] group-active:duration-0 duration-300"
            >
                <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke-width="1.5"
                ></path>
                <path d="M8 12H16" stroke-width="1.5"></path>
                <path d="M12 16V8" stroke-width="1.5"></path>
            </svg>
            </button>


    </div>
  )
}

export default Menu
