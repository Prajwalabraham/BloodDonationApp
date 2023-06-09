import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function OverallRequest() {

  const navigate = useNavigate()
  React.useEffect(() => {
    let user = localStorage.getItem('username')
    if (!user) {
      navigate('/')
    }
  }, []);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
     axios.get('http://localhost:8080/api/getrequests')
      .then(res => {
        console.log(res);
        setRows(res.data)
      })
    }, []);

    
const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'name', headerName: 'Full Name', width: 170 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 30,
  },
  {
    field: 'bloodGroup',
    headerName: 'Blood Group',
    type: 'string',
    width: 80,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    type: 'string',
    width: 80,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 100,
  },
  {
    field: 'disease',
    headerName: 'Disease',
    type: 'string',
    width: 150,
  },
  {
    field: 'numberOfUnits',
    headerName: 'Units',
    type: 'number',
    width: 90,
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'string',
    width: 290,
  },
  {
    field: 'accept',
    headerName: 'Accept',
    renderCell: (params) => {
      return (
        params.row.status === 'pending' ? 
        <Button variant="contained" color="success" onClick={() => {handleAccept(params.row)}}>Accept</Button>
        : 
        <Typography variant="body1" sx={{color:'green'}} >Accepted</Typography>
      );
    }
  }
];


  const handleAccept = (row) => {
    console.log(row.id);
    axios({
      method:'put',
      url: `http://localhost:8080/api/requests/${row.id}/accept`
    })
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
    })
  }

    return (

        <div style={{ height: 650, width: '100%', padding:'10px' }}>
      <Typography variant="h5" color="default">Overall Requests:</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      );
}

export default OverallRequest