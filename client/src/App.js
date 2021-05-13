import './App.css';
import Header from "./components/header/Header";
import {Route} from 'react-router-dom'
import Administration from "./pages/administration/Administration";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import Auth from "./pages/login/Auth";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import UserSettings from "./pages/userSettings/userSettings";
import Services from "./pages/services/services";
import {getServices} from "./http/serviceAPI";
import Calc from "./pages/calc/calc";

function App() {
    let {user,service} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true);
        }).finally(() => setLoading(false))
        getServices().then(data=>service.setServices(data));
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Route path={'/services'} render={() => <Services/>}/>
                <Route path={'/samples'} render={() => <Administration/>}/>
                {user.isAuth === true ?
                    <div>
                        <Route path={'/administration'} render={() => <Administration/>}/>
                        <Route path={'/home'} render={() => <UserSettings/>}/>
                        <Route path={'/order'} render={() => <Calc/>}/>
                    </div>
                    :
                    <div>
                        <Route path={'/login'} render={() => <Auth/>}/>
                        <Route path={'/registration'} render={() => <Auth/>}/>
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
