import React from 'react'

const PizzaTitle = ({ item }) => {
    return (
        <div className='bg-danger' >
            <h3>{item.name}</h3>
            <p>{item.cost}</p>
            <p>{item.des}</p>
        </div>
    )
}

export default PizzaTitle