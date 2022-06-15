import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./Product.css";
import { connect } from 'react-redux';


function ProductDetail({theme}) {
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

    const imageStyle = theme === "dark" ? 'image-with-border' : ''

    useEffect(getCap, [])
    if (loading) {
        return <div>ЗАГРУЗКА...</div>
    } else {
        return (
            <div>
                <div>{cap.name}</div>
                <div>{cap.price}</div>
                <div>{cap.description}</div>
                <div><img className={imageStyle} width="300px" src={ cap.capsimage.length > 0 ? cap.capsimage[0].photo : "" }/></div>
            </div>
        )
    }
}

const selector = state => {
    return {theme: state.theme.currentTheme}
}
 
export default connect(selector, null)(ProductDetail)

