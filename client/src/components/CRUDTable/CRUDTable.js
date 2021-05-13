import React from 'react';
import {Table} from "react-bootstrap";

class CRUDTable extends React.Component {
    render() {
        this.props.store.load();
        let headers = this.props.store.getHeaders();
        let rows = this.props.store.getRows();
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        {headers}
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CRUDTable;



