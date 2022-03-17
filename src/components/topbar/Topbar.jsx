import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

export default function Topbar() 
{
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">intro</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>413 652 9180</span>  
          </div> 
          <div className="itemContainer">
            <Mail className="icon" />
            <span>scott.ferris93@gmail.com</span>  
          </div>  
        </div>
        <h1>Hello</h1>
        <div className="right">
          right side
        </div>
      </div>
    </div>
  )
}
