import React, {useState} from 'react';

export const TokenContext = React.createContext('');
export const StatusContext = React.createContext('');
export const UsernameContext = React.createContext('');
export const PasswordContext = React.createContext('');

const Store = ({children}) => {

    const [token, setToken] = useState('');
    const [status, setStatus] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TokenContext.Provider value={[token, setToken]}>
            <StatusContext.Provider value={[status, setStatus]}>
                <UsernameContext.Provider value={[username, setUsername]}>
                    <PasswordContext.Provider value={[password, setPassword]}>
                        {children}
                    </PasswordContext.Provider>
                </UsernameContext.Provider>
            </StatusContext.Provider>
        </TokenContext.Provider>
    )
}
export default Store;