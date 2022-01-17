import React, {useState} from 'react';

const OperatorContext = React.createContext({
    overlay: false,
    openModal: () => {},
    closeModal: () => {},
    openModalWithData: (e) => {},
    value: {name: '', code: '', country: '', image: ''},
    validator: false
});

export const OperatorContextProvider = (props) => {
    const [overlay, setOverlay] = useState(false);
    const [value, setValue] = useState({name: '', code: '', country: '', image: ''})
    const [validator, setValidator] = useState(false);
    
    const openModalHandler = () => {
        setOverlay(true);
    };

    const closeModalHandler = () => {
        setOverlay(false);

        setValue(
            {
                name: '',
                code: '',
                country: '',
                image: ''

            }
        )

        setValidator(false);

    };

    const openModalWithDataHandler = (e) => {
       
        setOverlay(true);
        setValue(
            {
                name: e.data.name,
                code: e.data.code,
                country: e.data.country,
                image: e.data.image

            }
        )

        setValidator(true);
        
    }

    return (
        <OperatorContext.Provider value={
            {
                overlay: overlay,
                openModal: openModalHandler,
                closeModal: closeModalHandler,
                openModalWithData: openModalWithDataHandler,
                value: value,
                validator: validator
            }
        }
            >
            {props.children}
        </OperatorContext.Provider>
    );
};

export default OperatorContext;
