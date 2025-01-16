import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { isEmpty, o_O } from "../../helper";
import AuthenticationService from "../../services/AuthenticationService";
import { updateUser } from "../../store/slices/AuthSlice";

const useUserDetail = () => {
    const [email, setEmail] = useState <string>('')
    const [first_name, setFirstName] = useState <string>('')
    const [last_name, setLastName] = useState <string>('')
    const [authors, setAuthors] = useState <string[]>([])
    const [sources, setSources] = useState <string[]>([])
    const [error, setError] = useState <string>('')
    const [isLoading, setIsLoading] = useState <boolean>(false)
    const [isSuccess, setIsSuccess] = useState <boolean>(false)

    const dispatch = useDispatch()

    const handleUpdateUserInfo = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        if(first_name && last_name && email) {
            let [error, data] = await o_O(AuthenticationService.updateUser({email, first_name, last_name, authors, sources}))

            // return console.log(error, data)
            if(data?.status === 'error' || !isEmpty(data?.errors) || error) {
                setError(data?.message || error ||'The provided credentials are incorrect.')
                return setIsLoading(false);
            }

            let user = data?.data?.user
         
            dispatch(updateUser(user))
            setError('')

            setIsLoading(false);
            return setIsSuccess(true)
        }


        setError('The provided credentials are incorrect.');
        return setIsLoading(false);
    }

    return {
        email, setEmail, setError, error, handleUpdateUserInfo, setLastName,
        isLoading, setIsLoading, first_name, setFirstName, last_name, authors,
        setAuthors, setSources, sources, isSuccess,
    };
}

export default useUserDetail;