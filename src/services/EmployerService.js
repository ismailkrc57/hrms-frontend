import axios from "./axios/axios";
export default class EmployerService{
    getAllEmployers()
    {
        
        return axios.get("/employers/getall");

    }
    getEmployerByMailAndPassword(mail, password)
    {
        return axios.get(
          `/employers/getByMailAndPassword?mail=${mail}&password=${password}`
        );
    }
    adEmployer(values)
    {
        return axios.post("/employers/add",values);
    }
}