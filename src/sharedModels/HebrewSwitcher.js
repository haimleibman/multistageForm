import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../App/App";
import HebrewLang from "./Hebrew.lang";

const useHebrewSwitcher = (text) => {
    const {currentLanguage} = useContext(LanguageContext);
    const [localText, setLocalText] = useState(text);

    useEffect(() => {
        setLocalText(
            text && currentLanguage === 'English' ? text : HebrewLang[text]
        )
    },[currentLanguage, text]);

    return localText;
}

export default useHebrewSwitcher;