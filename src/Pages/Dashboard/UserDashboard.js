import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'






function UserDashboard() {
  const [totalBloodGroups, setTotalBloodGroups] = React.useState(0);
  const [totalRequests, setTotalRequests] = React.useState(0);
  const [totalUnitsAvailable, settotalUnitsAvailable] = React.useState(0);
  const [yourDonations, setYourDonations] = React.useState(0);
  const [yourRequests, setYourRequests] = React.useState(0);

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
              <Button size="small">Learn More</Button>
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
      </Grid>
    </Box>
  )
}

export default UserDashboard