import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





function UserDashboard() {
  const navigate = useNavigate()
  React.useEffect(() => {
    let user = localStorage.getItem('username')
    if (!user) {
      navigate('/')
    }
  }, []);



  const [totalBloodGroups, setTotalBloodGroups] = React.useState(0);
  const [totalRequests, setTotalRequests] = React.useState(0);
  const [totalUnitsAvailable, setTotalUnitsAvailable] = React.useState(0);
  const [yourDonations, setYourDonations] = React.useState(0);
  const [totalDonors, setTotalDonors] = React.useState(0);


  React.useEffect(() => {
    setTotalBloodGroups(8)
    let unitCount = 0
    let user = localStorage.getItem('username');
    let userDonation = 0
    axios.get('http://localhost:8080/api/getrequests')
     .then(res => {
       setTotalRequests(res.data.length);
     })
     axios.get('http://localhost:8080/api/getdonors')
     .then(res => {
       setTotalDonors(res.data.length);
       res.data.map(donor => {
         unitCount+=donor.unitsOfBlood
         setTotalUnitsAvailable(unitCount)
         if (donor.username === user) {
          userDonation += 1
          setYourDonations(userDonation)
         }         
     })
    })
    .catch(err => {
      console.log(err);
    })
  }, []);



  return (
    <Box sx={{ minWidth: 275, padding: '20px'  }}>
      <Typography variant="h5">User Dashboard</Typography>
      <Grid container spacing={2} sx={{p:5}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minWidth: 200, maxWidth: 300 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total Blood Groups
              </Typography>
              <Typography variant="h5" component="div">
                {totalBloodGroups}
              </Typography>
              <Typography variant="body2">
                <br />
                Count of Blood Groups
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ minWidth: 200, maxWidth: 300 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total Requests
              </Typography>
              <Typography variant="h5" component="div">
                {totalRequests}
              </Typography>
              <Typography variant="body2">
                <br />
                Count of Total Requests
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate('/overallrequest')} size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minWidth: 200, maxWidth: 300 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Your Donations
              </Typography>
              <Typography variant="h5" component="div">
                {yourDonations}
              </Typography>
              <Typography variant="body2">
                <br />
                Count of Your Donations
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minWidth: 200, maxWidth: 300 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total Units Available
              </Typography>
              <Typography variant="h5" component="div">
                {totalUnitsAvailable}
              </Typography>
              <Typography variant="body2">
                <br />
                Count of Available Units 
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minWidth: 200, maxWidth: 300 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total Donors
              </Typography>
              <Typography variant="h5" component="div">
                {totalDonors}
              </Typography>
              <Typography variant="body2">
                <br />
                Count of available Donors
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate('/donors')} size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDashboard