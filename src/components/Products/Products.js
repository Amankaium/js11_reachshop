import {useState, useEffect} from 'react'
import Product from './Product'


export default function Products() {
    const [caps, setCaps] = useState([])
    const [isError, setError] = useState(false)

    function getCaps() {
        fetch(
            "http://159.89.2.247:8003/api/caps/")
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => setCaps(data.results))
        .catch(error => {
            setError(true)
            console.log("Э! ОШибка!")
        })
    }

    useEffect(getCaps, [])
    if (isError) {
        return <div>Ошибка!</div>
    } else {
        return (
            <div>
                <h2>Список товаров</h2>
                {caps.map(cap => <Product cap={cap} key={cap.id}/>)}
            </div>
        )
    }
}