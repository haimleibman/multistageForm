import React, { useContext } from 'react';
import Button from '../Button/Button';
import { sections } from '../sharedModels/sections.model';
import { SectionContext } from '../App/App';
import styles from './ButtonSection.module.css';
import inputs from '../InputSection/inputs';
import { Store } from '../Store/Store';
import { useRecoilValue } from 'recoil';

const ButtonSection = () => {
    const {currentSection, toggleSection} = useContext(SectionContext);
    const isSectionValid = useRecoilValue(Store[currentSection]);
    const sectionsValues = Object.values(sections);

    const isLastSection = () => currentSection === sectionsValues[sectionsValues.length - 1];
    const isFirstSection = () => currentSection === sectionsValues[0];

    const handleNextActoin = () => {
        isLastSection() ? 
        alert('submit')
        : toggleSection(sectionsValues[sectionsValues.indexOf(currentSection) + 1])
    }

    return (
        <div className={styles.buttonsContainer}>
            {!isFirstSection() && 
                <Button text='previeus' onClick={() => toggleSection(sectionsValues[sectionsValues.indexOf(currentSection) - 1])}/>
            }
            <Button text={isLastSection() ? 'submit' : 'next'}  onClick={handleNextActoin} disabled={!isSectionValid}/>
        </div>
    )
}

export default ButtonSection;