import React, { useState, useRef } from 'react';
import styles from './InputField.module.css';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import {Store} from '../Store/Store'
import useHebrewSwitcher from '../sharedModels/HebrewSwitcher';

const InputField = (props) => {
    const [value, setValue] = useRecoilState(Store[props.name]);
    const [isValid, setIsValid] = useState(true);
    const inputRef = useRef(null);
    const name = useHebrewSwitcher(props.name);
    const error = useHebrewSwitcher(props.error);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleBlur = () => {
        let inputIsValid = true;

        if (props.required)
            inputIsValid = !!value;

        if (props.pattern && !!value) {
            const regex = RegExp(props.pattern);

            inputIsValid = regex.test(value);
        }

        setIsValid(inputIsValid);
    }

    return (
        <div className={styles.inputField}
             onClick={() => inputRef.current.focus()}>
            <label 
                className={classNames(styles.label, {[styles.uplabel]: !!value})}
                htmlFor={props.name} >
                {name}
            </label>
            <input
                className={classNames(styles.input, {[styles.invalid]: !isValid})}
                type={props.type}
                id={props.name}
                ref={inputRef}
                value={value}
                checked={value}
                onBlur={handleBlur}
                onChange={handleChange}/>
            {!isValid && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default InputField;