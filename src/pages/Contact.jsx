import React, { useState } from "react";

function Contact() {
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: firstName,
      surName: lastName,
      mail: email,
      sub: subject,
      msg: message,
    };
    console.log(data);
    setUser(user.concat(data));
    console.log(user);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div id="contact" className="contacts">
      <aside className="name">
        <p>
          <span>CONTACT</span> <span>KNOLL &</span> <span>WALTERS</span>
        </p>
      </aside>

      <main className="form">
        <h1>
          <b>OUR</b> ADDRESS
        </h1>
        <h4> 500 Terry Francois St. San Francisco, CA 94158</h4>
        <h4>
          <b>Email:</b> info@mysite.com
        </h4>
        <h4>
          <b>Tel:</b> 123-456-7890
        </h4>

        <h3>Click Here to Find Us</h3>
        <form onSubmit={handleSubmit}>
          <p>
            For any general inquiries, please fill in the following contact
            form:
          </p>
          <div className="row">
            <div className="inputColumn">
              <label htmlFor="fName">First Name *</label>
              <input
                type="text"
                required
                id="fName"
                name="fName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="lName">Last Name *</label>
              <input
                type="text"
                required
                id="lName"
                name="lName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                required
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Message * </label>
              <br />
              <input
                type="text"
                required
                id="message"
                className="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
      <footer>
        <div className="back">
          <a href="/#homes">
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_399542.png"
              alt="top arrow"
            />
          </a>
          <p>BACK TO TOP</p>
        </div>
        <div className="links">
          <p>© 2023 by Knoll & Walters LLP. Proudly created with Wix.com</p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
