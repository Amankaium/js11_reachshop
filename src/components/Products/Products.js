import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import "./Products.css";


function Products({theme}) {
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

    const currectStyle = theme === 'dark' ? "goods-list__dark" : "goods-list__light"

    if (isError) {
        return <div>Ошибка!</div>
    } else {
        return (
            <div className={currectStyle}>
                <h2>Список товаров</h2>
                {caps.map(cap => <Product cap={cap} key={cap.id}/>)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {theme: state.value}
}

export default connect(mapStateToProps, null)(Products)
