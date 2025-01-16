import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination";
import { LoadingState } from "../components/LoadingState";
import TitleHeading from "../components/TitleHeading";
import { useArticleFetch } from "../hooks/useArticlesFetch";
import Layout from "../layouts";

const ArticlesPage = () => {
    const { articles, isLoading, setSearch, handleChange, handleFilter,
        filterRef, showFilter, handleClickInside, handleResetFilter, meta, handlePagination
    } = useArticleFetch()    

    const [date, setDate] = useState('')
    // const [category, setCategory] = useState('')
    const [source, setSource] = useState('')

    const handleFilterArticles = () => {
        handleFilter({date, source})
    }

    return (
        <>
            <Layout>
                <TitleHeading
                    title="Reporting Beyond the Headlines"
                    heading="Deep Dives into Today's News, Stay updated..."
                />

                <div className="container mx-auto md:px-0 px-4 py-10 md:py-16">
                    <div className="flex justify-center pb-12">
                        <div className="w-full sm:max-w-4xl mx-auto">
                            <div className="relative h-16 w-full">
                                <input 
                                    onChange={(e) => setSearch(e.target.value)}
                                    type="text" required 
                                    placeholder="Search" className="w-full bg-transparent py-1 px-3 pr-12 border border-gray-300 rounded-lg h-full focus:outline-none" 
                                />
                                <button onClick={() => handleChange() } className="absolute top-2 right-3 text-gray-400 bg-blue-500 text-white p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="py-2 flex justify-end">
                                <div ref={filterRef} className="relative inline-block text-left">
                                    <div>
                                        <button onClick={handleClickInside} type="button" className="inline-flex w-full h-12 items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                            Filter
                                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>

                                    { showFilter &&
                                        <div className="absolute right-0 z-10 mt-2 w-64 origin-top-left md:origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                                            <div className="p-2" role="none">
                                                <form className="flex flex-col space-y-2">
                                                    <div>
                                                        <label className="text-sm text-gray-500 font-medium">Date</label>
                                                        <input 
                                                            type="date"
                                                            value={date}
                                                            onChange={e => setDate(e.target.value)}
                                                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                                        />
                                                    </div>
                                                    {/* <div>
                                                        <label className="text-sm text-gray-500 font-medium">Category</label>
                                                        <div className="">
                                                            <input 
                                                                type="text"
                                                                value={category}
                                                                onChange={e => setCategory(e.target.value)}
                                                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                                            />
                                                        </div>
                                                    </div> */}
                                                    <div>
                                                        <label className="text-sm text-gray-500 font-medium">Source</label>
                                                        <div className="">
                                                            <input 
                                                                type="text"
                                                                value={source}
                                                                onChange={e => setSource(e.target.value)}
                                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="py&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2">
                                                        <button 
                                                            onClick={() => handleFilterArticles()} 
                                                            type="button" className="bg-blue-600 rounded text-white block w-full px-4 py-2 text-center text-sm"
                                                        >Filter</button>
                                                    </div>
                                                    
                                                    <div className="py-2">
                                                        <button 
                                                            onClick={() => handleResetFilter()} 
                                                            type="button" className="text-gray-600 border rounded bg-gray-100 block w-full px-4 py-2 text-center text-sm"
                                                        >
                                                            Reset
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    { isLoading ? <LoadingState /> : null }

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-8 gap-y-8 w-full py-8">
                        {
                            articles.map((list, key) => (
                                <ArticleCard article={list} key={key} />
                            ))
                        }
                    </div>

                    { articles && articles.length === 0 && !isLoading ? <EmptyState /> : null }

                    <div className="py-6">
                        <Pagination 
                            meta={meta}
                            handlePagination={handlePagination}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ArticlesPage;