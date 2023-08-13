import '../css/intro.css'
import { motion } from "framer-motion"

export default function Introduction() {
    return (
        <div>
            <div className="intro">
                <motion.h1 className='name-small'
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: .1,
                    }}>Hi My Name is</motion.h1>
                <motion.h1
                    className="name"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: .55,
                    }}
                >
                    BHUSHAN KHOPE
                </motion.h1>
                <motion.p
                    className="self-description"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                >
                    I am a Computer Science graduate student at Indiana University, Bloomington.
                    I have one year of Software Development experience. I am currently working as a
                    Frontend Developer at <a href="https://cns.iu.edu" rel='noreferrer' target="_blank" className='work-link'>
                        CNS - Indiana University
                    </a>.
                </motion.p>
            </div>
        </div>
    )
}

