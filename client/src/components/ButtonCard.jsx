import * as React from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export default function FormInDrawer() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSubmit = () => {
    
    handleCloseDrawer();
  };

  const drawerContent = (
    <FormControl>
      <TextField label="Nombre" variant="outlined" />
      <TextField label="Descripcion" variant="outlined" />
     
      <Button variant="contained" onClick={handleSubmit}>
        Crear Tarea
      </Button>
    </FormControl>
  );

  return (
    <div>
      <Button variant="contained" onClick={handleOpenDrawer}>
        Abrir Formulario
      </Button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
        <div role="presentation" onClick={handleCloseDrawer} onKeyDown={handleCloseDrawer}>
          {drawerContent}
        </div>
      </Drawer>
    </div>
  );
}
