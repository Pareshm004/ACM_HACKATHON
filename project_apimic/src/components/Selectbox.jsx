import { useState } from "react";
import styles from './Selectbox.module.css';


const Selectbox=(props)=>{
    let [langsearch,setlangsearch]=useState("")
    
    const handlelangsearch=(event)=>{
        setlangsearch(event.target.value)
        props.handleSelectChange(event);
    }

    const filteredLanguages = props.languages.filter(language => 
        language.langname.toLowerCase().startsWith(langsearch.toLowerCase())
    );

    return(
        <>
        <input list="languages" value={langsearch} onChange={handlelangsearch} />
        <datalist id="languages">
           {filteredLanguages.map((language) => {
                return <option  className={styles.selectboxcss} key={language.langcode} value={language.langname} >{language.langname}</option>;
            })}
        </datalist>
        </>
    )
}
export default Selectbox