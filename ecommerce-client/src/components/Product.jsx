import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Info = styled.div`
display: flex;
position: absolute;
top: 0;left: 0;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.2);
opacity: 0;
transition: all 0.5s ease;
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
background-color: #f5fbfd;

&:hover ${Info}{
    opacity: 1;

}
`

const Circle = styled.div`
width: 300px;
height: 300px;
border-radius: 50%;
position: absolute;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`

const Image = styled.img`
height: 80%;
`



const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 40px;
width: 40px;
border-radius: 50%;
background-color: white;
color: gray;
margin: 10px;
transition: all .5s ease;
cursor: pointer;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

function Product({item}) {
  return (
    <Container>
        <Circle>
            <Image src={item.img} />
            <Info>
                <Icon><ShoppingCartOutlinedIcon/></Icon>
                <Icon><SearchOutlinedIcon/></Icon>
                <Icon><FavoriteBorderOutlinedIcon/></Icon>
            </Info>
            
        </Circle>
        
    </Container>
  )
}

export default Product