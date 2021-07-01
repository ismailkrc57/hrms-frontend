import axios from "axios";

export default class JobSeekerService{

    getAllJobSeekers()
    {
        return axios.get("http://localhost:8070/api/jobseekers/getall");
    }

}