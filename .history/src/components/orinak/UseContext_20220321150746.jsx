import {useState, useEffect, useContext, createContext} from "react"

function Parent() {
  const [data, setData] = useState([]);
  
  return(
    <div>
      <h4>Child component</h4>
    </div>
  )
}

function Child() {
  return(
    <div>
      <h4>jfu</h4>
    </div>
  )
}