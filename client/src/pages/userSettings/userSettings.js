import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {Context} from "../../index";
import {check, updateData} from "../../http/userAPI";
import {observer} from "mobx-react-lite";

const UserSettings = observer(() => {
    const {user} = useContext(Context);

    const [lastname, setLastname] = useState(user.user.lastname);
    const [firstname, setFirstname] = useState(user.user.firstname);
    const [patronymic, setPatronymic] = useState(user.user.patronymic);
    const [file, setFile] = useState(null);
    const save = async (lastname,firstname,patronymic,file) => {
        try {
            const formData = new FormData();
            formData.append('newLastname', lastname);
            formData.append('newFirstname', firstname);
            formData.append('newPatronymic', patronymic);
            formData.append('img', file);
            await updateData(formData).then(data => () => user.setUser(data));
        } catch (e) {
            alert(e.response.data.message);
        }
    };
    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 50}}>
            <Card className={"p-5"} style={{width: 600}}>
                <h2 className={'m-auto'}>Настройки профиля</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Group className={"mt-3"}>
                        <Row>
                            <Col xs={6} md={4}>
                                <Form.Label>Аватар профиля</Form.Label>
                                <Image width={150} height={150} style={{border:"5px solid #007bff"}}
                                       src={process.env.REACT_APP_API_URL+user.user.avatarURL}
                                       roundedCircle
                                />
                            </Col>
                            <Col className={'ml-5'}>
                                <Form.Label className={'mt-5'}>Загрузить новый</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={e => setFile(e.target.files[0])}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Фамилия:</Form.Label>
                        <Form.Control
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            placeholder="Введите фамилию"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Имя:</Form.Label>
                        <Form.Control
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                            placeholder="Введите имя"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Отчество:</Form.Label>
                        <Form.Control
                            value={patronymic}
                            onChange={e => setPatronymic(e.target.value)}
                            placeholder="Введите отчество"
                        />
                    </Form.Group>
                    <Button className={"mt-3"}
                            onClick={() => save(lastname,firstname,patronymic,file)}>
                        Сохранить
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default UserSettings;