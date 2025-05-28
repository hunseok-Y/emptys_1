import React from 'react';
import {Container, Row} from "react-bootstrap";

const ContainerBox = ({children}) => {
    return (
        <Container className="mt-5">
            <Row>
                {children}
            </Row>
        </Container>
    );
};

export default ContainerBox;