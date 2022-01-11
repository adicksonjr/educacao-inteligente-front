import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./about"
import Login from "./login"
import SchoolList from "./schoolList"
import SchoolRegister from "./schoolRegister"

const Router = () => 
    (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/listagem' element={<SchoolList/>}/>
                <Route exact path='/registro' element={<SchoolRegister/>}/>
                <Route exact path='/sobre' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );

export default Router;