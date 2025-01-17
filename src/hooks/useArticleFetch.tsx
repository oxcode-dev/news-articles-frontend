import { useEffect, useState } from "react"
import { isEmpty, o_O } from "../helper"
import { getWithoutToken } from "../services/APIService"
import { ArticleProps } from "../types"
import { useParams } from 'react-router-dom';

export const useArticleFetch = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    let { id } = useParams();
    const url = `${baseUrl}/api/articles/${id}`

    const [article, setArticle] = useState <ArticleProps>()
    const [isLoading, setIsLoading] = useState(false)

    const getArticle = async(url: string) => {
        setIsLoading(true);

        let [err, data] = await o_O(getWithoutToken(url))

        if(data?.status === 'error' || !isEmpty(data?.errors) || err) {
            return setIsLoading(false);
        }

        let fetchedArticle = data?.data || []
        if(data?.status === 'success') {
            setArticle(fetchedArticle)
            return setIsLoading(false);
        }
    }

    useEffect(() => {
        getArticle(url)
    }, []);

    return {
        getArticle, article, isLoading,
    }
}