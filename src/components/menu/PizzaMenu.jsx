import React, { useState } from "react";
import { Table, Form, Row, Col, Carousel, Button } from "react-bootstrap";
import { pizza } from "../data/listItem";

const PizzaMenu = ({ listBuy, setListBuy, addPizza, setAddPizza }) => {
  const [currentItem, setCurrentItem] = useState(pizza[0]);

  const handleSlideChange = (index) => {
    setCurrentItem(pizza[index]);
  };

  const handleBuyer = () => {
    let test = []
    test.push(...listBuy, currentItem)
    setListBuy(test);
    setAddPizza(addPizza + 1);
  }

  const cancelPizza = () => {
    if (listBuy.length > 0) {
      const updatedListBuy = [...listBuy];
      updatedListBuy.pop();
      setListBuy(updatedListBuy);
      setAddPizza(addPizza - 1);
    }
  }

  return (
    <>
      <Row className='d-flex justify-content-center ' >
        <Col md="4" >
          <Carousel interval={400000} className="shadow" onSlid={handleSlideChange} >
            {pizza.map((item) => {
              return (
                <Carousel.Item key={item.id}>
                  <img
                    width="200px"
                    height="400px"
                    className="d-block w-100"
                    src={item.image}
                  />
                </Carousel.Item>
              )
            }
            )}
          </Carousel>
          <div className="mt-4 justify-content-center" >
            <h3 className="d-flex justify-content-center" >{currentItem.name}</h3>
            <div className="d-flex mb-2 justify-content-between" >
              <span className="fw-bold" >{currentItem.cost}تومان</span>
              <span className="text-danger fw-bold" >{currentItem.discount}</span>
            </div>
            <p>{currentItem.des}</p>
          </div>
          <Button variant="warning" className="me-4" onClick={cancelPizza} > - </Button>
          <Button variant="primary" className="me-4" onClick={handleBuyer} > + </Button>
        </Col >
      </Row >
    </>
  );
};

export default PizzaMenu;
