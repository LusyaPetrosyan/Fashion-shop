import { useEffect, useState } from "react";
import {getData} from "../../services/api"

const Cards = () => {
    const [result, setResult] = useState([]);
    useEffect (() => {
        getData().th
    })
    }
    
    return (
        <div>
            
        </div>
    )
}

export default Cards;