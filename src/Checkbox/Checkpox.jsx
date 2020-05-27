import React, { useRef, useContext } from 'react';
import styles from './Checkbox.module.css';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { Store } from '../Store/Store';
import useHebrewSwitcher from '../sharedModels/HebrewSwitcher';
import { LanguageContext } from '../App/App';

const Checkbox = (props) => {
    const [value, setValue] = useRecoilState(Store[props.name]);
    const {currentLanguage} = useContext(LanguageContext);
    const inputRef = useRef(null);
    const text = useHebrewSwitcher(props.text);

    const handleChange = (event) => {
        setValue(event.target.checked);
    }

    return (
        <div>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={props.name}
                ref={inputRef}
                value={value}
                checked={value}
                onChange={handleChange}/>
            <label 
                className={classNames(styles.checkboxLabel, {[styles.rtl]: currentLanguage === 'Hebrew'})}
                htmlFor={props.name} >
                {text}
            </label>
        </div>
    )
}

export default Checkbox;