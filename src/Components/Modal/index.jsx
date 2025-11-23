import { motion } from 'framer-motion';
import s from './Modal.module.scss';


const work_items = [
    [{id: 1, title: "The path into the abyss", description: "Project designed and developed for the independent game The Path into the Abyss."},
    {id: 2, title: "Login Test", description: "Personal design and development project for testing password security controls."},
    {id: 3, title: "Project C", description: "Description for Project C."}],
    [{id: 1, title: "Project A", description: "Description for Project A."},
    {id: 2, title: "Project B", description: "Description for Project B."},
    {id: 3, title: "Project C", description: "Description for Project C."}],
    [{id: 1, title: "Project A", description: "Description for Project A."},
    {id: 2, title: "Project B", description: "Description for Project B."},
    {id: 3, title: "Project C", description: "Description for Project C."}],
];

const Modal = ({onClose, item}) => {

  return (
    <motion.div className={s.container}>
      <motion.div className={s.content} layoutId={`modal_${item.id}`}>
        <div onClick={onClose} className={s.close}>Close</div>
        <div className={s.projects}>
            {work_items[item.id - 1].map( project => {
                return (
                  <div key={project.id} className={s.projectCard}>
                      <img src={item.backgroundUrl} alt="background" />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                  </div>
                )
              })
            }
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal;