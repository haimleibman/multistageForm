import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import { sections } from '../sharedModels/sections.model';
import { SectionContext } from '../App/App';
import styles from './ButtonSection.module.css';
import { Store } from '../Store/Store';
import { useRecoilValue } from 'recoil';
import SuccessModal from '../SuccesModal/SuccessModal';

const ButtonSection = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const {currentSection, toggleSection} = useContext(SectionContext);
    const isSectionValid = useRecoilValue(Store[currentSection]);
    
    const sectionsValues = Object.values(sections);

    const isLastSection = () => currentSection === sectionsValues[sectionsValues.length - 1];
    const isFirstSection = () => currentSection === sectionsValues[0];

    const handleNextActoin = () => {
        isLastSection() ? 
        setShowSuccess(true)
        : toggleSection(sectionsValues[sectionsValues.indexOf(currentSection) + 1])
    }

    return (
        <div className={styles.buttonsContainer}>
            {!isFirstSection() && 
                <Button text='Back' onClick={() => toggleSection(sectionsValues[sectionsValues.indexOf(currentSection) - 1])}/>
            }
            <Button text={isLastSection() ? 'Submit' : 'Next'}  onClick={handleNextActoin} disabled={!isSectionValid}/>
            <SuccessModal isOpen={showSuccess}/>
        </div>
    )
}

export default ButtonSection;