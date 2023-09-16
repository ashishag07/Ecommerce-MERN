import styled from 'styled-components'

const Conatiner = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.7)),
url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
center;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`

const Button = styled.button`
width: 40%;
padding: 15px 20px;
border: none;
background-color: teal;
color: white;
cursor: pointer;
`

const Link = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

function Login() {
  return (
    <Conatiner>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = 'Username'/>
                <Input placeholder = 'Password'/>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>                   
                <Link>Create New Account?</Link>                   
            </Form>
        </Wrapper>
    </Conatiner>
  )
}

export default Login