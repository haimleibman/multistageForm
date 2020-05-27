import React, { useRef } from 'react';
import styles from './Checkbox.module.css';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { Store } from '../Store/Store';

const Checkbox = (props) => {
    const [value, setValue] = useRecoilState(Store[props.name]);
    const inputRef = useRef(null);

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
                className={classNames(styles.checkboxLabel)}
                htmlFor={props.name} >
                {props.text}
            </label>
        </div>
    )
}

export default Checkbox;