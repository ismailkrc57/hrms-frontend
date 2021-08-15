import axios from "axios";
export default axios.create({
  baseURL: "https://hrms-backends.herokuapp.com/api",
});