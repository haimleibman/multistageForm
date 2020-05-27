import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import { sections } from '../sharedModels/sections.model';
import { SectionContext, LanguageContext } from '../App/App';
import styles from './ButtonSection.module.css';
import classNames from 'classnames';
import { Store } from '../Store/Store';
import { useRecoilValue } from 'recoil';
import SuccessModal from '../SuccesModal/SuccessModal';
import useHebrewSwitcher from '../sharedModels/HebrewSwitcher';

const ButtonSection = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const {currentSection, toggleSection} = useContext(SectionContext);
    const {currentLanguage} = useContext(LanguageContext);
    const isSectionValid = useRecoilValue(Store[currentSection]);

    const back = useHebrewSwitcher('Back');
    const Next = useHebrewSwitcher('Next');
    const Submit = useHebrewSwitcher('Submit');
    
    const sectionsValues = Object.values(sections);

    const isLastSection = () => currentSection === sectionsValues[sectionsValues.length - 1];
    const isFirstSection = () => currentSection === sectionsValues[0];

    const handleNextActoin = () => {
        isLastSection() ? 
        setShowSuccess(true)
        : toggleSection(sectionsValues[sectionsValues.indexOf(currentSection) + 1])
    }

    return (
        <div className={classNames(styles.buttonsContainer, {[styles.rtl]: currentLanguage === 'Hebrew'})}>
            {!isFirstSection() && 
                <Button text={back} onClick={() => toggleSection(sectionsValues[sectionsValues.indexOf(currentSection) - 1])}/>
            }
            <Button text={isLastSection() ? Submit : Next}  onClick={handleNextActoin} disabled={!isSectionValid}/>
            <SuccessModal isOpen={showSuccess} closeDialog={() => setShowSuccess(false)}/>
        </div>
    )
}

export default ButtonSection;