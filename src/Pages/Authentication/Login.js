import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [usernameError,setUsernameError] = React.useState(false)
    const [passwordError,setPasswordError] = React.useState(false)
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
        return regex.test(password);
      };
    
    const handleLogin = () => {
      let userData = {
        username:username,
        password:password
      }
      axios({
        method:'post',
        url: 'http://localhost:8080/api/login',
        data: userData
      })
      .then(res => {
        console.log(res);
        alert(res.data)
        if(res.status === 200){
          localStorage.setItem('userID', res.data.userId)
          localStorage.setItem('username', res.data.username)
          navigate('/UserDashboard')
        }
      })
      .catch(err => {
        alert("Invalid Username or Password")
      })
    }

  return (
    <Container sx={{
        p:5,
        background: '#DEF3F6',
        height:'100vh'

    }} maxWidth="lg">
      <Paper elevation={5} sx={{
        p:5,
        height:'90%',
        borderRadius:10
      }}>
        <Box sx={{
            textAlign:'center'
        }}>
            <Typography variant="h4" sx={{}}><b>Blood Bank Management System</b></Typography>
            <Typography variant="h5" sx={{textAlign:'left', mt:'20px', ml:'20px'}}>User Login:</Typography>
            <TextField
              id="username"
              label="Username"
              helperText={username.length===0 ? 'Enter valid username' : ''}
              value={username}
              error={usernameError}
              required
              onChange={(e)=>setUsername(e.target.value)}
              sx={{
                mt:8,
                width:'100%',
                borderRadius:5
              }}
            />
            <TextField
              id="password"
              label="Password"
              helperText={password.length===0 ? 'Password is required' :  validatePassword(password) ? '' : 'Password must contain atleast one uppercase,lowercase,number and special character '}
              value={password}
              error={!validatePassword(password)}
              required
              onChange={(e)=>setPassword(e.target.value)}
              sx={{
                mt:3,
                width:'100%',
                borderRadius:5
              }}
            />
            <Button sx={{
                background:'#303F9F',
                width:'100%',
                mt:2,
                height:'55px',
                borderRadius:10,
              }} 
              onClick={handleLogin}
              variant="contained">
              Login
            </Button>
            <Typography variant="subtitle1">Don't have an account? <a href="/Signup" style={{textDecoration:'none', color:'blue'}}>Signup</a></Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login