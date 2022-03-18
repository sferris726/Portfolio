import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

export default function Topbar() 
{
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">intro</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>413 652 9180</span>  
          </div> 
          <div className="itemContainer">
            <Mail className="icon" />
            <span>scott.ferris93@gmail.com</span>  
          </div>  
        </div>
        <div className="right">
         <div className="menu">
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
         </div>
        </div>
      </div>
    </div>
  )
}
