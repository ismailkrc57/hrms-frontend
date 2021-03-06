import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import JobPositionService from "../services/JobPositionService"
export default function JobPositionList() {

    const [jobPositions, setjobPositions] = useState([]);
    useEffect(()=>{
        let jobPositionService = new JobPositionService();
        jobPositionService.getAllJobPositions().then(result=>setjobPositions(result.data.data))
    })


  return (
    <div>
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Positions</h2>
            <p>find a job in the position you want</p>
          </div>
          <div className="row">
            {jobPositions.map((jobPosition) => (
              <div
                key={jobPosition.id}
                className="col-md-6 col-lg-3  align-items-stretch mb-3"
              >
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <h4 className="title">
                    <Link to="/NotFound">{jobPosition.positionName}</Link>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  );
}
