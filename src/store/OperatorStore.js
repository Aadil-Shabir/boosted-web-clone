import React, {useState} from 'react';

const OperatorContext = React.createContext({
    overlayState: false,
    openModal: () => {},
    closeModal: false,
});

export const OperatorContextProvider = (props) => {
    const [overlay, setOverlay] = useState(false);
    
    const openModalHandler = () => {
        setOverlay(true);
    };

    const closeModalHandler = () => {
        setOverlay(false)
    };

    return (
        <OperatorContext.Provider value={{overlay: overlay, openModal: openModalHandler, closeModal: closeModalHandler}}>
            {props.children}
        </OperatorContext.Provider>
    );
};

export default OperatorContext;
