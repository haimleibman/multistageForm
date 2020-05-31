import React from 'react';
import styles from './SuccessModal.module.css';
import useLanguageSwitcher from '../sharedModels/LanguageSwitcher';
import { createPortal } from 'react-dom';

const SuccessModal = (props) => {
    const SuccessMessage = useLanguageSwitcher('The information was successfully absorbed!')

    return createPortal(
        <>
            {props.isOpen && <div className={styles.background} onClick={() => props.closeDialog()}/>}
            <dialog className={styles.success} open={props.isOpen}>{SuccessMessage}</dialog>
            </>,
            document.getElementsByTagName('body')[0]
    )
}

export default SuccessModal;