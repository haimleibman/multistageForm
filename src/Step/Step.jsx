import React, { useContext } from 'react';
import styles from './Step.module.css';
import classNames from 'classnames';
import { SectionContext } from '../App/App';
import useLanguageSwitcher from '../sharedModels/LanguageSwitcher';

const Step = (props) => {
    const {currentSection} = useContext(SectionContext);
    const text = useLanguageSwitcher(props.text);

    return (
        <div className={classNames(styles.stepContainer, {[styles.current]: props.text === currentSection})}>
            <div className={styles.index}>{props.index + 1}</div>
            <p className={styles.name}>{text}</p>
        </div>
    )
}

export default Step;