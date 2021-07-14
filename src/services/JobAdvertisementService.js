import axios from "./axios/axios";

export default class JobAdvertisementService{

    getAllJobAdvertisement()
    {
        return axios.get("/JobAdvertisements/getall");
    }
}