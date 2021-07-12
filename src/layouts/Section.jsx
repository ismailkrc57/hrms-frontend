/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Section() {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Find your business with H.R.M.S.</h1>
              <div data-aos="fade-up" data-aos-delay={800}>
                <a href={"".toString()} className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              {/*eslint-disable-next-line jsx-a11y/alt-text*/}
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt={"image".toString()}
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
}
