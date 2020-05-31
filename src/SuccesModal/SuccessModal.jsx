import React from 'react';
import styles from './SuccessModal.module.css';
import useLanguageSwitcher from '../sharedModels/LanguageSwitcher';

const SuccessModal = (props) => {
    const SuccessMessage = useLanguageSwitcher('The information was successfully absorbed!')

    return (
        <>
            {props.isOpen && <div className={styles.background} onClick={() => props.closeDialog()}/>}
            <dialog className={styles.success} open={props.isOpen}>{SuccessMessage}</dialog>
        </>
    )
}

export default SuccessModal;