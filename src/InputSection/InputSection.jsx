import React, { useContext } from 'react';
import InputField from '../InputField/InputField';
import styles from './InputSection.module.css';
import { SectionContext } from '../App/App';
import inputs from './inputs';

const InputsSection = (props) => {
    const {currentSection} = useContext(SectionContext);
    
    return (
        <div className={styles.formSection}>
            {inputs[currentSection].map(inputProps => <InputField key={inputProps.name} {...inputProps}/>)}
        </div>
    )
}

export default InputsSection;