
import axios from "axios"
import {useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"


function App() {
 
  let [product, setProduct] = useState([])

 let getdata =()=>{
  axios.get("https://dummyjson.com/products").then((response)=>{
    setProduct(response.data.products);
  })
 }



 useEffect(()=>{
  getdata()
 },[])

  return (
    <>
      <Container>
        <Row>
          {product.map((item)=>(
            <Col lg={4}>
          <div className="one">
            <h2>{item.title}</h2>
          <img className="w-100" src={item.thumbnail} alt="" />
          <p>{item.description}</p>
          <h6>discountPercentage: {item.discountPercentage}</h6>
          <h6>stock: {item.stock}</h6>
          <h6>rating: {item.rating}</h6>
          <h6>category: {item.category}</h6>
          <h6>brand: {item.brand}</h6>
          <h3>${item.price}</h3>
          
          </div>
           </Col>
        ))}
         
        </Row>
      </Container>
       
      
    </>
  )
}

export default App
