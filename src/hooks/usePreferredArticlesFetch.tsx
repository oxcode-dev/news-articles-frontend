import { useEffect, useState } from "react"
import { isEmpty, o_O } from "../helper"
import { getWithoutToken } from "../services/APIService"
import { ArticleProps } from "../types"

export const usePreferredArticlesFetch = () => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const url = `${baseUrl}/api/articles/preferred`

    const [articles, setArticles] = useState <ArticleProps[]>([])
    const [meta, setMeta] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const [search, setSearch] = useState('');

    const handleChange = () => {
        getArticles(search ? `${url}?search=${search}`: url)
    }

    const handlePagination = (url: string | null | undefined) => {
        if(url) {
            getArticles(url)
        }
    }

    const getArticles = async(url: string) => {
        setIsLoading(true);

        let [err, data] = await o_O(getWithoutToken(url))

        if(data?.status === 'error' || !isEmpty(data?.errors) || err) {
            return setIsLoading(false);
        }

        let fetchedArticles = data?.data?.data || []
        if(data?.status === 'success') {
            setArticles(fetchedArticles)
            setMeta(data?.data)
            return setIsLoading(false);
        }
    }

    useEffect(() => {
        getArticles(url)
    }, []);

    return {
        getArticles, articles, isLoading, meta, search, setSearch, handleChange, handlePagination,
    }
}