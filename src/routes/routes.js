import React from "react"
import {Routes, Route} from "react-router-dom"
import About from "../about"
import Login from "../login"
import SchoolList from "../schoolList"
import SchoolRegister from "../schoolRegister"
import PrivateRoute from "./privateRoutes"

const Router = () => 
    (
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/listagem' element={<PrivateRoute><SchoolList/></PrivateRoute>}/>
            <Route exact path='/registro' element={<PrivateRoute><SchoolRegister/></PrivateRoute>}/>
            <Route exact path='/sobre' element={<PrivateRoute><About/></PrivateRoute>}/>
        </Routes>
    );

export default Router;