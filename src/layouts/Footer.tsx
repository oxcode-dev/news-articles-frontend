const Footer = () => {
    return (
        <>
            <div className="bg-[#041748] text-white px-4 py-8 w-full">
                <div className="container mx-auto">
                    <div className="space-y-4 py-4 md:pb-8">
                        <h3 className="text-2xl md:text-3xl font-semibold">WorldNews</h3>
                        <p className="text-sm md:text-lg font-medium">
                            Deep Dives into Today's News, Stay updated...
                        </p>
                    </div>

                    <div className="py-6 border-t">
                        <p className="text-sm text-gray-200 font-medium">
                            &copy; WorldNews Ltd. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;