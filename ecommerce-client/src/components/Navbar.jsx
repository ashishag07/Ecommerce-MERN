import React from 'react'
import styled  from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material-next/Badge';
import { grey } from '@mui/material/colors';

import {mobile} from '../Responsive'


const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
${mobile({padding: "10px 0"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`
const SearchContainer = styled.div`
display: flex;
align-items: center;
border: 0.5px solid grey;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;

`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.div`
font-weight: bold;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItems = styled.div`
font-size: 14px;
margin-left: 25px;
cursor: pointer;
`



function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <SearchIcon style={{color: grey, fontSize: 16}}/>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>LAMA.</Logo>
            </Center>

            <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SIGN IN</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItems>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar