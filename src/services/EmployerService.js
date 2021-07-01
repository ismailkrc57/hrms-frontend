import axios from "axios";

export default class EmployerService{
    getAllEmployers()
    {
        return axios.get("http://localhost:8070/api/employers/getall");
    }
}