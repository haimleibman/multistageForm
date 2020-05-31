import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../App/App";

const useLanguageSwitcher = (initialText) => {
    const {currentLanguage} = useContext(LanguageContext);
    const [text, setText] = useState(initialText);

    useEffect(() => {
        const switchLanguage = async () => {
            if (currentLanguage !== 'English' && initialText) {
                const lang = await import(`./${currentLanguage}.lang.json`);
                
                setText(lang[initialText]);
            } else 
                setText(initialText);
        }

        switchLanguage();
    },[currentLanguage, initialText]);

    return text;
}

export default useLanguageSwitcher;