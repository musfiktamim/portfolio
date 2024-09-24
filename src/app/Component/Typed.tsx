'use client'
import { LampContainer } from '@/components/ui/lamp'
import { Typewriter } from 'nextjs-simple-typewriter'
import {motion} from "framer-motion"
function Typed() {

  const handleType = (count: number) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  
  return (
    // <div className='text-center flex flex-col gap-y-2'>
    //     <h1 className="text-2xl font-bold">I Am a <Typewriter
    //         words={['web developer', 'dotnet programmer', 'mobile developer', 'desktop developer']}
    //         loop={5}
    //         cursor
    //         cursorStyle='|'
    //         typeSpeed={70}
    //         deleteSpeed={50}
    //         delaySpeed={1000}
    //         onLoopDone={handleDone}
    //         onType={handleType}
    //       />
    //     </h1>
    //     <p className='text-sm text-green-100'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, mollitia beatae earum quod saepe debitis consequatur consectetur ad sed, veniam itaque fugit velit quibusdam sit atque voluptas quidem iusto animi, modi qui maiores fuga repudiandae quaerat praesentium! Sed corrupti ab ullam cum magnam quasi quaerat! Nihil, dignissimos! Pariatur, animi totam.</p>
    // </div>
    <div className='overflow-hidden h-full w-full'>
    <LampContainer className='w-full h-full'>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className='flex flex-col gap-y-3 justify-center items-center'>
              {/* Build lamps <br /> the right way */}
              <h1 className="font-bold">I Am a <Typewriter
            words={['web developer', 'dotnet programmer', 'mobile developer', 'desktop developer']}
            loop={-1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          /></h1>
              <a href='https://www.facebook.com/tamim.jarry.99' target='_blank' className='border w-fit h-fit text-4xl px-2 py-1 rounded-md'>Haire me!</a>
            </div>
          </motion.h1>
        </LampContainer>
    </div>
  )
}

export default Typed