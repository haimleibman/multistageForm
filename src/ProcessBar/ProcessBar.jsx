import React, { Fragment } from 'react';
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
                    <Fragment key={index}>
                        <Step index={index} text={section}/>
                        {index !== (sectionsValues.length - 1) && <div className={styles.path}></div>}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default ProcessBar;