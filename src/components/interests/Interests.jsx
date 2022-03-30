import "./interests.scss"

export default function Interests() 
{

  return (
    <div className="interests" id="interests">
      <div className="container">
        <div className="item">
          <img src="assets/web-dev-icon.png" alt="" className="web-img"></img>
          <div className="item-title">
            <h3>Web Development</h3>
          </div>
          <p>Front end and Back end development. Keep security a top priority for users while also putting an emphasis on UI/UX</p>
        </div>
        <div className="item">
        <img src="assets/oop.jpeg" alt="" className="oop-img"></img>
          <div className="item-title">
            <h3>Object Oriented Programming</h3>
          </div>
        </div>
        <div className="item">
          <img src="assets/security.jpg" alt="" className="security-img"></img>
          <div className="item-title">
            <h3>Security</h3>
          </div>
        </div>
      </div>
    </div>
  )
} 