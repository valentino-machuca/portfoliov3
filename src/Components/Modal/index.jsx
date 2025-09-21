import { motion } from 'framer-motion';
import s from './Modal.module.scss';

const Modal = ({onClose, item}) => {

  return (
    <motion.div className={s.container}>
      <motion.div className={s.content} layoutId={`modal_${item.id}`}>
        <div onClick={onClose} className={s.close}>Click here to close, work in progress...</div>
      </motion.div>
    </motion.div>
  )
}

export default Modal;