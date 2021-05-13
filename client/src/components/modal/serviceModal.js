import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {addService, getServices, getUnits} from "../../http/serviceAPI";
import {observer} from "mobx-react-lite";

const ServiceModal = observer(({show,onHide}) => {
    const {service} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        getUnits().then(data=>service.setUnits(data));
    }, [])

    const add=async()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('unitId', service.selectedUnit.id);
        formData.append('price', `${price}`);
        addService(formData).then(data=>getServices().then(data=>{service.setServices(data); onHide()}));
    }

    return (
        <Modal show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавление услуги
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Наименование</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={"Введите наименование"}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Единица измерения</Form.Label>
                        <Dropdown>
                            <Dropdown.Toggle>{service.selectedUnit.name||"Выберите ед. изм."}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {service.units.map(el=>
                                    <Dropdown.Item
                                        onClick={()=>service.setSelectedUnit(el)}
                                        key={el.id}
                                    >
                                        {el.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Цена</Form.Label>
                        <Form.Control
                            value={price}
                            onChange={e=>setPrice(Number(e.target.value))}
                            placeholder={"Введите цену"}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={()=>add()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ServiceModal;