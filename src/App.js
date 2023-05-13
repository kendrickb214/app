import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Container, Button } from '@mui/material';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'Awesome' },
  { id: 3, col1: 'MUI', col2: 'Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function App() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);

  return (
  <Container   maxWidth="md">
    <Button
      sx={{ mb: 2 }}
      onClick={() => setCheckboxSelection(!checkboxSelection)}
    >
    Toggle checkbox selection
  </Button>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid checkboxSelection={checkboxSelection} rows={rows} columns={columns} />
      </div>
    </Container>
  );
}
