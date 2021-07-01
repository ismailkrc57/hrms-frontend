import axios from "axios"

export default class ResumeService{
    getAllResumes()
    {
        return axios.get("http://localhost:8070/api/resumes/getall");
    }
}