import { motion } from 'framer-motion';
import s from './Home.module.scss';

const onscreen = {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        },
}

const frontVariants = { offscreen: { x: -1000, opacity: 0,}, onscreen }
const devVariants = { offscreen: { x: 1000, opacity: 0,}, onscreen }

const Home = () => {
  return (
    <motion.div className={s.container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
    >
      <motion.h1 variants={frontVariants} className={s.front}>
          Creative Design
      </motion.h1>
      <motion.div variants={devVariants} className={s.devContainer}>
        <h1 className={s.soft}>Software</h1>
        <h1 className={s.dev}>dev.</h1>
      </motion.div>
    </motion.div>
  )
}

export default Home;