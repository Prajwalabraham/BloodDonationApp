import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function Donors() {

  const navigate = useNavigate()
  React.useEffect(() => {
    let user = localStorage.getItem('username')
    if (!user) {
      navigate('/')
    }
  }, []);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
     axios.get('http://localhost:8080/api/getdonors')
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
    field: 'unitsOfBlood',
    headerName: 'Units',
    type: 'number',
    width: 90,
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'string',
    width: 390,
  },
];


    return (

        <div style={{ height: 650, width: '100%', padding:'10px' }}>
      <Typography variant="h5" color="default">Overall Donors:</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      );
}

export default Donors