import { Outlet } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import { UserProvider } from "./UserContext"

function App() {
    return (
        <UserProvider>
            <div className="App">
                <NavBar />
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </UserProvider>
    )
}

export default App
