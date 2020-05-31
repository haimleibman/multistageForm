import React, { useContext } from 'react';
import styles from './Step.module.css';
import classNames from 'classnames';
import { SectionContext } from '../App/App';
import useLanguageSwitcher from '../sharedModels/LanguageSwitcher';

const Step = (props) => {
    const {currentSection} = useContext(SectionContext);
    const text = useLanguageSwitcher(props.text);

    return (
        <div className={styles.stepWrap}>
            <p className={classNames(styles.step, {[styles.current]: props.text === currentSection})}>{text}</p>
        </div>
    )
}

export default Step;