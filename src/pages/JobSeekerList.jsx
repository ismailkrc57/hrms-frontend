import React, { useState, useEffect } from "react";
import JobSeekerService from "../services/JobSeekerService";

//curl -X GET "http://localhost:8070/api/jobseekers/getall" -H "accept: */*"
export default function JobSeekerList() {
  const [jobSeekers, setjobSeekers] = useState([]);
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getAllJobSeekers()
      .then((result) => setjobSeekers(result.data.data));
  });

  return (
    <div>
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={300}>
            {
            jobSeekers.map((jobSeeker) => (
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                  <h3>
                    <a href>{jobSeeker.name + " " + jobSeeker.surname}</a>
                  </h3>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>
      {/* End Features Section */}
    </div>
  );
}
