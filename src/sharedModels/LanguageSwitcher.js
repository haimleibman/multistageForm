import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../App/App";

const useLanguageSwitcher = (initialText) => {
    const {currentLanguage} = useContext(LanguageContext);
    const [text, setText] = useState(initialText);

    useEffect(() => {
        const switchLanguage = async () => {
            if (currentLanguage !== 'English' && initialText) {
                const lang = await import(`./${currentLanguage}.lang.json`);

                if (Array.isArray(initialText)) {
                    const modifiedText = initialText.map(_ => lang[_]);
                    
                    setText(modifiedText);
                } else
                    setText(lang[initialText]);
            } else 
                setText(initialText);
        }

        switchLanguage();
    // Because of comparison issue at useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentLanguage]);

    return text;
}

export default useLanguageSwitcher;