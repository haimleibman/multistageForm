import React, { useContext } from 'react';
import styles from './Language.module.css';
import { LanguageContext } from '../App/App';

const Language = (props) => {
    const {toggleLanguage} = useContext(LanguageContext);
    const handleChange = (event) => {
        toggleLanguage(event.target.value)
    }

    return (
        <div className={styles.selectContainer}>
            <select className={styles.select} name="languages" id="languages" onChange={handleChange}>
                <option className={styles.option} value="English">EN</option>
                <option className={styles.option} value="Hebrew">HE</option>
            </select>
        </div>
    )
}

export default Language;