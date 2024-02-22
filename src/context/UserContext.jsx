import React from "react"

import url from "../axios/config"
import { useMessageContext } from "./MessageContext"
import { useNavigate } from "react-router-dom"

const UserContext = React.createContext({})

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()

    const [user, setUser] = React.useState(null)
    const [logged, setLogged] = React.useState(false)

    const { setMessage } = useMessageContext()

    const logIn = async (email, password) => {
        try {
            const response = await url.post("/token", {
                email,
                password,
            })

            const token = response.data.token

            localStorage.setItem("token", token)

            await autoLogin()

            setMessage({
                value: "Login realizado com sucesso!",
                type: "success",
            })
        } catch (error) {
            console.log(error.response.data)
            setMessage({ value: error.response.data.message, type: "danger" })
        }
    }

    const signUp = async (email, password, name, username) => {
        try {
            await url.post("/signup", {
                email,
                password,
                name,
                username,
            })

            await logIn(email, password)
        } catch (error) {
            console.log(error)
            setMessage({ value: error.response.data.message, type: "danger" })
        }
    }

    const getByUsername = async (username) => {
        try {
            const response = await url.get(`/user/${username}`)

            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = () => {
        setUser(null)
        setLogged(false)
        localStorage.removeItem("token")

        setMessage({
            value: "Logout realizado com sucesso!",
            type: "info",
        })

        navigate("/")
    }

    const autoLogin = async () => {
        try {
            const response = await url.get("/login", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })

            const user = response.data

            setUser(user)
            setLogged(true)

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        if (localStorage.getItem("token")) autoLogin()
    }, [])

    return (
        <UserContext.Provider
            value={{ user, logged, logIn, signUp, logOut, getByUsername }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)
