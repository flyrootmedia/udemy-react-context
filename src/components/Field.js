import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// refactor to use LanguageContext component
const Field = () => {
    // using context method in this component to demonstrate multiple contexts with useContext
    const languageContext = useContext(LanguageContext);
    const color = useContext(ColorContext);

    const text = languageContext.language === 'english' ? 'Name' : 'Naam';

    return (
        <div className="ui field">
            <label style={{color: color}}>{text}</label>
            <input />
        </div>
    );
};

// const Field = () => {
//     const language = useContext(LanguageContext);
//     const color = useContext(ColorContext);

//     const text = language === 'english' ? 'Name' : 'Naam';

//     return (
//         <div className="ui field">
//             <label style={{color: color}}>{text}</label>
//             <input />
//         </div>
//     );
// };

// using a class
// class Field extends React.Component {
//     // To use "this.context" method of getting context must be called contextType 
//     // static keyword adds a property directly to the class itself (e.g. Button.contextType)
//     static contextType = LanguageContext;

//     render() {
//         const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//         return (
//             <div className="ui field">
//                 <label>{text}</label>
//                 <input />
//             </div>
//         );
//     }
// }

export default Field;