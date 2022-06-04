import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


export default function ProductDetail() {
    const [cap, setCap] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    function getCap() {
        axios.get(`http://159.89.2.247:8003/api/caps/${id}/`)
        .then(response => {
            // console.log(response.data)
            setCap(response.data)
            setLoading(false)
        })
    }

    useEffect(getCap, [])
    if (loading) {
        return <div>ЗАГРУЗКА...</div>
    } else {
        return (
            <div>
                <div>{cap.name}</div>
                <div>{cap.price}</div>
                <div>{cap.description}</div>
                <div><img src={cap.capsimage[0].photo}/></div>
            </div>
        )
    }
}