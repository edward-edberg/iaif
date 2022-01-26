import React from "react";
import logo from "./img/01.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-footer">
        <div className="logo-col">
          <a href="#" className="iaif-logo">
            <img src={logo} alt="IAIF logo" className="footer-logo" />
          </a>
          <p className="copyright">&copy; {new Date().getFullYear()} by IAIF</p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">53 W. Jackson Blvd., Suite 1734</p>
            <p>
              <a href="tel:+13126261600" className="footer-link">
                +1 (312) 626 1600
              </a>
            </p>
            <p>
              <a href="mailto:miftahsabri@iaif.us" className="footer-link">
                miftahsabri@iaif.us
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
