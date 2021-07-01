import axios from "axios";

export default class JobPositionService{
    getAllJobPositions()
    {
        return axios.get("http://localhost:8070/api/jobpositions/getall");
    }
}