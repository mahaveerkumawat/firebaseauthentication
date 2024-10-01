import React, { createContext, useState } from 'react';
const context = createContext(null)

const MainContext = (props) => {
    const [user, setuser] = useState(null)
    const login = (userdata) => {
        console.log("userdata", userdata)
    }
    const logout = () => {
        setuser(null)

    }
    return (
        <context.Provider value={{ user, login, setuser, logout }}>
            {props.children}
        </context.Provider>
    );
}

export default MainContext;

export { context }