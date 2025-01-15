import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { isEmpty, o_O } from "../../helper";
import AuthenticationService from "../../services/AuthenticationService";
import { setAuthState, reset } from "../../store/slices/AuthSlice";

const useAuthLogin = () => {
    const [email, setEmail] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    const [error, setError] = useState <string>('')
    const [isLoading, setIsLoading] = useState <boolean>(false)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const handleLogin = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        if(password && email) {
            let [error, data] = await o_O(AuthenticationService.signin({email, password}))

            if(data?.status === 'error' || !isEmpty(data?.errors) || error) {
                setError(data?.message || error ||'The provided credentials are incorrect.')
                return setIsLoading(false);
            }

            let token = data?.data?.token
            let user = data?.data?.user

            setError('')
         
            dispatch(setAuthState({
                authenticated: !!token,
                token: token,
                user: user,
            }))
            setIsLoading(false);

            setTimeout(() => {
                navigate('/')
            }, 3000)
        }


        setError('The provided credentials are incorrect.');
        return setIsLoading(false);
    }

    const handleLogout = async () => {
        await o_O(AuthenticationService.signOut())

        dispatch(reset())
        setIsLoading(false);

        setTimeout(() => {
            navigate('/auth')
        }, 3000)
    }

    return {
        email, setEmail, password, setError, error, setPassword, handleLogin,
        isLoading, setIsLoading, handleLogout
    };
}

export default useAuthLogin;