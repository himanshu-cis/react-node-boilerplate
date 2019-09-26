import React from 'react'
import Header from '../../components/Header'
import { Container } from 'reactstrap'

export default function DefaultLayout({ children }) {

    return <>
        <Header />
        <p>Default route</p>
        <Container>
            {children}
        </Container>
    </>

}