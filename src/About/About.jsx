import React from 'react'

const About = () => {
  return (
    <div className='w-full flex flex-col md:flex-row py-10 px-3 md:px-5 gap-10 md:gap-0'>

        <div className='w-full md:w-[35%] flex flex-col gap-10 md:border-r items-center md:pr-5'>
            <div className='font-semibold uppercase leading-none text-center md:text-left'>
                <h1 className='tracking-tighter text-[10vw] md:text-[4vw]'>Interactive</h1>
                <h1 className='md:text-[5vw] text-[15vw]'>artist</h1>
            </div>
            <img className='w-[80vw] md:w-[33vw] object-cover' src='https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg' />
            <p style={{fontFamily:'Playfair display'}} className='text-[5vw] md:text-[2vw] leading-none'>"I am a passionate and driven individual, committed to learning, growing, and delivering innovative solutions in every project."</p>
        </div>

        <div className='w-full md:w-[60%] md:pl-10'>
            <img src='https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-1600.jpeg' />
            <h1 style={{fontFamily:'Playfair display',whiteSpace:'nowrap'}} className='text-[10vw] md:text-[6vw] font-bold leading-none mt-3 opacity-[0.8]'>Digital art director</h1>
            <h1 style={{fontFamily:'Playfair display',whiteSpace:'nowrap'}} className='text-[10vw] md:text-[6vw] font-bold leading-none opacity-[0.8]'>interactive designer</h1>
            <h1 style={{fontFamily:'Playfair display',whiteSpace:'nowrap'}} className='text-[10vw] md:text-[6vw] font-bold leading-none opacity-[0.8]'>Creative Devloper</h1>
            <h1 style={{fontFamily:'Playfair display',whiteSpace:'nowrap'}} className='text-[10vw] md:text-[6vw] font-bold leading-none opacity-[0.8]'>Problem Solver</h1>
        </div>

    </div>
  )
}

export default About