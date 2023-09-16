import styled from 'styled-components'

const Container = styled.div`
flex: 1;
position: relative;
margin: 3px;
height: 70vh;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
left:0;
top: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
padding: 10px;
background-color: white;
color: grey;
cursor: pointer;
font-weight: 600;
`



function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.url} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

    </Container>

    
  )
}

export default CategoryItem