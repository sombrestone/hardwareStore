import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Row, Table} from "react-bootstrap";
import {Context} from "../../index";
import {delService, getServices} from "../../http/serviceAPI";
import ServiceModal from "../modal/serviceModal";


const ServiceTable = observer(() => {

    const [serviceVisible, setServiceVisible] = useState(false);

    const {service} = useContext(Context);
    const del=async (id)=>{
        try {
            let data = await delService(id).then(data => getServices()
                .then(data1 => service.setServices(data1)));
        }catch (e) {
            alert(e);
        }
    }

    const services = service.services.map(el => <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.unit}</td>
        <td>{el.price}</td>
        <td>
                <Button variant="outline-primary"
                        size="sm"
                >
                    Редактировать
                </Button>
                <Button variant="outline-danger"
                        size="sm" className={"ml-3"}
                        onClick={()=>del({id:el.id})}
                >
                    Удалить
                </Button>
        </td>
    </tr>);

    return (
        <div>
            <Button variant="outline-success"
                    className={"mb-3"}
                    onClick={()=>setServiceVisible(true)}>
                Добавить
            </Button>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Ед. измерения</th>
                <th>Цена</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {services}
            </tbody>
        </Table>
            <ServiceModal show={serviceVisible} onHide={()=>setServiceVisible(false)}/>
        </div>
    );
});

export default ServiceTable;