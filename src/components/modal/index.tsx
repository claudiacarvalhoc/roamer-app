import { FC } from 'react';
// import cn from 'classnames';
import styles from './modal.module.css';

export interface ModalProps {
    children: JSX.Element,
}

const Modal: FC<ModalProps> = ({ children }) => (
    <div className={styles.modal}>
        <div className={styles.content}>
            {children}
        </div>
    </div >
);

export default Modal;