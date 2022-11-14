import React from 'react'

const OnSaleItemsList = (props) => {
    
  return (

    <div className='onSaleItems'>
      {
      props.onSaleItems.map((items, idx) => (
        <div key={items.id}>
            {items.name}         
            <img src={items.img}/>
            {items.condition}
            {items.negotiable}
            {items.price}
            {items.seller}
            {items.sold}
            <hr/>
        </div>

        
      ))
    }
    </div>
  )
}

export default OnSaleItemsList
