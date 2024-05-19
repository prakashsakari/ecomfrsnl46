import axios from 'axios';

export const userLogin = async (payload) => {
    const BaseUrl = 'https://shopit-ecom-gfg.onrender.com'
    try{
        const { data : {data}} = await axios.post(BaseUrl + '/api/auth/login', payload);
        localStorage.setItem('token', data.token);
        sessionStorage.setItem('token', data.token);
        return data;
    }catch(err){
        console.log('err-', err)
    }
}