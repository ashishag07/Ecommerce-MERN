import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialConatainer = styled.div`
display: flex;`

const SocialIcon = styled.div`
height: 40px;
width: 40px;
cursor: pointer;
border-radius: 50%;
color: white;
background-color: teal;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
background-color: #${props=>props.color};
`


const Center = styled.div`
flex:1;
padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`


const Right = styled.div`
flex:1;
padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img``


function Footer() {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Desc>

            <SocialConatainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>

                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            
            </SocialConatainer>
        </Left>
        
        <Center>
        
            <Title>Useful Links</Title>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
    
            </List>
        
        </Center>


        <Right>
            <Title>Contact</Title>

            <ContactItem>
                <LocationOnIcon style={{marginRight: '10px'}}/>
                622 Dixie Path, South Tobinchester 98336
            </ContactItem>

            <ContactItem>
                <PhoneIcon style={{marginRight: '10px'}}/>
                +123 456 7890
            </ContactItem>

            <ContactItem>
                <EmailOutlinedIcon style={{marginRight: '10px'}}/>
                contact@ashish.com

            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer