import React from 'react'
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DonateBlood() {

  const navigate = useNavigate()
  React.useEffect(() => {
    let user = localStorage.getItem('username')
    if (!user) {
      navigate('/')
    }
  }, []);



  const [Name, setName] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [Age, setAge] = React.useState(0);
  const [Gender, setGender] = React.useState('');
  const [BloodGroup, setBloodGroup] = React.useState('');
  const [Address, setAddress] = React.useState('');
  const [Units, setUnits] = React.useState(0);   

  const handleRequestSubmit = () => {
      let data = {
          name:Name,
          bloodGroup:BloodGroup,
          unitsOfBlood:Units,
          phone:Phone,
          gender:Gender,
          age:Age,
          address:Address,
          username: localStorage.getItem('username')
      }
      console.log(data);
      axios({
          method:'post',
          url: 'http://localhost:8080/api/createdonor',
          data: data
      })
      .then((response) => {
          console.log(response);
          if (response.status === 201) {
              alert('Donation Sent')
              navigate('/UserDashboard')
          }
      })
      .catch((error) => {
          alert(error.message)
          console.log(error);
      })
  }

return (
  <>
  <Box sx={{p:5}}>
      <Paper elevation={2} sx={{
      p:5,
      height:'90%',
      borderRadius:10
    }}>
      <Box sx={{
          textAlign:'center'
      }}>
          <Typography variant="h4" color="initial">Blood Donation Form</Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4} >
                  <TextField
                  id="name"
                  label="Full Name"
                  required
                  value={Name}
                  onChange={(e)=>setName(e.target.value)}
                  sx={{
                      width:'100%',
                      mt:3,
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={6} lg={4} >
                  <TextField
                  id="phone"
                  label="Phone"
                  value={Phone}
                  required
                  onChange={(e)=>setPhone(e.target.value)}
                  sx={{
                      width:'100%',
                      mt:3,
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={6} lg={4} >
                  <TextField
                  id="address"
                  label="Address"
                  required
                  placeholder="Enter your address"
                  value={Address}
                  multiline
                  onChange={(e)=>setAddress(e.target.value)}
                  sx={{
                      width:'100%',
                      mt:3,
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={6} lg={4} >
                  <TextField
                  id="age"
                  required
                  type="number"
                  label="Age"
                  value={Age}
                  onChange={(e)=>setAge(e.target.value)}
                  sx={{
                      width:'100%',
                      mt:3,
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={6} lg={4} >
                  <div style={{ display: 'flex', alignItems: 'center', padding:'20px' }}>
                      <div style={{ flex: 1 }}>
                      <FormControl fullWidth>
                      <InputLabel id="blood-group-label">Blood Group</InputLabel>
                      <Select
                          labelId="blood-group-label"
                          id="blood-group-select"
                          value={BloodGroup}
                          label="Blood Group"
                          onChange={(e) => setBloodGroup(e.target.value)}
                          sx={{
                          width: '100%',
                          }}
                      >
                          <MenuItem value="A+">A+</MenuItem >
                          <MenuItem value="A-">A-</MenuItem >
                          <MenuItem value="B+">B+</MenuItem >
                          <MenuItem value="B-">B-</MenuItem >
                          <MenuItem value="AB+">AB+</MenuItem >
                          <MenuItem value="AB-">AB-</MenuItem >
                          <MenuItem value="O+">O+</MenuItem >
                          <MenuItem value="O-">O-</MenuItem >
                      </Select>
                      </FormControl>  
                      </div>
                      <div style={{ flex: 0.1 }}>
                      </div>
                      <div style={{ flex: 1 }}>
                      <FormControl fullWidth>
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select
                          labelId="gender-label"
                          id="gender-select"
                          value={Gender}
                          label="Gender"
                          onChange={(e) => setGender(e.target.value)}
                          sx={{
                          width: '100%',
                          }}
                      >
                          <MenuItem value={"Male"}>Male</MenuItem >
                          <MenuItem value={"Female"}>Female</MenuItem >
                          <MenuItem value={"Others"}>Others</MenuItem >
                      </Select>          
                      </FormControl>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4} >
                  <TextField
                  id="units"
                  required
                  label="No of Units"
                  value={Units}
                  type="number"
                  onChange={(e)=>setUnits(e.target.value)}
                  sx={{
                      width:'100%',
                      mt:3,
                  }}
                  />
              </Grid>
          </Grid>
          <Button
          onClick={handleRequestSubmit}
          sx={{
              background:'#303F9F',
              width:'100%',
              mt:2,
              height:'55px',
              borderRadius:10,
          }} variant="contained">
            Donate
          </Button>
      </Box>
    </Paper>
  </Box>
  </>    
)
}

export default DonateBlood