import { useState } from "react";
import Register from "../components/auth/Register";
import SignIn from "../components/auth/SignIn";

const AuthPage = () => {
    let [isLogin, setIsLogin] = useState <Boolean>(true)
    const loginLinkSlogan = 'Already have an account.'
    const registerLinkSlogan = `Don't have an account.`
    const loginLinkText = 'Login'
    const registerLinkText = `Join now`

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center min-h-screen bg-blue-50 px-6">
                <div className="shadow w-full md:max-w-md rounded-md p-6 mx-auto bg-white space-y-4">
                    {
                        isLogin 
                        ? ( <SignIn /> )
                        : ( <Register />)
                    }
                </div>
                <div className="py-4 text-gray-600 space-x-1">
                    <span>
                        { isLogin ? registerLinkSlogan : loginLinkSlogan}
                    </span>
                    <a onClick={() => setIsLogin(!isLogin)} href="#" className="text-blue-600 underline">
                        { isLogin ? registerLinkText : loginLinkText}
                    </a>
                </div>
            </div>
        </>
    )
}

export default AuthPage;