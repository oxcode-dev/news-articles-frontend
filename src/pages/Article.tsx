import Layout from "../layouts";

const ArticlePage = () => {
    return (
        <>
            <Layout>
                <div className="container mx-auto px-4 mt-20    ">
                    <div className="w-full md:max-w-3xl mx-auto md:px-0 px-4 py-10 md:py-16">
                        <article className="w-full">
                            <time dateTime="2020-03-16" className="block text-sm/6 text-gray-600">Mar 16, 2020</time>
                            <h2 id="featured-post" className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">We’re incredibly proud to announce we have secured $75m in Series B</h2>
                            <p className="mt-4 text-lg/8 text-gray-600">Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.</p>
                            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                                <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                                    <a href="#" className="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900">
                                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-6 flex-none rounded-full bg-gray-50" />
                                        Michael Foster
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ArticlePage;