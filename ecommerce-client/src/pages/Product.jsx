import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@mui/icons-material'


const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImageContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
`

const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
margin: 30px 0;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Ammount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid lightgrey;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 500;
cursor: pointer;

&:hover{
    background-color: #f8f4f4;
}
`


function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" >
                </Image>
            </ImageContainer>

            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'/> 
                        <FilterColor color='darkblue'/> 
                        <FilterColor color='grey'/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmmountContainer>
                        <Remove/>
                        <Ammount>1</Ammount>
                        <Add/>
                    </AmmountContainer>
                    <Button>ADD TO CART</Button>                
                </AddContainer>
            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product