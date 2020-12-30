import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Convert from '../Convert/Convert';



const options = [
    {
        label:'Arabic',
        value : 'ar'
    },
    {
        label : 'hindi',
        value : 'hi'
    }
]

const Translate = () => {

    const [language,setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div className="container card p-2">
                        <div className="row m-2">
                            <div className="col">
                                <div className="form-group">
                                    <label >Enter text to be translated</label>
                                    <input 
                                        className="form-control" 
                                        value={text}
                                        onChange={(event) => setText(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>      
                        <div className="row m-2">
                            <div className="col">
                                <Dropdown 
                                    label="Select a Language"
                                    options={options}
                                    selected={language}
                                    onSelectedChange={setLanguage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-2">
                <div className="col card m-2 p-4">
                    <h5 className="header">
                        Translated text
                    </h5>
                    <Convert text={text} language={language} />
                </div>
            </div>      
            
        </div>
        
    );
}

export default Translate;