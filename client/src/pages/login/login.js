import React from 'react';
import {Button, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Login = (props) => {

    return (
        <div>
            <Form.Control className={"mt-3"}
                          placeholder={"Введите email"}
                          onChange={e => props.setEmail(e.target.value)}
            />
            <Form.Control className={"mt-3"}
                          placeholder={"Введите пароль"}
                          onChange={e => props.setPassword(e.target.value)}
                          type={"password"}
            />
            <Row className={"d-flex justify-content-between mt-3 pr-3 pl-3"}>
                <div>Нет аккаунта? Пройдите <NavLink to={"/registration"}>Регистрацию</NavLink>.</div>
                <Button onClick={props.click}>Войти</Button>
            </Row>
        </div>
    );
};

export default Login;