import React from 'react'
import './Header.css'
import {Row, Col} from 'react-bootstrap'


function Header() {
    return (
        <Row>
            <Col>
                <div className="root my-5">Todo List</div>
            </Col>
        </Row>

    )
}

export default Header