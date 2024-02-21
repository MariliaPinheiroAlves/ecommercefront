import "./App.css"

import { Outlet } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import { MessageProvider } from "./context/MessageContext"

import NavBar from "./components/NavBar"
import Message from "./components/Message"

function App() {
    return (
        <MessageProvider>
            <UserProvider>
                <div className="App">
                    <NavBar />
                    <div className="container">
                        <Outlet />
                    </div>

                    <Message />
                </div>
            </UserProvider>
        </MessageProvider>
    )
}

export default App
