type TitleHeadingType = {
    title: string,
    heading?: string | null
}
const TitleHeading = ({ title, heading } : TitleHeadingType) => {
    return (
        <>
            <div className="mt-20 container mx-auto py-8 space-y-4 px-3">
                <h2 className="text-xl md:text-3xl font-medium text-gray-800">
                    {title}
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-500">
                    {heading}
                </p>
            </div>
        </>
    )
}

export default TitleHeading;