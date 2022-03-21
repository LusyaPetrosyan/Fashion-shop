import React from "react";
import { useState, useContext, createContext } from "react";
let userData = createContext(null);
export default function Parent() {
  const [state, setState] = useState({
    name: "Arevik",
    surname: "Hayrapetyan",
  });
  return (
    <userData.Provider value={state}>
      <div>
        <h1>Parent Component</h1>
        {/* <Children1/> */}
        <Children />
      </div>
    </userData.Provider>
  );
}
function Children() {
  return (
    <div>
      <h4> This is Children components</h4>
      <SubChild />
    </div>
  );
}
function SubChild() {
  let data = useContext(userData);
  return (
    <div>
      <h4>This is SubChild</h4>
      <div>{data.name}</div>
      <div>{data.surname}</div>
    </div>
  );
}