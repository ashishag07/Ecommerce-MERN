import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`
`

const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === 'filled' && 'none'};
background-color: 
    ${props=>props.type === 'filled'? 'black': 'transparent'};
color: ${props=>props.type === 'filled' && 'white'};
`

const TopTexts = styled.div``

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`

const Info = styled.div`
flex:3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`

const ProductDetail = styled.div`
flex: 2;
display: flex;
align-items: center;
`

const Image = styled.img`
width: 200px;
`

const Details = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-around;
height: 75%;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductSize = styled.span``

const ProductColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`

const PriceDetail = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ProductAmmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmmount = styled.div`
height: 30px;
width: 30px;
font-size: 24px;
border-radius: 10px;
border: 1px solid lightgrey;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`
const ProductPrice = styled.span`
font-size: 30px;
font-weight: 300;
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex:1;
padding: 20px;
border-radius: 10px;
border: 1px solid lightgray;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total' && '500'};
font-size: ${props=>props.type === 'total' && '24px'};

`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>


                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                            <Details>
                                <ProductName><b>Product: </b>JESSI THUNDER SHOES</ProductName>
                                <ProductId><b>Id: </b>9381378547</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>                            
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmmountContainer>
                                <Remove/>
                                <ProductAmmount>2</ProductAmmount>
                                <Add/>
                            </ProductAmmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'/>
                            <Details>
                                <ProductName><b>Product: </b>HAKURA T-SHIRT</ProductName>
                                <ProductId><b>Id: </b>93813718293</ProductId>
                                <ProductColor color='gray'/>
                                <ProductSize><b>Size: </b>M</ProductSize>                            
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmmountContainer>
                                <Remove/>
                                <ProductAmmount>1</ProductAmmount>
                                <Add/>
                            </ProductAmmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>                        
            </Bottom>
        </Wrapper>

        <Footer/>
    </Container>
  )
}

export default Cart