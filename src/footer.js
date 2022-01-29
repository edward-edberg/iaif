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
            <div className="one-line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="footer-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="address">
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/53+W+Jackson+Blvd+STE+1734,+Chicago,+IL+60604/@41.8777256,-87.6317474,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2cbd21037c8f:0x88e3f5207e8d689a!8m2!3d41.8777256!4d-87.6295587"
                >
                  53 W. Jackson Blvd., Suite 1734
                </a>
              </p>
            </div>
            <div className="one-line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="footer-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>
                <a href="tel:+13126261600" className="footer-link">
                  +1 (312) 626 1600
                </a>
              </p>
            </div>

            <div className="one-line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="footer-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <p>
                <a href="mailto:contact@iaif.us" className="footer-link">
                  contact@iaif.us
                </a>
              </p>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
