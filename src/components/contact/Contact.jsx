import "./contact.scss"
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() 
{
  const [message, setMessage] = useState(false);
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [subjectVal, setSubjectVal] = useState('');
  const [textVal, setTextVal] = useState('');

  function sendEmail(e)
  {
    e.preventDefault();

    emailjs.sendForm("service_pae4hs8", "template_ggbytfv", e.target, "jpcdAzkvD3yRd9N8X")
      .then((result) => 
    {
      console.log(result.text);
    },
    (error) => 
    {
      console.log(error.text);
    });
    setMessage(true);
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
          <input type="text" placeholder="Name" name="name" value={nameVal} onChange={e => setNameVal(e.target.value)}></input>
          <input type="text" placeholder="Email" name="email" value={emailVal} onChange={e => setEmailVal(e.target.value)}></input>
          <input type="text" placeholder="Subject" name="subject" value={subjectVal} onChange={e => setSubjectVal(e.target.value)}></input>
          <textarea placeholder="Message" name="message" value={textVal} onChange={e => setTextVal(e.target.value)}></textarea>
          <button disabled={!nameVal || !emailVal || !subjectVal || !textVal || message} type="submit">Send</button>
          {message && <span>Thank you!</span>}
        </form>
      </div>
    </div>
  )
}
