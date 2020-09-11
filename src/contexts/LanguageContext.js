import React, { useState } from 'react';

// create a context object with default value of 'english'
const Context = React.createContext('english');

export const LanguageStore = (props) => {
    // creating state as an object here as opposed to individual useState calls so that I can
    // more easily pass the entire state to the Provider. The course uses a class component, so passes
    // it to the provider with ...this.state
    const [state, setState] = useState({
        language: 'english'
    });

    const onLanguageChange = (language) => {
        // remember to merge the original values of state when using useState with an object
        setState({
            ...state,
            language: language
        });
    };

    return (
        <Context.Provider value={{...state, onLanguageChange}}>
            {props.children}
        </Context.Provider>
    )
};

export default Context;

