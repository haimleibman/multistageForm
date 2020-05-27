import React, { useContext } from 'react';
import InputField from '../InputField/InputField';
import styles from './InputSection.module.css';
import { SectionContext } from '../App/App';
import inputs from './inputs';
import Checkbox from '../Ceckbox/Checkpox';

const InputsSection = () => {
    const {currentSection} = useContext(SectionContext);
    
    return (
        <div className={styles.formSection}>
            {inputs[currentSection]
                .map(inputProps => inputProps.type === 'checkbox' ?
                    <Checkbox  key={inputProps.name} {...inputProps}/>
                    : <InputField key={inputProps.name} {...inputProps}/>)}
        </div>
    )
}

export default InputsSection;