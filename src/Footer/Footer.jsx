import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-3 py-5 sm:items-center flex-col sm:flex-row gap-5'>
        <div className='flex items-center gap-2'>
            <h2 className='font-bold text-xl'>MIRANDA©</h2>
            <img className='w-10' src='https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png' />
        </div>

        <div className='flex gap-2'>
            <p style={{fontFamily:'Playfair display'}} className='uppercase'>Twitter</p>
            <p style={{fontFamily:'Playfair display'}} className='uppercase'>GITHUb</p>
            <p style={{fontFamily:'Playfair display'}} className='uppercase'>linkedin</p>
        </div>
    </div>
  )
}

export default Footer