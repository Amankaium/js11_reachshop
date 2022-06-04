import {useState, useEffect} from 'react'
import Product from './Product'


export default function Products() {
    const [caps, setCaps] = useState([])

    function getCaps() {
        fetch(
            "http://159.89.2.247:8003/api/caps/")
        .then(response => response.json())
        .then(data => setCaps(data.results))
    }

    useEffect(getCaps, [])

    return (
        <div>
            <h2>Список товаров</h2>
            {caps.map(cap => <Product cap={cap} key={cap.id}/>)}
        </div>
    )
}