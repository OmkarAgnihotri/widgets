import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language,text}) => {
 
    const [translation , setTranslation] = useState("");
    const [debouncedText , setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500);

        return () => {
            clearTimeout(timerId);
        }        

    }, [text])

    useEffect(() => {
        // console.log(language, text);

        const requestTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q : debouncedText,
                    target : language.value,
                    key : KEY
                }
            });

            setTranslation(data.data.translations[0].translatedText);
        }

        requestTranslation();

    },[language,debouncedText])

    return (
        <div >
            {translation}
        </div>
    );
}

export default Convert;
