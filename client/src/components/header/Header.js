import React, {useContext} from 'react';
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";

const Header = observer((props) => {
    const {user} = useContext(Context);
    const history = useHistory();
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', "");
    };
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">AppName</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={'/services'}>Услуги</Nav.Link>
                <Nav.Link href={'/samples'}>Примеры работ</Nav.Link>
                {(user.isAuth === true) ?<Nav.Link href={'/order'}>Заказ</Nav.Link>:""}
                {(user.isAuth === true) ?
                    <NavDropdown title="Администрирование" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/administration/services">Услуги</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Заказы</NavDropdown.Item>
                    </NavDropdown>: ""}
            </Nav>
            <Nav>
                {(user.isAuth === true) ?
                    <div>
                        <Button variant={"outline-light"} className={"ml-2"} onClick={() => history.push('/home')}>Профиль</Button>
                        <Button variant={"outline-light"} className={"ml-2"} onClick={() => logOut()}>Выход</Button>
                    </div>
                    : <div>
                        <Button variant={"outline-light"} className={"ml-2"}
                                onClick={() => history.push('/login')}>Войти</Button>
                        <Button variant={"outline-light"} className={"ml-2"}
                                onClick={() => history.push('/registration')}>Регистрация</Button>
                    </div>
                }
            </Nav>
        </Navbar>
    );
});

export default Header;