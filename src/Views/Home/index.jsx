import { motion } from 'framer-motion';
import s from './Home.module.scss';
import { useState } from 'react';

const onscreen = {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
        }
}

const frontVariants = { offscreen: { x: -1000, opacity: 0 }, onscreen }
const devVariants = { offscreen: { x: 1000, opacity: 0 }, onscreen }

const containerVariants = { offscreen: { opacity: 0 }, onscreen: { opacity: 1, transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
            delayChildren: 0.2,
            staggerChildren: 0.2,
}}}

const Home = () => {
  

  return (
    <motion.div className={s.container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.6 }}
    >
      <motion.div className={s.devContainer} variants={containerVariants}>
        <DragH1 variants={frontVariants} styles={{marginBottom: '-2rem'}}>SOFTWARE</DragH1>
        <DragH1 variants={devVariants}>DEV.</DragH1>
        <DragH1 variants={frontVariants} styles={{fontWeight: 600, fontSize: '5rem', fontFamily: 'Playwrite AU SA'}}>Portfolio</DragH1>
      </motion.div>
    </motion.div>
  )
}

const DragH1 = ({children, variants, styles}) => {
  const [activeDirection, setActiveDirection] = useState(null);

  return (
      <motion.h1
        variants={variants}
        drag
        style={styles}
        dragDirectionLock
        onDirectionLock={(direction) => setActiveDirection(direction)}
        onDragEnd={() => setActiveDirection(null)}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        dragElastic={0.2}
        whileDrag={{ cursor: "grabbing" }}
      >
          {children}
      </motion.h1>
  )
}

export default Home;