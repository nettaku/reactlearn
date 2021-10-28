import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

function Counter2() {
    const [count, setCount] = useState(0);
    const [display, setDisplay] =useState('block')

    const handleHide = () => {
        // setCount(0);
        // setTotalCount(totalCount - count);
        setDisplay("none");
    }

    return (
        <div style={{ display: `${display}`}}>
           <Badge bg={count !==0 ? 'primary' : 'warning'} text={count !==0 ? "" : "dark"}>{count !== 0 ? count : 'zero'}</Badge>
           <Button variant="secondary" className="m-2"
            >+</Button>
           <Button variant="secondary" className="m-2"
            >-</Button>
           <Button variant="danger" className="m-2"
            onClick={handleHide}>DELETE</Button>
        </div>
    )
}

export default Counter2
