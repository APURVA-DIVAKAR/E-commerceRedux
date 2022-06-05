import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
const ProductsComponents = () => {
    const products = useSelector(state=>state.allProducts.productsReducer )
    console.log(products)
    const {id,title} = products[0]
  return (
    <div className='four wide column' >
      <div className='ui link cards'>
          <div className='card0'>
            <div className='image'></div>
            <div className='content'>
                <div className='header'>{title}</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductsComponents