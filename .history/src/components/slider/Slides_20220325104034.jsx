import React, { useState } from "react";
import slidesData from "../../services/slideData";
import "./slide.css";


function Slides() {
    const [slideData, setSlideData] = useState(slidesData());
    const [index, setIndex] = useState(0);
    function handleNext() {
        index !== slideData.length -1? setIndex(index + 1): setIndex(0);
    }

    function handlePrev() {
        index !== 0? setIndex(index - 1): setIndex(slideData.length - 1);    
    }
    
  return (
    <div>
      
      <div id="slide" className="card text-center">
        <div className="slideImg"><img src={slideData[index].image} /></div>
        <div className="slideDes"><p data-testid="text">Slide Text Here</p></div>
  
      </div>
      <div id="navigation" className="text-center">
        <button  data-testid="button-prev" className="small" onClick={()=> {
            handlePrev()
        }}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={()=> {
            handleNext()
        }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slides;
