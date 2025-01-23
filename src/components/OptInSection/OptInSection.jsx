import React from 'react'
import './OptInSection.css'

const OptInSection = () => {
  return (
    <>
      <article className="OptIn container" id="OptIn">
        <div className="form-container">
          <div className="titleDiv">
            <h1 className="title">Join Hydra</h1>
            <h2 className="subtitle">Let's Build Your VR Experience</h2></div>
          <form className="form flex" action="#" method="post">
            <div className="form-row flex">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            <div className="form-row flex">
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone_number" placeholder="Phone Number" pattern="[+]{}[0-9]{3}[]?[0-9]{3}[]?[0-9]{3}[]?[0-9]{3}" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Tell Us Something..."></textarea>
            <button className="btn" type="submit">Send to Hydra</button>
          </form>
        </div>

      </article>
    </>
  )
}

export default OptInSection
