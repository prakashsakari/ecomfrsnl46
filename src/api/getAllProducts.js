import axios from 'axios';

export const getAllProducts = async () => {
    const URL = 'https://shopit-ecom-gfg.onrender.com/api/products';
    try{
        const {data: {data}} = await axios.get(URL);
        return data;
    }catch(err){
        return err
    }
}