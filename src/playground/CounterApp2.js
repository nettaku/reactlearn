import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Counter2 from './Counter2'
import 'bootstrap/dist/css/bootstrap.min.css';

function CounterApp2() {  

    const [totalCount, setTotalCount] = useState(0);
    const handleReset = () => {

    }

    return (
        <>
        <Navbar bg="light" className="m-3 mt-0 mb-0">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Badge pill bg="secondary">{totalCount}</Badge>
        </Navbar>
        <Container>
            <Button variant="primary" className="m-2" onClick={
                handleReset
            }>Reset</Button>
            <Counter2 />
        </Container>        
        </>
    )
}

export default CounterApp2
