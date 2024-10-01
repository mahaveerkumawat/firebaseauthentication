import React, { useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { context } from '../MainContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigator = useNavigate()
    const {login, setuser} = useContext(context)
    const formdata = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                login(user)
                setuser(user.toJSON())
                navigator('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });



    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={formdata} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Ragister</h2>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 p-2 border rounded w-full"
                        placeholder="Enter your email"
                        required=""
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="mt-1 p-2 border rounded w-full"
                        placeholder="Enter your password"
                        required=""
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Ragister
                </button>
            </form>
        </div>

    );
}

export default Register;
