import EmptyState from "../components/EmptyState";
import { LoadingState } from "../components/LoadingState";
import { isEmpty } from "../helper";
import { useArticleFetch } from "../hooks/useArticleFetch";
import Layout from "../layouts";

const ArticlePage = () => {
    const { article, isLoading} = useArticleFetch()
    return (
        <>
            <Layout>
                <div className="container mx-auto px-4 mt-20">
                    { isLoading ? <LoadingState /> : null }

                    { !isEmpty(article) &&
                        <div className="container mx-auto px-4 mt-20">
                            <div className="w-full md:max-w-3xl mx-auto md:px-0 px-4 py-10 md:py-16">
                                <article className="w-full space-y-4">
                                    <time dateTime="2020-03-16" className="block text-sm/6 text-gray-600">Mar 16, 2020</time>
                                    <img src={article?.image} alt="" className="flex-none bg-gray-50" />

                                    <h2 id="featured-post" className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                        {article?.title}
                                    </h2>
                                    <p className="mt-4 text-lg/8 text-gray-600">
                                        {article?.content}
                                    </p>
                                    <p className="mt-4 text-lg/8 text-gray-600">
                                        {article?.description}
                                    </p>
                                    <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                                        <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                                            <dl className="space-y-2 flex flex-col">
                                                <div className="inline-flex items-center space-x-2">
                                                    <dt className="font-light text-gray-500">Author:</dt>
                                                    <dd className="font-medium">{article?.author}</dd>
                                                </div>
                                                <div className="inline-flex items-center space-x-2">
                                                    <dt className="font-light text-gray-500">Source:</dt>
                                                    <dd className="font-medium">{article?.source}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    }

                    { isEmpty(article) && !isLoading ? <EmptyState /> : null }
                </div>
            </Layout>
        </>
    )
}

export default ArticlePage;