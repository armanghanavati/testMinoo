import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Matris = () => {
    const items = [
        { id: 1, name: "آیتم 1", color: "red" },
        { id: 2, name: "آیتم 2", color: "black" },
        { id: 3, name: "آیتم 3", color: "blue" },
        { id: 4, name: "آیتم 4", color: "yellow" },
        { id: 5, name: "آیتم 5", color: "gray" },
        { id: 6, name: "آیتم 6", color: "pink" },
        { id: 7, name: "آیتم 7", color: "green" },
        { id: 8, name: "آیتم 8", color: "brown" },
        { id: 9, name: "آیتم 9", color: "orange" },
        { id: 10, name: "آیتم 10", color: "purple" },
        { id: 11, name: "آیتم 11", color: "lime" },
        { id: 12, name: "آیتم 12", color: "teal" },
    ]

    const [changeRow, setChangeRow] = useState(4)
    const [showNameBox, setShowNameBox] = useState("")
    const handleRowChange = (e) => {
        const newRow = Math.max(1, Math.min(5, parseInt(e.target.value)));
        setChangeRow(newRow);
    };

    return (
        <>
            <Container>
                <Row className='mb-4' >
                    <Col className='d-flex mt-4' md="3" >
                        <Form.Label> شماره ردیف: </Form.Label>
                        <Form.Control type='number' value={changeRow} onChange={(e) => handleRowChange(e)} />
                    </Col>
                </Row>
                <Row>
                    {items.map((item) => {
                        return (
                            <Col md={changeRow} >
                                <div
                                    style={{ cursor: "pointer", backgroundColor: item.color }}
                                    key={item.name}
                                    onClick={() => setShowNameBox(item.name)}
                                    className='item p-3 rounded-4 shadow border m-1 text-center' >
                                    <span className='text-white' > {item.id} </span>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <Form.Label className='m-4' > نام آیتم: </Form.Label>
                <span className='me-4' >
                    {showNameBox}
                </span>

            </Container>
        </>
    )
}

export default Matris