import React, { createContext, useState, useEffect } from 'react';
import styles from './App.module.css';
import classNames from 'classnames';
import { sections } from '../sharedModels/sections.model';
import InputsSection from '../InputSection/InputSection';
import ButtonSection from '../ButtonsSection/ButtonSection';
import ProgressBar from '../ProcessBar/ProcessBar';
import { RecoilRoot } from 'recoil';
import Language from '../Language/Language';

export const SectionContext = createContext({
  currentSection: sections.personal,
  toggleSection: () => {}
});
export const LanguageContext = createContext({
  currentLanguage: 'English',
  toggleLanguage: () => {}
});

function App() {
  const [currentSection, setCurrentSection] = useState(sections.personal);
  const toggleSection = section => setCurrentSection(section);

  const [currentLanguage, setCurrentLanguage] = useState('English');
  const toggleLanguage = Language => setCurrentLanguage(Language);

  const [isRtl, setIsRtl] = useState(false)

  useEffect(() => {
    console.log(currentLanguage)
    setIsRtl(currentLanguage === 'Hebrew');
  }, [currentLanguage]);
  
  return (
    <RecoilRoot>
      <SectionContext.Provider value={{currentSection: currentSection, toggleSection: toggleSection}}>
        <LanguageContext.Provider value={{currentLanguage: currentLanguage, toggleLanguage: toggleLanguage}}>
          <div className={classNames(styles.app, {[styles.rtl]: isRtl})}>
            <Language/>
            <ProgressBar/>
            <InputsSection />
            <ButtonSection/>
          </div>
        </LanguageContext.Provider>
      </SectionContext.Provider>
    </RecoilRoot>
  );
}

export default App;
