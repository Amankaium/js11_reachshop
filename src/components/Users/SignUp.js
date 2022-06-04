import {useState} from 'react'
import axios from 'axios'


export default function SignUp() {
    const [user, setUser] = useState({})

    function inputHandler(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }

    function sendForm(event) {
        event.preventDefault()

        axios.post(
            "http://159.89.2.247:8003/api/users/signup/",
            user
        ).then(response => {
            console.log(response.data)
        })
    }

    return (
        <form onSubmit={sendForm}>
            <input name="username" type="text" onChange={inputHandler} placeholder="Логин" autoFocus/>
            <input name="password" type="password" onChange={inputHandler} placeholder="Пароль"/>
            <input name="password2" type="password" onChange={inputHandler} placeholder="Подтвердите пароль"/>
            <input name="email" type="email" onChange={inputHandler} placeholder="email"/>
            <input name="phone" type="text" onChange={inputHandler} placeholder="Номер телефона"/>
            <input name="first_name" type="text" onChange={inputHandler} placeholder="Имя"/>
            <input name="last_name" type="text" onChange={inputHandler} placeholder="Фамилия"/>
            <button>Зарегистрироваться</button>
        </form>
    )
}