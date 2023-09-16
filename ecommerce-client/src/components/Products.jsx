import { popularProducts } from "../Data/dummyData"
import styled from 'styled-components'
import Product from "./Product"

const Container = styled.div`
display: flex;
margin: 5px;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

function Products() {
  return (
    <Container>
        {popularProducts.map(item =>
            <Product key={item.id} item = {item}/>            
            )}
    </Container>
  )
}

export default Products