import React from 'react';
import styles from './Button.module.css';

const NavigationButton = (props) => 
        <button className={styles.button} onClick={() => props.onClick()} disabled={props.disabled}>{props.text}</button>

export default NavigationButton;