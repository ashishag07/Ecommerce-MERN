import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
import {sliderItems} from "../Data/dummyData"
import { useState } from "react"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: lightgrey;
display: flex;
align-items: center;
justify-content:center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '10px'};
right:${props => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 50%;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.$index * -100}vw);
`

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
height: 80%;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 5px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

function Slider() {

const [slideIndex, setSlideIndex] = useState(0);

const handleClick=(direction)=>{
    if (direction === 'left'){
        setSlideIndex(slideIndex>0? slideIndex-1: 2);
    }
    else{
        setSlideIndex(slideIndex <2? slideIndex+1: 0)
    }
};
    
  return (
    <Container>

        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper $index = {slideIndex}>
            {sliderItems.map(item =>
                <Slide key={item.id} $bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.url}/>
                    </ImgContainer>
                    
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc} </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            )}
            

        </Wrapper>

        <Arrow direction='right' onClick={()=>handleClick('left')}>
            <ArrowRightOutlined />
        </Arrow>
    
    </Container>
  )
}

export default Slider