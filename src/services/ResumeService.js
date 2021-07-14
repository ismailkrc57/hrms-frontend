import axios from "./axios/axios"

export default class ResumeService{
    getAllResumes()
    {
        return axios.get("/resumes/getall");
    }
}