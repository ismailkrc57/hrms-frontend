import React from "react";
import { useState,useEffect } from "react";
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
              <div className="col-md-6 col-lg-3  align-items-stretch mb-3">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <i class="fab fa-react"></i>
                  </div>
                  <h4 className="title">
                    <a href>{jobPosition.positionName}</a>
                  </h4>
                  <p className="description">

                  </p>
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
