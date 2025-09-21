import { useState } from 'react';
import { motion } from 'framer-motion';
import s from './Work.module.scss';
import WorkCard from '../../Components/WorkCard';
import Modal from '../../Components/Modal';

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
const workList = [
    { id: 1, title: "Personal Projects", description: "This is a description for personal projects.", backgroundUrl: "https://i.makeagif.com/media/1-10-2024/1sE2ha.gif"},
    { id: 2, title: "Design Projects", description: "This is a description for design projects.", backgroundUrl: "https://media2.giphy.com/channel_assets/virartz/5cef10ZOq5yc.gif" },
    { id: 3, title: "Professional Projects", description: "This is a description for professional projects.", backgroundUrl: "https://64.media.tumblr.com/047f854c0b3e21e92a881869a1adc94c/cf8f515e7e27c2f9-3a/s1280x1920/6799d5afbc8714cdd4d54d6876fd32b121795863.gif" },
]


const Work = () => {
    const [selectedView, setSelectedView] = useState(null);

    const onClickView = (view) => {
        if(selectedView === view) return setSelectedView(null);
        setSelectedView(view);
    }

    const onCloseView = () => {
        setSelectedView(null);
    }

    return (
        <motion.div id='work' layout>
            <motion.div className={s.container}>
                <motion.div className={s.titlecontainer}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.6 }}
                >
                    <motion.h2 variants={variants} className={s.stop}>work</motion.h2>
                    <motion.h2 variants={variants} >work</motion.h2>
                    <motion.h2 variants={variants} className={s.sbottom}>work</motion.h2>
                </motion.div> : <></>

                <motion.div className={s.cards}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.6 }}
                >
                    {
                        workList.map( (work, index) => 
                            <WorkCard 
                                onClickView={() => onClickView(work)} 
                                id={work.id} 
                                key={index} 
                                title={work.title} 
                                description={work.description} w="65%" h="25vh" 
                                delay={index * 0.2}
                                image={work.backgroundUrl}
                            />
                        )
                    }
                </motion.div>
                {selectedView ? <Modal item={selectedView} onClose={onCloseView}/> : <></>}
            </motion.div>
        </motion.div>
    );
};

export default Work;