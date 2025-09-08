
import { motion } from 'framer-motion';
import s from './WorkCard.module.scss';

const onscreen = {
    borderRadius: 15,
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
    }
}

const WorkCard = ({ title, description, w, h, delay }) => {
    const variants = { offscreen: { scale: 0, opacity: 0, y: 100, borderRadius: 0 }, onscreen: {...onscreen, transition: {...onscreen.transition, delay}} }

    return (
        <motion.div variants={variants} className={s.container} style={{ width: w, height: h }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </motion.div>
    );
};

export default WorkCard;