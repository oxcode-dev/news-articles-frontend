import { useSelector } from "react-redux";
import TitleHeading from "../components/TitleHeading";
import { useShared } from "../hooks/useShared";
import Layout from "../layouts";
import useUserDetail from "../hooks/auth/useUserDetail";
// import MultiSelectDropdown from "../components/MultiSelectDropdown";

const UserSettingsPage = () => {
    const { authors, sources } = useShared()
    const {
        email, setEmail, error, handleUpdateUserInfo, setLastName,
        isLoading, first_name, setFirstName, last_name, authors: authorsInput,
        setAuthors, setSources, sources: sourcesInput, isSuccess
    } = useUserDetail()

    // @ts-ignore
    const users = useSelector(state => !!state.auth.users)
    
    return (
        <>
            <Layout>
                <TitleHeading
                    title="User Settings"
                    heading="Update Your Details and Preference."
                />
                
                <form onSubmit={e => handleUpdateUserInfo(e)} className="container mx-auto md:px-0 px-4 py-10 md:py-16">
                    <div className="w-full md:max-w-xl flex flex-col space-y-4 pb-12">
                        <div className={`${isSuccess ? 'flex' : 'hidden'} text-green-600 text-sm font-medium bg-green-50 shadow-md p-4`}>
                            Success.
                        </div>
                        <div className={`${error ? 'flex' : 'hidden'} text-red-600 text-sm font-medium bg-red-50 shadow-md p-4`}>
                            {error || 'error'}
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-medium">First Name</label>
                            <input 
                                type="text"
                                value={first_name}
                                onChange={e => setFirstName(e.target.value)}
                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-medium">Last Name</label>
                            <input 
                                type="text"
                                value={last_name}
                                onChange={e => setLastName(e.target.value)}
                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-medium">Email</label>
                            <input 
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required 
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-medium">Authors</label>
                            <select 
                                multiple
                                onChange={(e: React.ChangeEvent<{ value: string }>) => setAuthors([...authorsInput, e.target.value as string])}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            >
                                {authors.map((list: string, key: number) => (
                                    <option className="h-5" key={key}>{list}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-medium">Sources</label>
                            <select 
                                multiple
                                onChange={(e: React.ChangeEvent<{ value: string }>) => setSources([...sourcesInput, e.target.value as string])}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            >
                                {sources.map((list: string, key: number) => (
                                    <option className="h-5" key={key}>{list}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-4 py-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="inline-flex items-center h-10 hover:bg-blue-600 bg-blue-700 justify-center py-2 px-4 border border-transparent rounded-md text-white tracking-wide"
                            >
                                { isLoading ? 'Loading...': 'Save' }
                            </button>
                        </div>

                    </div>
                </form>
                
            </Layout>
        </>
    )
}

export default UserSettingsPage;