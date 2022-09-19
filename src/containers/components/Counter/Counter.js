import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from '../../redux/store/contactSlice';

import {
    change,
    selectInputContact
} from '../../redux/store/inputContactSlice';

import { Button, Form, } from 'react-bootstrap';

function Counter() {

    const count = useSelector(selectCount);
    const inputContactValue = useSelector(selectInputContact);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </Button>
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </Button>
                <Button
                    onClick={() => dispatch(incrementByAmount(Number(inputContactValue)))}>
                    Increment amount
                </Button>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={inputContactValue}
                                onChange={(e) => dispatch(change(e.target.value))} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Counter