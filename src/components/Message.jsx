import React from "react"

import "./Message.css"

import { useMessageContext } from "../context/MessageContext"

const Message = () => {
    const [active, setActive] = React.useState(false)

    const colors = {
        danger: { bg: "rgb(240, 117, 117)", text: "rgb(116, 12, 12)" },
        success: { bg: "rgb(117, 240, 123)", text: "rgb(12, 116, 52)" },
        info: { bg: "rgb(117, 201, 240)", text: "rgb(12, 95, 116)" },
    }

    const { message, setMessage } = useMessageContext()

    React.useEffect(() => {
        if (message) {
            setActive((active) => !active)

            const timeoutId = setTimeout(() => {
                setActive(false)
                setMessage(null)
            }, 3500)

            return () => clearTimeout(timeoutId)
        }
    }, [message])

    return (
        <>
            {active && (
                <div
                    style={{ backgroundColor: colors[message.type].bg }}
                    className="message-container"
                >
                    <p
                        style={{ color: colors[message.type].text }}
                        className="message-message"
                    >
                        {message.value}
                    </p>
                </div>
            )}
        </>
    )
}

export default Message
