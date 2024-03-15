import { createContext, useState, useContext } from 'react'

const HeadingContext = createContext(null)

export const HeadingContextProvider = ({ children }) => {
    const [heading, setHeading] = useState('Notes');
    const updateHeading = (heading) => setHeading(heading)

    const value = {
        heading,
        updateHeading
    }

    return (
        <HeadingContext.Provider value={value}>
            {children}
        </HeadingContext.Provider>
    )
}

export const useHeading = () => useContext(HeadingContext)