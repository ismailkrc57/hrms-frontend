import axios from "axios";

export default class EmployerService{
    getAllEmployers()
    {
        return axios.get("http://localhost:8070/api/employers/getall");

    }
    getEmployerByMailAndPassword(mail, password)
    {
        return axios.get(
          `http://localhost:8070/api/employers/getByMailAndPassword?mail=${mail}&password=${password}`
        );
    }
}