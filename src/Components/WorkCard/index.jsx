
import { motion } from 'framer-motion';
import s from './WorkCard.module.scss';

const onscreen = {
    scale: 1,
    y: 0,
    opacity: 1,
    borderRadius: 15,
    transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
    }
}

const WorkCard = ({ id, title, description, w, h, delay, onClickView, image }) => {
    const variants = { offscreen: { scale: 0, opacity: 0, y: 100, borderRadius: 0}, onscreen: {...onscreen, transition: {...onscreen.transition, delay}} }

    return (
        <motion.div layoutId={`modal_${id}`} onClick={onClickView} variants={variants} className={s.container} style={{ width: w, height: h, backgroundImage: `url(${image})` }}>
            <div className={s.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default WorkCard;