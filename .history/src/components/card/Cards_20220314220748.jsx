import { useEffect, useState } from "react";
import {getData} from "../../services/api"

const Cards = () => {
    const [response, setResponse] = useState([]);
    getData().then((param))
    
    return (
        <div>
            
        </div>
    )
}

export default Cards;