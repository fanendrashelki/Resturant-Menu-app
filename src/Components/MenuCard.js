import React, { useState } from 'react'
import { useEffect } from 'react'

const MenuCard = ({ menuData }) => {
  
    const [Order, setOrder] = useState([])
   
    const handleorder=(order)=>{
        let orderData = JSON.parse(localStorage.getItem('order') || '[]')
        if (Order.includes(order.id)) {
            orderData = orderData.filter((O) => O.id != order.id)
          } else {
            orderData.push(order)
          }
          localStorage.setItem('order', JSON.stringify(orderData))
          console.log(orderData);
          handleOrderState() 
          
    }

    const handleOrderState = () => {
        console.log('i am called');
        let orderData = JSON.parse(localStorage.getItem('order') || '[]')
        let temp = orderData.map((o) => o.id)
        setOrder([...temp])
      }
    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((curElem) => {
                        const { id, name, category, image, description } = curElem;
                        return (
                            <>
                                <div className='card-container' key={id}>
                                    <div className='card '>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{id}</span>
                                            <span className='card-author subtle'>{category}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <span className='card-description subtle'>
                                                {description}
                                            </span>
                                            <div className='card-read'>Read</div>
                                        </div>
                                        <img src={image} alt='image' className='card-media' />
                                        <span className='card-tag subtle ' onClick={()=>handleorder(curElem)}>{ Order.includes(curElem.id) ? 'Order Remove' : 'Order Now'}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard