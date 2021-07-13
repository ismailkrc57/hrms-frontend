import axios from "axios";

export default class JobSeekerService {
  getAllJobSeekers() {
    return axios.get("http://localhost:8070/api/jobseekers/getall");
  }
  addJobSeeker(values) {
    return axios.post("http://localhost:8070/api/jobseekers/add", values);
  }
  getJobSeekerByMailAndPassword(mail, password) {
    return axios.get(
      `http://localhost:8070/api/jobseekers/getByMailAndPassword?mail=${mail}&password=${password}`
    );
  }
  getJobSeekerByNatioanlityIdAndPassword(nationalityId,password)
  {
    return axios.get(
      `http://localhost:8070/api/jobseekers/getByNationalityIdAndPassword?nationalityId=${nationalityId}&password=${password}`
    );
  }
}
