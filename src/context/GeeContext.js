import { createContext, useRef } from "react";

export const dataContext = createContext();

const ContextProvider = ({ children }) => {

    const formSectionRef = useRef(null);
    const handleGetStartedClick = () => {
        if (formSectionRef.current) {
            formSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <dataContext.Provider value={{formSectionRef, handleGetStartedClick}}>
            {children}
        </dataContext.Provider>
    )
}

export default ContextProvider;