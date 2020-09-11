import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
    const [language, setLanguage] = useState('english');

    const onLanguageChange = (language) => {
        setLanguage(language);
    };

    // Note you can use multiple instances of the LanguageContext.Provider to create different
    // streams of information in the context

    return (
        <div className="ui container">
            <div>
                Select a language:&nbsp;
                <i className="flag us" onClick={() => onLanguageChange('english')} />
                <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
            </div>
            <ColorContext.Provider value="blue">
                <LanguageContext.Provider value={language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>
    );
};

export default App;