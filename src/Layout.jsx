import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { context } from './MainContext';

const Layout = () => {
    const { user, setuser, logout } = useContext(context)
    return (
        <div>
            <header className="flex items-center justify-between  p-4 bg-gray-800 text-white">
                <div className="flex items-center justify-between w-[1000px] mx-auto">
                    <div className="flex  items-center">
                        <span className="text-xl font-bold">Your Logo</span>
                    </div>
                    <nav className="space-x-4">
                        <Link to={'/'} className="hover:text-gray-400">
                            Home
                        </Link>
                        {
                            user != null ? <>
                                <Link to={''} className="hover:text-gray-400">
                                    hello user
                                </Link>
                                <Link onClick={logout} to={''} className="hover:text-gray-400">
                                    Log out
                                </Link>
                            </>
                                :
                                <>
                                    <Link to={'/login'} className="hover:text-gray-400">
                                        Log In
                                    </Link>
                                    <Link to={'/register'} className="hover:text-gray-400">
                                        Register
                                    </Link></>
                        }

                    </nav>
                </div>
            </header>

            <Outlet />
        </div>
    );
}

export default Layout;
