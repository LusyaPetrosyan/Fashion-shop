import { useEffect, useState } from "react";
import {getData} from "../../services/api"

const Cards = () => {
    const [result, setResult] = useState([]);
    useEffect (() => {
        getData().then((param) => {
            setResult(param);
        });
    })
    }
    
    return (
        <div>
            
        </div>
    )
}

export default Cards;