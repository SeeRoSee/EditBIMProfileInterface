import React, {useState} from 'react';

export const TokenContext = React.createContext('');

const Store = ({children}) => {

    const [token, setToken] = useState('Kein Token generiert!');

    return (
        <TokenContext.Provider value={[token, setToken]}>
            {children}
        </TokenContext.Provider>
    )
}
export default Store;