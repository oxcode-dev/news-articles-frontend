import useAuthLogin from "../hooks/auth/useAuthLogin";
import { Link } from 'react-router'

const Header = () => {
    const { handleLogout } = useAuthLogin()

    const logout = () => {
        handleLogout()
    }

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
                <div className="mx-auto flex w-full container items-center justify-between px-4">
                    <div className="flex flex-1 items-center">
                        <Link to='/'>
                            <span className="text-xl md:text-2xl font-semibold">WorldNews</span>
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-x-8">
                        <Link to='/preferred-articles' className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">My Preference News Feed</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                        </Link>
                        <Link to="/settings" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your profile</span>
                            <img className="size-8 rounded-full bg-gray-800" src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" alt="" />
                        </Link>
                        <button onClick={() => logout()} type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Logout</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out vue-feather__content"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;