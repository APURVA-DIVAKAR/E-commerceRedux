import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { selectedProduct,fetchProduct,removeSelectedProduct } from '../redux/actions/productsActions'
import { useParams } from 'react-router-dom'



const ProductsDetail = () => {
    const { productId } = useParams();
    let product = useSelector(state=>state.product)
    const{image,title,price,category,description} = product;
    const dispatch=useDispatch();
    // const fetchProductDetails = async (id)=>{
    //     const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //     .catch(err=>console.error(err))
    //     dispatch(selectedProduct(res.data))
    // }
    useEffect(()=>{
        if(productId && productId !=="")
        dispatch(fetchProduct(productId))
        return()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId])
  return (
    
       <div className="ui grid container">
           {Object.keys(product).length===0 ? (
               <div className="ui active centered inline loader"></div>
           ):(
             <div className="ui placeholder segement">
                 <div className="ui two column stackable center aligned grid">
                     <div className="ui vertical divider">AND</div>
                     <div className="middle aligned row">
                         <div className="column rp">
                             <img className="ui fluid image" src={image}/>
                         </div>
                         <div className="column rp">
                         <h1>{title}</h1>
                         <h2>
                             <a className="ui tealtag label" >${price}</a>
                         </h2>
                         <h3 className="ui brown block header">{category}</h3>
                         <p>{description}</p>
                         <div className="ui vertical animated button" tabIndex='0'>
                             <div className="hidden content">
                                 <i className="shop icon"></i>
                             </div>
                             <div className="visible content">ADD TO CART</div>
                         </div>
                     </div>
                 </div>
             </div>
             </div>
           )}     
    </div>
  );
}

export default ProductsDetail