import { motion } from "motion/react"

const Slide = ({item}) => {
  return (
    <motion.div whileTap={{cursor:'grabbing'}} className="swiper-slide group cursor-grab py-6 sm:px-3">
        <div className='w-full h-40 overflow-hidden border'>
            <img className='group-hover:scale-[1.1] transition-all duration-600 w-full h-full object-cover' src={item.img} />
        </div>
        <h2 className='font-bold mb-1 mt-3'>{item.name} <span className='text-white bg-[#BA3D12] opacity-[0.6]'>{item.span}</span></h2>
        <p className='leading-none opacity-[0.7]'>{item.desc}</p>
    </motion.div>
  )
}

export default Slide