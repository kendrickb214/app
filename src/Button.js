import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function BasicButtons() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Button 
        variant="contained"
        style={{ 
            position: 'fixed',
            right: '500px' 
          }}
          >
            Add Record
        </Button>
      </Box>
  );
}