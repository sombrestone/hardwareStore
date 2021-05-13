import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Door from "./door/door";

const Calc = () => {
    return (
        <Container className="mt-3">
            <Card>
                <Card.Header>
                    <Card.Title><h2>Калькулятор рассчета сметной стоймости</h2></Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={5} style={{borderRight: '1px solid rgba(0,0,0,.125)'}}>
                            <Row className={"m-3"}><h3>Размеры комнаты</h3></Row>
                            <Form>
                                <Form.Group as={Row} className={'m-3'}>
                                    <Form.Label column sm={5}>Ширина:</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control size="sm" type="text" placeholder={"Введите ширину комнаты"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className={'m-3'}>
                                    <Form.Label column sm={5}>Длинна:</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control size="sm" type="text" placeholder={"Введите длинну комнаты"}/>
                                    </Col>
                                </Form.Group >
                                <Form.Group as={Row} className={'m-3'}>
                                    <Form.Label column sm={5}>Высота:</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control size="sm" type="text" placeholder={"Введите высоту комнаты"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className={'m-3'}>
                                    <Form.Label column sm={5}>Площадь пола:</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control size="sm" readOnly type="text"/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className={'m-3'}>
                                    <Form.Label column sm={5}>Площадь стен:</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control size="sm" readOnly type="text"/>
                                    </Col>
                                </Form.Group>
                            </Form>
                            <Row className={"m-3"}>
                                <h4>Двери и окна</h4>
                                <Button variant="secondary" size="sm" className={'ml-2'}>Добавить</Button>
                            </Row>
                            <div className={"m-3"} style={{display: 'flex', width:'100%',flexWrap: 'wrap'}}>
                                <Door weight={120} height={200}/>
                                <Door weight={100} height={190}/>
                                <Door weight={100} height={190}/>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <Row className={"m-3"}><h3>Услуги</h3></Row>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Calc;