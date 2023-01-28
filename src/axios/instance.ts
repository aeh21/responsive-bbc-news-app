import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'x-api-key': '934f9667c2274bdcaa0db05d061d951c'
    }
})

export default axiosInstance;