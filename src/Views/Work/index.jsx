import { useState } from 'react';
import { motion } from 'framer-motion';
import s from './Work.module.scss';
import WorkCard from '../../Components/WorkCard';

const onscreen = {
    scale: 1,
    opacity: 1,
    transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
        delay: 0.3
    }
}

const variants = { offscreen: { scale: 0, opacity: 0 }, onscreen }

const Work = () => {
    const [selectedView, setSelectedView] = useState('personal');

    return (
        <motion.div id='work'>
            <motion.div className={s.container}>
                <motion.div className={s.titlecontainer}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.6 }}
                >
                    <motion.h2 variants={variants} className={s.stop}>work</motion.h2>
                    <motion.h2 variants={variants} >work</motion.h2>
                    <motion.h2 variants={variants} className={s.sbottom}>work</motion.h2>
                </motion.div>
                <motion.div className={s.cards}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.6 }}
                >
                    <div className={s.maincard}>
                        <WorkCard title="Personal Projects" description="A collection of my personal projects." w="100%" h="800px" delay={.4}/>
                    </div>
                    <div className={s.secondcard}>
                        <WorkCard title="Personal Projects" description="A collection of my personal projects." w="100%" h="300px" delay={.6}/>
                    </div>
                    <div className={s.secondcard}>
                        <WorkCard title="Personal Projects" description="A collection of my personal projects." w="100%" h="300px" delay={.8}/>
                    </div>
                    <div className={s.secondcard}>
                        <WorkCard title="Personal Projects" description="A collection of my personal projects." w="100%" h="300px" delay={1}/>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Work;