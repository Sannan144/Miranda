import React from 'react'

const MidPart = () => {
  return (
    <div className='w-full h-auto flex flex-col md:flex-row gap-10 md:gap-0 px-3'>

        <div className='w-full md:w-[65%] h-full md:border-r'>

            <div className='flex flex-col sm:flex-row gap-5 sm:gap-0'>
                <div className='sm:w-1/2 sm:border-r text-center'>
                    <h1 className='uppercase text-[5vw] sm:text-[3vw] font-bold tracking-tighter'>Upcoming next</h1>
                    <p style={{fontFamily:'Playfair display'}} className='text-[2.5vw] leading-none my-5'>Fresh entry - A selected work from the latest digital releases.</p>
                    <p><span className='font-bold'>TIP!</span> click on the img to explore</p>
                </div>
                <div className='sm:w-1/2 px-5 group cursor-pointer'>
                    <div className='w-full h-fit overflow-hidden border'>
                        <img className='group-hover:scale-[1.1] transition-all duration-600' src='https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/645b5c79f349770ebcc28ec4_thumbnail-small.webp?' />
                    </div>
                    <h2 className='uppercase font-bold text-[5vw] sm:text-[2.6vw]'>UNexpected Time</h2>
                    <p style={{fontFamily:'Playfair display'}} className='text-[2.6vw] sm:text-[1vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, in blanditiis! Numquam quasi maiores natus.</p>    
                </div>
            </div>

            <div className='mt-5 pr-5'>
                <img src='https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg' />
            </div>

        </div>

        <div className='w-full md:w-[35%] h-full pl-5'>
            <div className='text-[8vw] md:text-[3.8vw] text-center leading-none font-semibold'>
                <h1>THINK, CREATE</h1>
                <h1>DELIVER</h1>
            </div>
            <p style={{fontFamily:'Playfair display'}} className='text-[3vw] md:text-[1.8vw] my-10'>
                Experienced front-end developer specializing in responsive, visually appealing websites using HTML, CSS, JavaScript, and modern frameworks to create seamless user experiences across various devices and platforms.
            </p>
            <p style={{fontFamily:'Playfair display'}} className='text-[3vw] md:text-[1.8vw]'>
                Proficient in front-end technologies, including React and Vue, delivering interactive and engaging websites with clean, maintainable code, ensuring optimized performance, and focusing on accessibility and user-friendly designs.
            </p>
            <button class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 mt-10">

                <span class="font-bold text-[#a6998c] text-xl relative z-10 group-hover:text-black duration-500">All work</span>
                <span class="absolute top-0 left-0 w-full bg-[#a6998c] duration-500 group-hover:-translate-x-full h-full"></span>
                <span class="absolute top-0 left-0 w-full bg-[#a6998c] duration-500 group-hover:translate-x-full h-full"></span>
            
                <span class="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                <span class="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>

            </button>
        </div>

    </div>
  )
}

export default MidPart