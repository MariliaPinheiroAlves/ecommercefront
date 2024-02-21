import React from "react"

const MessageContext = React.createContext({})

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = React.useState(null)

    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    )
}

export const useMessageContext = () => React.useContext(MessageContext)
