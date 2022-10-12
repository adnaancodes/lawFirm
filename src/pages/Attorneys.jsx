import React from "react";
import attorney1 from "../assets/images/attorney1.jpg";
import attorney2 from "../assets/images/attorney2.jpg";
import attorney3 from "../assets/images/attorney3.jpg";
function Attorneys() {
  return (
    <main id="attorneys" className="attorney">
      {/* <img src={attorneys} alt="attorneys pictures" /> */}
      <div>
        <div className="personnel">
          <h1>OUR ATTORNEYS</h1>
          <div className="pictures">
            <div>
              <img src={attorney3} alt="aiden" />
              <h2>AIDEN WALTERS</h2>
              <h3>PARTNER</h3>
              <p>Tel: 123-456-7890</p>
              <small>info@mysite.com</small>
            </div>

            <div>
              <img src={attorney2} alt="julia" />
              <h2>JULIA KNOLL</h2>
              <h3>PARTNER</h3>
              <p>Tel: 123-456-7890</p>
              <small>info@mysite.com</small>
            </div>

            <div>
              <img src={attorney1} alt="james" />
              <h2>JAMES LOPEZ</h2>
              <h3>PARTNER</h3>
              <p>Tel: 123-456-7890</p>
              <small>info@mysite.com</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Attorneys;
