import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { isEmpty, o_O } from "../../helper";
import AuthenticationService from "../../services/AuthenticationService";
import { setAuthState } from "../../store/slices/AuthSlice";

const useAuthRegister = () => {
    const [email, setEmail] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    // const [phone, setPhone] = useState <string>('')
    const [first_name, setFirstName] = useState <string>('')
    const [last_name, setLastName] = useState <string>('')
    const [error, setError] = useState <string>('')
    const [isLoading, setIsLoading] = useState <boolean>(false)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const handleRegister = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        if(first_name && last_name && password && email) {
            let [error, data] = await o_O(AuthenticationService.register({first_name, last_name, email, password}))

            if(data?.status === 'error' || !isEmpty(data?.errors) || error) {
                setError(data?.message || error ||'The provided credentials are incorrect.')
                return setIsLoading(false);
            }

            let token = data?.data?.token
            let user = data?.data?.user

            setError('')
            navigate('/')
         
            dispatch(setAuthState({
                authenticated: !!token,
                token: token,
                user: user,
            }))
            return setIsLoading(false);
        }


        setError('The provided credentials are incorrect.');
        return setIsLoading(false);
    }

    return {
        email, setEmail, password, setError, error, setPassword, handleRegister,
        isLoading, setIsLoading, first_name, setFirstName, last_name, setLastName
    };
}

export default useAuthRegister;