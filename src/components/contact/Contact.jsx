import "./contact.scss"
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() 
{
  const [message, setMessage] = useState(false);

  function sendEmail(e)
  {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm("service_pae4hs8", "template_ggbytfv", e.target, "jpcdAzkvD3yRd9N8X")
      .then((result) => 
    {
      console.log(result.text);
    },
    (error) => 
    {
      console.log(error.text);
    });
    e.target.reset()
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img></img>
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name"></input>
          <input type="text" placeholder="Email" name="email"></input>
          <input type="text" placeholder="Subject" name="subject"></input>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you!</span>}
        </form>
      </div>
    </div>
  )
}
