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
      <h1>Projects</h1>
      <div 
      className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw)` }}>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>NodeJS Web Game</h2>
                <p>
                  Build a treaure hunt game with user authentication using node.js, JQuery and MySQL. Pick a box until the treasure is found; if the box is red, continue, if the box is green, you found the treasure! MySQL database stores wins and stats. 
                </p>
                <button>See Code</button>
              </div>
            </div>
            <div className="right">
            <div className="videoContainer">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/K6L-IBG9a1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow4.png" alt="" className="arrow left" onClick={()=>handleClick("left")}></img>
      <img src="assets/arrow4.png" alt="" className="arrow right" onClick={()=>handleClick("right")}></img>
    </div>
  )
}
