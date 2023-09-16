import styled from "styled-components"

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
`

const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
background-color: #${props => props.bg};
transform: translateX(-200vw);
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
cursor: pointer
`
export {Container, Wrapper, Arrow, ImgContainer, Image, Slide, InfoContainer, Title, Button, Desc};