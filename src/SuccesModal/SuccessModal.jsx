import React from 'react';
import styles from './SuccessModal.module.css';

const SuccessModal = (props) => {
    return (
        <>
        {props.isOpen && <div className={styles.background} onClick={() => props.closeDialog()}/>}
            <dialog className={styles.success} open={props.isOpen}>Success!</dialog>
            </>
    )
}

export default SuccessModal;