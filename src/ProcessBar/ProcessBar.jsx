import React from 'react';
import styles from './ProcessBar.module.css';

import { sections } from '../sharedModels/sections.model';
import Step from '../Step/Step';

const ProcessBar = () => {
    const sectionsValues = Object.values(sections);

    return (
        <div className={styles.process}>
            {sectionsValues.map((section, index) => 
            {
                return (
                    <>
                    <Step key={index} index={index} text={section}/>
                    {index !== (sectionsValues.length - 1) && <div className={styles.path}></div>}
                    </>
                )
            })}
        </div>
    )
}

export default ProcessBar;