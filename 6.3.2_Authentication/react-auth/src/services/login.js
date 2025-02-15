import axios from "axios";
// import * as dotenv from 'dotenv'
// dotenv.config()

const API_URL = import.meta.env.VITE_API_URL;
// console.log(`Variable ultra secreta: ${dotenv.process.env.DB_PASSWORD}`);

const loginService = async (loginInfo, login) => {
    try {
        let response = await axios.post(`${API_URL}/login`, loginInfo);
        console.log(response);
        if (response.status == 200) {
            console.log('Authorization granted!');
            login(response.data.token);
        } else {
            console.log('Error during authorization');
        }
    } catch (error) {
        console.log('An error ocurred ', error);
    }
}

const registerUserService = async (newUserInfo) => {
    try {
        let response = await axios.post(`${API_URL}/register`, newUserInfo);
        console.log(response);
        if (response.status == 201) {
            console.log('User registeredd!');
            alert('User registered!')
        } else {
            console.log('Error during register');
        }
    } catch (error) {
        console.log('An error ocurred ', error);
    }
}

// Función para aprender a hacer pruebas.
const logout = (token) => {
    if(token.role == 'ADMIN'){
        return -1
    }else{
        return 0;
    }
}

export { loginService, registerUserService, logout };