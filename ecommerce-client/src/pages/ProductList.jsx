import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'


const Container = styled.div`

`

const Title = styled.h1`
margin: 20px;
`
const FilterConatainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`
const Option = styled.option``



function ProductList() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterConatainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>

                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>                
                </Select>

                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>                
                </Select>
            </Filter> 
            
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>

                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>                
                </Select>
            </Filter>
        
        </FilterConatainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList