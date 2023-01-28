import axios from 'axios';
const axiosInstance = axios.create({
    headers: {
        'x-api-key': 'b28952e5f07647ad8d671c64462007df'
    }
})

export default axiosInstance;