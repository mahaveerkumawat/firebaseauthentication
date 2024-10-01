import React from 'react';

const Home = () => {
    return (
        <div>
            <>
            
                <main className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg text-center mb-8">
                        Explore our features and services. Join us today!
                    </p>
                    <a
                        href="#"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Get Started
                    </a>
                </main>
                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>© 2024 Your Company. All rights reserved.</p>
                </footer>
            </>

        </div>
    );
}

export default Home;
