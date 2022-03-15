import { useEffect, useState } from "react";
import {getData} from "../../services/api"

const Cards = () => {
    const [result, setResult] = useState([]);
    getData().then((param) => {
        setResult
    })
    
    return (
        <div>
            
        </div>
    )
}

export default Cards;