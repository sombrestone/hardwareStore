import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Container} from "react-bootstrap";
import ServiceTable from "../../components/CRUDTable/serviceTable";
import {getServices} from "../../http/serviceAPI";

const Administration = observer(() => {
    const {service}=useContext(Context);
    useEffect(()=>{
        getServices().then(data=>{console.log(data); service.setServices(data)});
    });
    return (
        <Container className="mt-5">
            <Card className="mb-5">
                <Card.Body>
                    <ServiceTable/>
                </Card.Body>
            </Card>
        </Container>
    );
});

export default Administration;