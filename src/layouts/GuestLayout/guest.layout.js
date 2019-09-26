import React from 'react';
import { Container, Row } from 'reactstrap'
import Header from '../../components/Header/header.component';

export default function GuestLayout({ children }) {
    return <>
            <Header />
        <p>Guest route</p>

        <Container>
            {children}
        </Container>
    </>
}