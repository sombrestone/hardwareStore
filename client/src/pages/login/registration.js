import React from 'react';
import {Button, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Registration = (props) => {
    return (
        <div>
            <Form.Control className={"mt-3"} placeholder={"Введите email"}
                          onChange={e => props.setEmail(e.target.value)}/>
            <Form.Control className={"mt-3"} placeholder={"Введите пароль"} type={"password"}
                          onChange={e => props.setPassword(e.target.value)}/>
            <Form.Control className={"mt-3"} placeholder={"Повторите пароль"} type={"password"}/>
            <Row className={"d-flex justify-content-between mt-3 pr-3 pl-3"}>
                <div>Есть аккаунт? <NavLink to={"/login"}>Авторизуйтесь</NavLink>.</div>
                <Button onClick={props.click}>Регистрация</Button>
            </Row>
        </div>
    )
}


export default Registration;