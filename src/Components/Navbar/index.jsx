import React from 'react';
import s from './Navbar.module.scss';
import { useScroll, motion, useSpring } from 'framer-motion';

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

  return (
    <div className={s.container}>
        <h2>.valentino</h2>
        <div className={s.title_options}>
            <div className={s.list}>
                <p style={{animationDelay: '.4s'}}>work</p>
                <p style={{animationDelay: '.5s'}}>about</p>
            </div>
            <motion.div style={{ scaleX }} className={s.progress}/>
            <div className={s.contact}>
                <p style={{animationDelay: '.6s'}}>techs</p>
                <p style={{animationDelay: '.7s'}}>contact</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar