// import React, { useState } from 'react';
import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
//import LanguageContext from '../contexts/LanguageContext';
// refactor with LanguageStore component
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
    // const [language, setLanguage] = useState('english');

    // const onLanguageChange = (language) => {
    //     setLanguage(language);
    // };

    // Refactor with LanguageStore component
    return (
        <div className="ui container">
            <LanguageStore>
                <LanguageSelector />
                <ColorContext.Provider value="red">
                    <UserCreate />
                </ColorContext.Provider>
            </LanguageStore>
        </div>
    );

    // Note you can use multiple instances of the LanguageContext.Provider to create different
    // streams of information in the context

    // return (
    //     <div className="ui container">
    //         <LanguageSelector onLanguageChange={onLanguageChange} />
    //         <ColorContext.Provider value="red">
    //             <LanguageContext.Provider value={language}>
    //                 <UserCreate />
    //             </LanguageContext.Provider>
    //         </ColorContext.Provider>
    //     </div>
    // );
};

export default App;