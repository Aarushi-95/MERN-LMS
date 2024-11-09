import axios from "axios";


const axiosInstance = axios.create({
    baseURL : 'https://mern-lms-wc2k.onrender.com',
});

axiosInstance.interceptors.request.use(config=>{
    const accessToken = JSON.parse(sessionStorage.getItem('accessToken')) || "";

    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
},(err)=>Promise.reject(err))


export default axiosInstance;