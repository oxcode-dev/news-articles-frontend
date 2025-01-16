import TitleHeading from "../components/TitleHeading";
import { useShared } from "../hooks/useShared";
import Layout from "../layouts";

const UserSettingsPage = () => {
    const { isLoading } = useShared()
    
    return (
        <>
            <Layout>
                <TitleHeading
                    title="User Settings"
                    heading="Update Your Details and Preference."
                />

                
                <div className="container mx-auto md:px-0 px-4 py-10 md:py-16">
                    <div className="w-full md:max-w-xl flex flex-col space-y-4 pb-12">
                        <div className={`${false ? 'flex' : 'hidden'} text-red-600 text-sm font-medium bg-red-50 shadow-md p-4`}>
                            {/* {error || 'error'} */}
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-medium">First Name</label>
                            <input 
                                type="text"
                                // value={first_name}
                                // onChange={e => setFirstName(e.target.value)}
                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-medium">Last Name</label>
                            <input 
                                type="text"
                                // value={last_name}
                                // onChange={e => setLastName(e.target.value)}
                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-medium">Email</label>
                            <input 
                                type="email"
                                // value={email}
                                // onChange={e => setEmail(e.target.value)}
                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div className="space-y-4 py-2">
                            <button
                                type="submit"
                                // disabled={isLoading}
                                className="inline-flex items-center h-10 hover:bg-blue-600 bg-blue-700 justify-center py-2 px-4 border border-transparent rounded-md text-white tracking-wide"
                            >
                                {/* { isLoading ? 'Loading...': 'Register' } */}
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}

export default UserSettingsPage;