import React from 'react'

const TextImg = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-3 py-10'>
        <h1 className='text-[20vw] md:text-[16vw] h-fit bg-[#1B1B19] leading-none font-bold text-[#C3BCB2]'>WEBSITE</h1>

        <img className='md:w-[20vw]' src='https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png' />
    </div>
  )
}

export default TextImg