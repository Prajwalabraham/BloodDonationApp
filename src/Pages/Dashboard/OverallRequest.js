import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
    field: 'units',
    headerName: 'Units required',
    type: 'number',
    width: 90,
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'string',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function OverallRequest() {
    const [rows, setRows] = React.useState([]);
    return (
        <div style={{ height: 650, width: '100%', padding:'10px' }}>
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