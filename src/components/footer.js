import React from "react";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Whatsapp from "../images/whatsapp.png";

class FooterInfo extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <footer>
        <h2>quick links</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/vishnu1894?mibextid=D4KYlr"
              target="_blank" rel="noreferrer"
            >
              <img src={Facebook} alt="facebook" />
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/iamviznu_devgn?igshid=MzRlODBiNWFlZA=="
              target="_blank" rel="noreferrer"
            >
              <img src={Instagram} alt="instagram" />
              instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/+918825815082" target="_blank" rel="noreferrer">
              <img src={Whatsapp} alt="whatsapp" />
              whatsapp
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default FooterInfo;
