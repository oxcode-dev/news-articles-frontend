import ArticleCard from "../components/ArticleCard";
import EmptyState from "../components/EmptyState";
import { LoadingState } from "../components/LoadingState";
import Pagination from "../components/Pagination";
import TitleHeading from "../components/TitleHeading";
import { usePreferredArticlesFetch } from "../hooks/usePreferredArticlesFetch";
import Layout from "../layouts";

const PreferredArticlesPage = () => {
    const { articles, isLoading, setSearch, handleChange, meta, handlePagination } 
    = usePreferredArticlesFetch()    

    return (
        <>
            <Layout>
                <TitleHeading
                    title="Personalized News Feed:"
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
                    </div>

                    { isLoading ? <LoadingState /> : null }

                    <div className="flex flex-wrap md:flex-nowrap w-full py-8">
                        {
                            articles.map((list, key) => (
                                <div key={key} className="w-full sm:w-1/2 md:w-1/3 px-4 py-4">
                                    <ArticleCard article={list} />
                                </div>
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

export default PreferredArticlesPage;