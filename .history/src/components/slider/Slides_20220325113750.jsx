import React, { useState } from "react";
import slidesData from "../../services/slideData";
import "./slide.css";
import {Button, Icon} from "semantic-ui-react";


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
    <div className="">
      <Button data-testid="button-prev" className="small" onClick={()=> {
            handlePrev()
        }}>
         <Icon name = "chevron left" />
        </Button>
      
      <div id="slide" className="card text-center">
        <div className="slideImg"><img src={slideData[index].image} /></div>
        <div className="slideDescription"><p data-testid="text">{slideData[index].text}</p></div>
  
      </div>
      {/* <div id="navigation" className="text-center"> */}
        
        <Button data-testid="button-next" className="small" onClick={()=> {
            handleNext()
        }}>
          <Icon name = "chevron right" />
        </Button>
      {/* </div> */}
    </div>
  );
}

export default Slides;