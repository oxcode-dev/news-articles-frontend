import { useEffect, useState } from "react"
import { isEmpty, o_O } from "../helper"
import { getWithoutToken } from "../services/APIService"
import { useDispatch } from "react-redux";
import { setSharedState } from "../store/slices/SharedSlice";

export const useShared = () => {
    const url = "http://127.0.0.1:8000/api/articles/sources"

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)



    const getArticlesShared = async(url: string) => {
        setIsLoading(true);

        let [err, data] = await o_O(getWithoutToken(url))

        if(data?.status === 'error' || !isEmpty(data?.errors) || err) {
            return setIsLoading(false);
        }

        let fetched = data?.data?.data || []
        if(data?.status === 'success') {
            dispatch(setSharedState({
                authors: fetched?.authors || [],
                sources: fetched?.sources || [],
            }))
            return setIsLoading(false);
        }
    }

    useEffect(() => {
        getArticlesShared(url)
    }, []);

    return {
       isLoading,
    }
}