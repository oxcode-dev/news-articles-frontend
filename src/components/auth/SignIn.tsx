import useAuthLogin from "../../hooks/auth/useAuthLogin"

const SignIn = () => {
    const {
        email, setEmail, password, error, setPassword, handleLogin, isLoading
    } = useAuthLogin()

    return (
        <>
            <form onSubmit={e => handleLogin(e)}  className="p-4 md:p-6 space-y-6">
                <div className="space-y-2">
                    <h3 className="text-xl md:text-3xl font-semibold">
                        Sign In
                    </h3>
                    <p className="text-sm font-light text-gray-500">
                        Login to stay updated  to the world around you.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className={`${error ? 'flex' : 'hidden'} text-red-600 text-sm font-medium bg-red-50 shadow-md p-4`}>
                        {error || 'error'}
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 font-medium">Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 font-medium">Password</label>
                        <input
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center h-10 hover:bg-blue-600 bg-blue-700 justify-center py-2 px-4 border border-transparent rounded-md text-white tracking-wide"
                    >
                        { isLoading ? 'Loading...': 'Sign In' }
                    </button>
                </div>
            </form>
        </>
    )
}

export default SignIn