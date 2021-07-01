import axios from "axios";

export default class JobAdvertisementService{

    getAllJobAdvertisement()
    {
        return axios.get("http://localhost:8070/api/JobAdvertisements/getall");
    }
}