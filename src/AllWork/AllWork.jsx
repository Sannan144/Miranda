import React from 'react'

const AllWork = () => {

let AllWorkData = [
    {
        img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/61cdc506856e75d4b33cd9bd_thumbnail-small.jpeg?',
        name: 'ARTISAN',
        span: 'EXCLUSIVE',
        desc: 'The Artisan Collection – A masterpiece of craftsmanship and style.',
    },
    {

    },
    {
        img: 'https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/621f2de86891ea03211fe874_thumbnail-small.jpeg?',
        name: 'ROYAL',
        span: 'PREMIUM',
        desc: 'Premium quality, for those who demand the best in every detail.',
    }
]

  return (
    <div className='flex flex-col md:flex-row items-center py-10 px-3'>
        {
          AllWorkData.map((item,index)=>{
            return(
            (index != 1 ? <div style={{borderRight:index == 0 && '1px solid black',borderLeft:index == 2 && '1px solid black'}} className="allwork group cursor-pointer py-6 sm:px-3 w-full md:w-[33%]">
                <div className='w-full h-40 overflow-hidden border'>
                    <img className='group-hover:scale-[1.1] transition-all duration-600 w-full h-full object-cover' src={item.img} />
                </div>
                <h2 className='font-bold mb-1 mt-3'>{item.name} <span className='text-white bg-[#BA3D12] opacity-[0.6]'>{item.span}</span></h2>
                <p className='leading-none opacity-[0.7]'>{item.desc}</p>
            </div> : 
            
            <div className='flex flex-col text-center w-full md:w-[33%]'>
                <h1 className='font-bold text-[8vw] md:text-[4vw]'>ALL WORK!</h1>
                <p style={{fontFamily:'Playfair display'}} className='text-[4vw] md:text-[2vw] mb-3 mt-5'>Handpicked highlights - spanning the last few years</p>
                <p style={{fontFamily:'Playfair display'}}><span className='font-bold'>TIP!</span> click on the sides to explore</p>
            </div>

            )
            )
          })
        }
    </div>
  )
}

export default AllWork