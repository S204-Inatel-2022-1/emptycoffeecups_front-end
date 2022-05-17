import {
    useState, createContext,
} from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {
    const [currentGifts, setCurrentGifts] = useState({});
    return (
        <Context.Provider
        value={{    
            currentGifts, 
            setCurrentGifts,
        }}
        >
        {children}
        </Context.Provider>
    );
}

export default ContextProvider;