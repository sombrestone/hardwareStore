import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesStore from "./store/servicesStore";
import UserStore from "./store/userStore";

export const Context = createContext(null);

ReactDOM.render(
    <BrowserRouter>
        <Context.Provider value={{
            service: new ServicesStore(),
            user: new UserStore()
        }}>
            <App/>
        </Context.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

