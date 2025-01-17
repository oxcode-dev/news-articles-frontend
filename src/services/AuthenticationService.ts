import axios from "axios";
import { LoginProps, RegisterProps, UserDetailsProps } from "../types";

const baseUrl = import.meta.env.VITE_API_URL;
const loginUrl = `${baseUrl}/api/login`
const logoutUrl = `${baseUrl}/api/logout`
const registerUrl = `${baseUrl}/api/register`
const userUpdateUrl = `${baseUrl}/api/user-settings`

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

    updateUser: async({first_name, last_name, email, sources, authors}: UserDetailsProps) => {
        return axios.post(userUpdateUrl, {
                first_name,
                last_name,
                email,
                sources,
                authors
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