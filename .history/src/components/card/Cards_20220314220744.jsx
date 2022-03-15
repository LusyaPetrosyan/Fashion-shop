import { useEffect, useState } from "react";
import {getData} from "../../services/api"

const Cards = () => {
    const [response, setResponse] = useState([]);
    getData().then()
    
    return (
        <div>
            
        </div>
    )
}

export default Cards;