import { ArticleProps } from "../types";

type ArticleType = {
    article: ArticleProps
}

const ArticleCard = ({article }: ArticleType) => {
    const no_image = 'https://placehold.co/600x400/000000/FFFFFF/png'
    return (
        <>
            <div>
                <div className="shadow hover:shadow-xl rounded-lg group cursor-pointer">
                    <a href="#" className="cursor-pointer h-32">
                        <img src={article?.image || no_image} className="rounded-t-lg h-56 w-full object-cover" />
                    </a>
                    <div className="p-4 pb-6">
                        <a title={article?.title} href="/blogs/new-post" className="text-xl font-medium group-hover:text-blue-700 text-gray-700 truncate line-clamp-1">
                            {article?.title}
                        </a>
                        <p className="text-gray-400 text-sm line-clamp-3 my-3"> 
                            {article?.content || article?.description}
                        </p>
                        <a href="#" className="bg-blue-600 text-sm text-white px-3 py-2 rounded">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleCard;