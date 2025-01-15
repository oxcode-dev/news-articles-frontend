import { useEffect, useRef, useState } from "react"
import { isEmpty, o_O } from "../helper"
import { getWithoutToken } from "../services/APIService"
import { ArticleProps, FilterProps } from "../types"
import { useOnClickOutside } from "usehooks-ts"

export const useArticleFetch = () => {
    const url = "http://127.0.0.1:8000/api/articles"

    const [articles, setArticles] = useState <ArticleProps[]>([])
    const [meta, setMeta] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const [search, setSearch] = useState('');
    const filterRef = useRef(null)
    const [showFilter, setShowFilter] = useState <Boolean>(false)

    const handleClickOutside = () => setShowFilter(false)
        
    const handleClickInside = () => setShowFilter(true)
    
    useOnClickOutside(filterRef, handleClickOutside)

    const handleChange = () => {
        getArticles(search ? `${url}?search=${search}`: url)
    }

    const handleFilter = ({ date, category, source}: FilterProps) => {
        let filterParams = `date=${date}&category=${category}&source=${source}`
        getArticles(search ? `${url}?search=${search}&${filterParams}`: `${url}?${filterParams}`)
    }

    const handleResetFilter = () => {
        getArticles(search ? `${url}?search=${search}`: url)
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
        getArticles, articles, isLoading, meta, search, setSearch, handleChange,
        filterRef, showFilter, handleClickInside, handleClickOutside, handleResetFilter,
        handleFilter
    }
}