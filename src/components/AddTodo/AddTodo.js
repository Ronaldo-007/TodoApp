import React, { useState } from 'react'
import uuid from 'uuid'
import './AddTodo.css'
import { Row, Col, Button, FormControl } from 'react-bootstrap'

function AddTodo({ todo, setTodo }) {
    const [value, setValue] = useState("")
    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid.v4(),
                title: value,
                status: true
            }]
        )

        setValue("")
    }
    return (
        <Row>
            <Col className="addTodoFrom mt-5">
                <FormControl placeholder="Enter the task" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={saveTodo} className="btn">Storage</Button>
            </Col>
        </Row>
    )
}

export default AddTodo