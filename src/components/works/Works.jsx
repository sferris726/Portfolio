import { useState } from "react"
import "./works.scss"

export default function Works() 
{
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) =>
  {
    /*Is slide clicked left, if it is greater than 0, subtract 1, else go to slide 2. If right is clicked, is current slide less than 3, add 1 else go to slide 0*/
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0)
  };

  return (
    <div className="works" id="works">
      <div 
      className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer"></div>
              </div>
              <h2>Title</h2>
              <p>Description</p>
              <span>Projects</span>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")}></img>
      <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick("right")}></img>
    </div>
  )
}
