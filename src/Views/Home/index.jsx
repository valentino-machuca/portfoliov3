import { motion } from 'framer-motion';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.container}>
      <motion.h1 initial={{ opacity: 0, X: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={s.front}>
          Creative Design
      </motion.h1>
      <motion.div initial={{ opacity: 0, X: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={s.devContainer}>
        <h1 className={s.soft}>Software</h1>
        <h1 className={s.dev}>dev.</h1>
      </motion.div>
    </div>
  )
}

export default Home;