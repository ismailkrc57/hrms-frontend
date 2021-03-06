import React, { useState, useEffect } from "react";
import JobSeekerService from "../services/JobSeekerService";
import { Link } from "react-router-dom";

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
            <h2>Job Seekers</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={300}>
            {jobSeekers.map((jobSeeker) => (
              <div key={jobSeeker.id} className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                  <h3>
                    <Link to="/NotFound">{jobSeeker.name + " " + jobSeeker.surname}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Features Section */}
    </div>
  );
}
