import React,{useState,useContext} from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink, useLocation,useHistory} from "react-router-dom";
import Login from "./login";
import Registration from "./registration";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {login, registration} from "../../http/userAPI";

const Auth = observer(() => {
    const {user}=useContext(Context);
    const location=useLocation();
    let isLogin=location.pathname==="/login";
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push('/home')
        } catch (e) {
            alert(e.response.data.message)
        }
    };

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight-50}}>
            <Card className={"p-5"} style={{width: 600}}>
                <h2 className={'m-auto'}>{(isLogin)?"Авторизация":"Регистрация"}</h2>
            <Form className={"d-flex flex-column"}>
                {(isLogin===true)?
                    <Login click={click} setEmail={setEmail} setPassword={setPassword}/>
                    :
                    <Registration click={click} setEmail={setEmail} setPassword={setPassword}/>
                }
            </Form>
            </Card>
        </Container>
    );
});

export default Auth;