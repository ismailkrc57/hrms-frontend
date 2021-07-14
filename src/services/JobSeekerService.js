import axios from "./axios/axios";

export default class JobSeekerService {
  getAllJobSeekers() {
    return axios.get("/jobseekers/getall");
  }
  addJobSeeker(values) {
    return axios.post("/jobseekers/add", values);
  }
  getJobSeekerByMailAndPassword(mail, password) {
    return axios.get(
      `/jobseekers/getByMailAndPassword?mail=${mail}&password=${password}`
    );
  }
  getJobSeekerByNatioanlityIdAndPassword(nationalityId,password)
  {
    return axios.get(
      `/jobseekers/getByNationalityIdAndPassword?nationalityId=${nationalityId}&password=${password}`
    );
  }
}
