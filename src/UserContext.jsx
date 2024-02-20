import React from "react"

import url from "./axios/config"

const UserContext = React.createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    const [logged, setLogged] = React.useState(false)

    const logIn = async (email, password) => {
        try {
            const response = await url.post("/token", {
                email,
                password,
            })

            const token = response.data.token

            localStorage.setItem("token", token)

            await autoLogin()
        } catch (error) {
            console.log(error)
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
