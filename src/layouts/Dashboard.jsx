import React from "react";
import JobSeekerList from "../pages/JobSeekerList";
import JobPositionList from "../pages/JobPositionList";
function Dashboard(props) {
  return (
    <div>
      <JobPositionList />
      <JobSeekerList />
      {<JobAdvertisementList />}
    </div>
  );
}

export default Dashboard;
