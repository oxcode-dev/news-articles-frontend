import axios from "axios";
import { LoginProps, RegisterProps } from "../types";

const loginUrl = "http://127.0.0.1:8000/api/login"
const logoutUrl = "http://127.0.0.1:8000/api/logout"
const registerUrl = "http://127.0.0.1:8000/api/register"

const AuthenticationService = {
    signin: async({email, password} : LoginProps) => {
        return axios.post(loginUrl, {email, password})
            .then(response => {
                return response;
            })
            .catch(err => {
                return err.response
            });
    },

    signOut: async() => {
        return axios.post(logoutUrl)
            .then(response => {
                return response;
            })
            .catch(err => {
                return err.response
            });
    },

    register: async({first_name, last_name, email, password}: RegisterProps) => {
        return axios.post(registerUrl, {
                first_name,
                last_name,
                email,
                password
            }) .then(response => {
                return response;
            })
            .catch(err => {
                return err.response
            });
    },

    getCurrentUser: () => {
        // return JSON.parse(localStorage.getItem('user'));
    }
}

export default AuthenticationService;