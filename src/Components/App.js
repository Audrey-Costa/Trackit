import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Context/UserContext";
import TasksContext from "../Context/TasksContext";
import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";

export default function App(){
    const [user, setUser] = useState("")
    const [arrayTasks, setArrayTasks] = useState([])
    return (
        <UserContext.Provider value={{user, setUser}}>
            <TasksContext.Provider value={{arrayTasks, setArrayTasks}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<Register/>}/>
                        <Route path="/habitos" element={<Habits/>}/>
                        <Route path="/hoje" element={<Today/>}/>
                        <Route path="/historico" element={<History/>}/>
                    </Routes>
                </BrowserRouter>
            </TasksContext.Provider>
        </UserContext.Provider>
    )
}
