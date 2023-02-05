import axios from 'axios';

const  URL_API = 'https://freecodecamp-clone.onrender.com';

export const authenticateSignin = async (data) => {
    try {
        return await axios.post(`${ URL_API}/signin`,data);
    } catch (error) {
        console.log('Error while calling Signin API -->', error.message);
        return error.response;
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${ URL_API}/login`,data);
    } catch (error) {
        console.log('Error while calling Login API -->', error.message);
        return error.response;
    }
}

