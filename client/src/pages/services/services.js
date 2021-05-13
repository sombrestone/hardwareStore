import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getServices} from "../../http/serviceAPI";
import {Card, Container, Table} from "react-bootstrap";

const Services = observer(() => {
    const {service}=useContext(Context);
    /*useEffect(()=>{
        getServices().then(data=>service.setServices(data));
    },[]);*/
    const services = service.services.map(el => <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.unit}</td>
            <td>{el.price}</td>
    </tr>);
    return (
        <Container className="mt-5">
            <Card className="mb-5">
                <Card.Body>
                    <Table striped bordered hover size={"sm"}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Наименование</th>
                            <th>Ед. измерения</th>
                            <th>Цена</th>
                        </tr>
                        </thead>
                        <tbody>
                        {services}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
});

export default Services;