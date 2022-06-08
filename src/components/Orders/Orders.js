import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Orders() {
    const [ordersCount, setOrders] = useState()
    const [message, setMessage] = useState("")

    function getOrders() {
        axios.get(
            "http://159.89.2.247:8003/api/orders/",
            {
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0Nzg0NjQ5LCJpYXQiOjE2NTQ2OTgyNDksImp0aSI6ImFiYzc3Y2EwOTI2ODRjOTRiY2Y5YmYwNTgwMzA3MGI4IiwidXNlcl9pZCI6MTN9.VZJaKmnH8_gNB7xjWLpamJCbwBQioFv4LZ8nZuoh8cg'
                }
            }
        )
            .then(response => {
                if (response.data.count === 0) {
                    setMessage("Заказов нет...")
                } else {
                    setOrders(response.data.count)
                }  
            })
            .catch(error => {
                if (error.response.status === 401) {
                    setMessage("Нет доступа! Надо пройти авторизацию!")
                } else {
                    setMessage(error.message)
                }
            })
    }

    useEffect(getOrders, [])
    if (message) {
        return <div>{message}</div>
    } else {
        return (
            <div>
                Количество заказов: {ordersCount}
            </div>
        )
    }
} 