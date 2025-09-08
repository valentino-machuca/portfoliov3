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
                <a href='#work' style={{animationDelay: '.4s'}}>work</a>
                <a style={{animationDelay: '.5s'}}>about</a>
            </div>
            <motion.div style={{ scaleX }} className={s.progress}/>
            <div className={s.contact}>
                <a style={{animationDelay: '.6s'}}>techs</a>
                <a style={{animationDelay: '.7s'}}>contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar