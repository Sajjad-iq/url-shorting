import { createContext, ReactNode, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const Context = createContext<any>([])

const ContextProvider = ({ children }: ProviderChildrenType) => {

    const [links, setLinks] = useState(null)
    const [count, setCount] = useState(0)

    return (
        <Context.Provider value={{ links, setLinks, count, setCount }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider