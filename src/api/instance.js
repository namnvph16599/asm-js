import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:3001",
    headers : {  //headers là nội dung gửi requesr lên sever
        "Content-Type" : "application/json"
    } 
})

export default instance;