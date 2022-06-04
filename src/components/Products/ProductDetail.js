import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function ProductDetail() {
    const [cap, setCap] = useState({})
    const {id} = useParams();

    function getCap() {
        fetch(`http://159.89.2.247:8003/api/caps/${id}/`)
        .then(response => response.json())
        .then(data => setCap(data))
    }

    useEffect(getCap, [])

    return (
        <div>
            <div>{cap.name}</div>
            <div>{cap.price}</div>
            <div>{cap.description}</div>
        </div>
    )
}