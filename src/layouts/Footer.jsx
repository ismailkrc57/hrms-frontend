/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer(props) {
  return (
    <div>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-end">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright">
                © Copyright <strong>hrms</strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ */}
                Designed by{" "}
                <a href={"https://github.com/ismailkrc57".toString()}>
                  ismail KARACA
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href={"#".toString()} className="scrollto">
                  Home
                </a>
                <a href={"#".toString()} className="scrollto">
                  About
                </a>
                <a href={"#".toString()}>Privacy Policy</a>
                <a href={"#".toString()}>Terms of Use</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>
  );
}

export default Footer;
