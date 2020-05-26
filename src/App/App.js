import React, { createContext, useState } from 'react';
import './App.css';
import { sections } from '../sharedModels/sections.model';
import InputsSection from '../InputSection/InputSection';
import ButtonSection from '../ButtonsSection/ButtonSection';
import ProgressBar from '../ProcessBar/ProcessBar';
import { RecoilRoot } from 'recoil';

export const SectionContext = createContext({
  currentSection: sections.personal,
  toggleSection: () => {}
});

function App() {
  const [currentSection, setCurrentSection] = useState(sections.personal);
  
  return (
    <RecoilRoot>
      <SectionContext.Provider value={{currentSection: currentSection, toggleSection: setCurrentSection}}>
        <div className='app'>
          <ProgressBar></ProgressBar>
          <InputsSection />
          <ButtonSection/>
        </div>
      </SectionContext.Provider>
    </RecoilRoot>
  );
}

export default App;
