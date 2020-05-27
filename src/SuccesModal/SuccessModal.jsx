import React, { useState, useRef } from 'react';
import styles from './SuccessModal.module.css';
import classNames from 'classnames';
import Portal from '../Portal/Portal';

const SuccessModal = (props) => {
    return (
        <Portal>
            <dialog className={styles.success} open={props.isOpen}>Success!</dialog>
        </Portal>
    )
}

export default SuccessModal;