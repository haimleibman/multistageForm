import React, { useContext } from 'react';
import styles from './Step.module.css';
import classNames from 'classnames';
import { SectionContext } from '../App/App';
import useHebrewSwitcher from '../sharedModels/HebrewSwitcher';

const Step = (props) => {
    const {currentSection} = useContext(SectionContext);
    const text = useHebrewSwitcher(props.text);

    return (
        <div className={classNames(styles.stepContainer, {[styles.current]: props.text === currentSection})}>
            <div className={styles.index}>{props.index + 1}</div>
            <p className={styles.name}>{text}</p>
        </div>
    )
}

export default Step;