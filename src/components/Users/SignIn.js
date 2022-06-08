import {useState} from 'react';
import axios from 'axios';


export default function SignIn() {
    const [user, setUser] = useState({})
    
    function inputHandler(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }

    function submitForm(event) {
        event.preventDefault()
        axios.post(
            "http://159.89.2.247:8003/api/users/signin/",
            user
        ).then(response => {
            console.log(response.data)
        }) 
    }

    return (
        <form onSubmit={submitForm}>
            <input name="username" type="text" onChange={inputHandler}/>
            <input name="password" type="password" onChange={inputHandler}/>
            <button>Войти</button>
        </form>
    )
}