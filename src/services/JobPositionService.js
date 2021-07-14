import axios from "./axios/axios";

export default class JobPositionService{
    getAllJobPositions()
    {
        return axios.get("/jobpositions/getall");
    }
}