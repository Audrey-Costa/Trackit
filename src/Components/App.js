import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "../Context/UserContext";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Today from "./Today";
import History from "./History";

export default function App(){
    const [user, setUser] = useState("")
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Register/>}/>
                    <Route path="/habitos" element={<Home/>}/>
                    <Route path="/hoje" element={<Today/>}/>
                    <Route path="/historico" element={<History/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
