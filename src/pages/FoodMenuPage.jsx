import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FoodMenu from '../components/menu/PizzaMenu'

const FoodMenuPage = () => {
    const [addPizza, setAddPizza] = useState(0);
    const [listBuy, setListBuy] = useState([]);

    return (
        <Container className='my-4' fluid>
            <FoodMenu listBuy={listBuy} setListBuy={setListBuy} addPizza={addPizza} setAddPizza={setAddPizza} />

            <h2 className='' ><i className="text-dark bi  bi-basket" /> سبد خرید شما: {addPizza}
                <Row className='shadow border p-4 m-2' >
                    {listBuy.map((item) => (
                        <Col md="2" className=' p-1 ' >
                            <span className='fs-5 p-1 bg-warning text-white d-flex justify-content-center my-1 border rounded-2'>
                                {item.name}
                                {item.cost}
                            </span>
                        </Col >
                    ))
                    }
                </Row>
            </h2>
        </Container >
    )
}

export default FoodMenuPage;
