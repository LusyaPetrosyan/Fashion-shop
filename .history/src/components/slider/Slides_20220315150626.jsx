import React, { useState } from "react";
import slidesData from "../../services/slideData";


function Slides() {
    const [slideData, setSlideData] = useState(slidesData());
    const [index, setIndex] = useState(0);
    function handleNext() {
        index !== slideData.length -1? setIndex(index + 1): setIndex(0);
    }

    function handlePrev() {
        index !== 0? setIndex(index - 1): setIndex(slideData.length - 1);    
    }

    function handleRestart
    
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={() => {
            
        }}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={()=> {
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
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slideData[index].text}</h1>
        <p data-testid="text">Slide Text Here</p>
      </div>
    </div>
  );
}

export default Slides;
