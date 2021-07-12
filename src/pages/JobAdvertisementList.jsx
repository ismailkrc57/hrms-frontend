/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function JobAdvertisementList() {
    return (
      <div>
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Team</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt={"image".toString()}
                    />
                    <div className="social">
                      <a href={"".toString()}>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt={"image".toString()}
                    />
                    <div className="social">
                      <a href={"".toString()}>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={300}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt={"image".toString()}
                    />
                    <div className="social">
                      <a href={"".toString()}>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={400}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt={"image".toString()}
                    />
                    <div className="social">
                      <a href={"".toString()}>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href={"".toString()}>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
      </div>
    );
}
