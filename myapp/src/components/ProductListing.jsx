import React, { useEffect } from 'react'
import ProductsComponents from './ProductsComponents'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import {fetchProducts} from'../redux/actions/productsActions'


const ProductListing =  () => {
    const dispatch = useDispatch();
    // const fetchProducts = async()=>{
    //    const res = await axios.get("https://fakestoreapi.com/products")
    //    .catch(err=>console.lof(err))
    //    dispatch(setProducts(res.data))
    // }

    useEffect(()=>{
        // fetchProducts()
        dispatch(fetchProducts())
    },[]);
  return (
    <div className="ui grid container">
        <ProductsComponents/>
    </div>
  )
}

export default ProductListing