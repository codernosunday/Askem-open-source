import React, { createContext, useState } from 'react'

const GroupAuthContext = createContext()
const { Provider } = GroupAuthContext

const GroupAuthProvider = ({ children }) => {
    const [valueGroup, setValueGroup] = useState(undefined);
    return (
        <Provider
            value={{ valueGroup, setValueGroup }}
        >
            {children}
        </Provider>
    )
}

export { GroupAuthContext, GroupAuthProvider }
