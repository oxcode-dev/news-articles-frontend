const EmptyState = () => {
    return (
        <>
            <div>
                <div className="w-full flex flex-col justify-center py-4 md:py-12 object-contain">
                    <img src="https://barfresh.vercel.app/img/no_data.svg" className="w-auto h-28 sm:h-48 object-contain px-12" />
                    <div className="w-full md:max-w-xl mx-auto my-2 md:my-8 flex flex-col justify-center">
                        <h2 className="sm:my-3 text-center text-lg md:text-2xl">No Data Found!</h2>
                        <div className="text-center pb-5 pt-2 text-gray-500 text-sm">
                            <p>Whoops... Data is not available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmptyState;