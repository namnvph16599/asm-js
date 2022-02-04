import axios from "axios";

const instance = axios.create({
    baseURL : "https://5e79b4b817314d00161333da.mockapi.io",
    headers : {  //headers là nội dung gửi requesr lên sever
        "Content-Type" : "application/json"
    } 
})

export default instance;