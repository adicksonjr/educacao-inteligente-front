import React from "react"
import {Routes, Route} from "react-router-dom"
import About from "./about"
import Login from "./login"
import SchoolList from "./schoolList"
import SchoolRegister from "./schoolRegister"

const Router = () => 
    (
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/listagem' element={<SchoolList/>}/>
            <Route exact path='/registro' element={<SchoolRegister/>}/>
            <Route exact path='/sobre' element={<About/>}/>
        </Routes>
    );

export default Router;