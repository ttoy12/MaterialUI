import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Iconify from 'src/components/iconify';

function createData(name, id, role, items, status) {
  return { name, id, role, items, status };
}

const rows = [
  createData('Bob Joe', 'J1D2xYz', 'Front Desk', 10, 'Good'),
  createData('Bob Joe', 'J1D2xYz', 'Front Desk', 10, 'Good'),
  createData('Jobby Steve', 'Ja2zxYz', 'Chief', 30, 'Good'),
  createData('Mary Jane', 'a2xBz', 'Officer', 2, 'Good'),
  createData('Bary Gary', 'B2qAd', 'Officer', 3, 'Bad'),
  createData('Bob Joe', 'J1D2xYz', 'Front Desk', 10, 'Good'),
  createData('Bob Joe', 'J1D2xYz', 'Front Desk', 10, 'Good'),
  createData('Jobby Steve', 'Ja2zxYz', 'Chief', 30, 'Good'),
  createData('Mary Jane', 'a2xBz', 'Officer', 2, 'Good'),
  createData('Bary Gary', 'B2qAd', 'Officer', 3, 'Bad'),
];

export default function TestingView() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", minWidth: 650, backgroundColor: 'white', borderTopRightRadius: 10, borderTopLeftRadius: 10, marginTop: 2 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>Inventory</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Item
          </Button>
          <Button variant="contained" color="inherit">
            <Iconify icon="ic:round-filter-list" />
            Filter
          </Button>
          <Button variant="contained" color="inherit">Download</Button>
        </Stack>
      </Box>
      <TableContainer sx={{ borderRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx= {{ backgroundColor: "white" }}>Name</TableCell>
              <TableCell sx= {{ backgroundColor: "white" }} align="right">ID</TableCell>
              <TableCell sx= {{ backgroundColor: "white" }} align="right">Role</TableCell>
              <TableCell sx= {{ backgroundColor: "white" }} align="right">Items</TableCell>
              <TableCell sx= {{ backgroundColor: "white" }} align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.items}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}