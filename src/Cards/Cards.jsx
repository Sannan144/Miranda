import React, { useState } from 'react'
import Card from './Card'

const Cards = () => {
let [idx , setIdx] = useState()
let [checkSm , setCheckSm] = useState()

  let cardData = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww',
      name: 'Ali Khan',
      review: 'He is a passionate developer, skilled in building web applications and delivering high-quality code with excellent user experience.'
    },
    {
      img: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww',
      name: 'Waseem Ahmed',
      review: 'He is a creative UI/UX designer, delivering user-friendly, functional designs while offering fresh perspectives to each project.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww',
      name: 'Ahmed Ali',
      review: 'He is a skilled full-stack developer, solving challenging problems, and working with a variety of technologies to create solutions.'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Asif Khan',
      review: 'He is a project manager, effectively leading teams, managing timelines, and ensuring smooth project execution with skills.'
    }
  ];
  
  

  return (
    <div className='cards w-full h-fit py-10 flex flex-col md:flex-row gap-3 md:gap-0 px-3'>
        {
          cardData.map((item , index)=>{
            return(
              <Card key={index} item={item} index={index} idx={idx} setIdx={setIdx} checkSm={checkSm} setCheckSm={setCheckSm}/>
            )
          })
        }
    </div>
  )
}

export default Cards