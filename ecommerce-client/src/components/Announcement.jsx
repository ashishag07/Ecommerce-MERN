import styled from "styled-components"

const Container = styled.div`
display: flex;
height: 30px;
background-color: teal;
color: white;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

function Announcement() {
  return (
    <Container>
        Super Deal !! Free Shipping on order over 50$
    </Container>
  )
}

export default Announcement