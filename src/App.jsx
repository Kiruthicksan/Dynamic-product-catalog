import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import axios from 'axios'
   


function App() {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {
    const fetchProducts = async () =>{
      try{
      setLoading(true)
      setError(null)
      const response = await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data)
      
      
    } catch(err){
        console.error("Error fetching products",err)
        setError("Failed to load products. Please try again later")
    } finally{
       setLoading(false)
    }
    }
    
     fetchProducts()
  }, [])

  if (loading){
    return(
      <div className='loading-container'>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
         <p className="loading-text">Loading products...</p>
      </div>
    )
  }

  if (error){
    return(
      <div className='container my-5'>
        <div className='alert alert-danger text-center error-alert' role='alert'>
          <h4 className='alert-heading'>Error!</h4>
          <p>{error}</p>
          <hr />
          <p className='mb-0'>Please check your internet connection or try refersing the page</p>
        </div>
      </div>
    )
  }



  return (
    <div className='container my-5'>
      <h1 className='text-center mb-5 app-title'>
        Dynamic Product Catalog
      </h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center product-grid'>
        {products.map((product) => (
          <div key={product.id} className='col d-flex'>
            <ProductCard product = {product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
