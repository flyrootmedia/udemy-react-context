import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
    // Using Consumer approach in this component. Need to use Consumer in class based
    // components when we want to get multiple context objects into a single component.
    // with functional components you can create multiple vars with useContext (see Field.js)

    return (
        <ColorContext.Consumer>
            {(color) => 
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
            }
        </ColorContext.Consumer>
    );
};

// using a class
// class Button extends React.Component {
//     render() {
//         return (
//             <button className="ui button primary">
//                 <LanguageContext.Consumer>
//                     {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
//                 </LanguageContext.Consumer>
//             </button>
//         );
//     }
// }

export default Button;