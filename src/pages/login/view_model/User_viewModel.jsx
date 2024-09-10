import { useState } from "react"

const UserViewModel = () => {
    const [name, setName] = useState('Katherine')
    const [lastName, setLastName] = useState('Chavez')

    const changeName = () => {
        console.log('entra');
        
        setName('Deicy')
    }

    return {
        changeName,
        name,
        lastName,
        setLastName
    }

}

export default UserViewModel;