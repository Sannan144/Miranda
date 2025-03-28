import React from 'react'

const Awards = () => {

    let awardsData = [
        {
            title: 'Site of the Day',
            name: 'Awards',
            number: 1
        },
        {
            title: 'Best Developer',
            name: 'Achieve',
            number: 2
        },
        {
            title: 'Top Developers',
            name: 'Winners',
            number: 3
        },
        {
            title: 'Front-End',
            name: 'mentions',
            number: 4
        }
    ];
    

  return (
    <div className='border-t border-b py-3 flex justify-between px-3'>
        {
          awardsData.map((data)=>{
            return(
                <div className='flex items-center gap-3'>
                    <div className='leading-none text-center'>
                        <p style={{fontFamily:'Playfair display'}} className='text-[1.6vw] uppercase'>{data.title}</p>
                        <p className='uppercase text-[3vw]'>{data.name}</p>
                    </div>
                        <h1 className='text-[6vw]'>{data.number}</h1>
                </div>
            )
          })
        }
    </div>
  )
}

export default Awards