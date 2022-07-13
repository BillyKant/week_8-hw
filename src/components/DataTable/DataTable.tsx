import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'make',
        headerName: 'Make',
        width: 150,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 150,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'Year',
        // type: 'boolean',
        width: 110,
        editable: true,
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];

const rows = [
    { id: 1, make: 'Toyota', model: 'Tundra', year: '2018' },
    { id: 2, make: 'Ford', model: 'F150', year: '1982' },
    { id: 3, make: 'Chevy', model: 'Cruze', year: '2013' },
    { id: 4, make: 'Honda', model: 'Odyssey', year: '2005' },
    { id: 5, make: 'BMW', model: 'X2', year: '2022' },
    { id: 6, make: 'VW', model: null, year: '1967' },
    { id: 7, make: 'Ford', model: 'Mustang', year: '1997' },
    { id: 8, make: 'Subaru', model: 'Outback', year: '2020' },
    { id: 9, make: 'Honda', model: 'Civic', year: '2008' },
];

export const DataTable = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
        </Box>
    );
}