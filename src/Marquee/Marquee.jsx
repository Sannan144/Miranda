import { motion } from "motion/react"


const Marquee = () => {

  return (
    <div className='border-t border-b py-5 w-full overflow-hidden'>
      <motion.div
       className='flex gap-[18px]'
       initial={{x:0}}
       animate={{x:'-100%'}}
       transition={{ease:'linear',repeat:Infinity,duration:15}}
       >
        <h1 className='upperacase text-[5.6vw] flex-shrink-0'><span className='bg-black text-[#C3BCB2]'>EMAIL ME</span> Lets create something together</h1>
        <h1 className='upperacase text-[5.6vw] flex-shrink-0'><span className='bg-black text-[#C3BCB2]'>EMAIL ME</span> Lets create something together</h1>
      </motion.div>
    </div>
  )
}

export default Marquee