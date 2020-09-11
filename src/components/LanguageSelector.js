import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

// refactor to use LanguageContext store instead of getting callback from props
const LanguageSelector = () => {
    const languageContext = useContext(LanguageContext);

    console.log(languageContext);

    return (
        <div>
            Select a language:&nbsp;
            <i className="flag us" onClick={() => languageContext.onLanguageChange('english')} />
            <i className="flag nl" onClick={() => languageContext.onLanguageChange('dutch')} />
        </div>
    );
};

// const LanguageSelector = ({ onLanguageChange }) => {
//     const languageContext = useContext(LanguageContext);

//     return (
//         <div>
//             Select a language:&nbsp;
//             <i className="flag us" onClick={() => onLanguageChange('english')} />
//             <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
//         </div>
//     );
// };

export default LanguageSelector;