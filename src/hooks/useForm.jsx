import React from "react"

const useForm = () => {
    const [value, setValue] = React.useState("")

    const onChange = ({ target }) => {
        setValue(target.value)
    }

    const setInitalValue = (value) => {
        setValue(value)
    }

    return {
        value,
        onChange,
        setInitalValue,
    }
}

export default useForm
