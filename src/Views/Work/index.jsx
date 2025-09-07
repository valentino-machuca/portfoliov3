import React, { useState } from 'react';
import { motion } from 'framer-motion';
import s from './Work.module.scss';


const onscreen = {
    y: 0,
    opacity: 1,
    transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
        delay: 0.5,
    }
}

const variants = { offscreen: { y: 1000, opacity: 0 }, onscreen }

const Work = () => {
    const [selectedView, setSelectedView] = useState('personal');

    return (
        <motion.div >
            <motion.div variants={variants} className={s.container}>
                test
            </motion.div>
        </motion.div>
    );
};

export default Work;