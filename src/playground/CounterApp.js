import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css';

function CounterApp() {

    const [totalCount, setTotalCount] = useState(0);

    const handleIncrement = (func, arg) => {
        func(arg + 1);
        setTotalCount(totalCount + 1)
    }

    const handleDecrement = (func, arg) => {
        func(arg === 0 ? 0 : arg - 1);
        setTotalCount(arg === 0 ? totalCount : totalCount - 1)
    }    

    const counterRef1 = useRef(null);
    const counterRef2 = useRef(null);
    const counterRef3 = useRef(null);
    const counterRef4 = useRef(null);


    const handleReset = () => {
        counterRef1.current.resetCount();
        counterRef2.current.resetCount();
        counterRef3.current.resetCount();
        counterRef4.current.resetCount();
        setTotalCount(0)
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
            <Counter ref={counterRef1}
            totalCount={totalCount} 
            setTotalCount={setTotalCount}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
        <Counter
            ref={counterRef2}
            totalCount={totalCount} 
            setTotalCount={setTotalCount}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
        <Counter
            ref={counterRef3}
            totalCount={totalCount} 
            setTotalCount={setTotalCount}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
        <Counter
            ref={counterRef4}
            totalCount={totalCount} 
            setTotalCount={setTotalCount}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
        </Container>        
        </>
    )
}

export default CounterApp
