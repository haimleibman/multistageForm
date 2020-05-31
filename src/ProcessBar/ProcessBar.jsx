import React, { Fragment, useContext } from 'react';
import styles from './ProcessBar.module.css';
import classNames from 'classnames';

import { sections } from '../sharedModels/sections.model';
import { SectionContext } from '../App/App';

const ProcessBar = () => {
    const {currentSection} = useContext(SectionContext);
    const sectionsValues = Object.values(sections);

    return (
        <div className={styles.process}>
            {sectionsValues.map((section, index) => 
            {
                return (
                    <Fragment key={index}>
                        <p className={classNames(styles.section, {[styles.current]: section === currentSection})}>{section}</p>
                        {index !== (sectionsValues.length - 1) && <div className={styles.path}></div>}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default ProcessBar;