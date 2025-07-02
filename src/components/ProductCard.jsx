import React from 'react'
import '../components/ProductCard.css' 
import '../App.css'

const ProductCard = ({product}) => {
  return (
    <div className='card product-card shadow-sm'>
      <img src= {product.image} alt= {product.title} className='card-img-top mx-auto product-card-img'/>
      <div className='card-body d-flex flex-column'>
        <h5 className='card-title text-center product-card-title'>
          {product.title}
        </h5>
        <p className='text-center card-text text-success product-card-price'>
          ₹{product.price.toFixed(2)}
        </p>
        <p className='  text-muted card-text product-card-description'>
          {product.description}
        </p>
        <button className="btn btn-primary mt-auto">View Details</button>
      </div>
    </div>
  )
}

export default ProductCard