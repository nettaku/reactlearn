import React, { forwardRef, useState, useImperativeHandle } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const Counter = forwardRef(({ totalCount, setTotalCount, onIncrement, onDecrement}, ref) => {

    const [count, setCount] = useState(0);
    const [display, setDisplay] =useState('block')

    const handleHide = () => {
        setCount(0);
        setTotalCount(totalCount - count);
        setDisplay("none");
    }

    useImperativeHandle(ref, () => ({
            resetCount() {
                setCount(0);
            }
        }));

    

    return (
        <div style={{ display: `${display}`}}>
           <Badge bg={count !==0 ? 'primary' : 'warning'} text={count !==0 ? "" : "dark"}>{count !== 0 ? count : 'zero'}</Badge>
           <Button variant="secondary" className="m-2"
            onClick={() => onIncrement(setCount, count)}>+</Button>
           <Button variant="secondary" className="m-2"
            onClick={() => onDecrement(setCount, count)}>-</Button>
           <Button variant="danger" className="m-2"
            onClick={handleHide}>DELETE</Button>
        </div>
    )
})

export default Counter
