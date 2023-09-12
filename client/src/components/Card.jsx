import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function MyCard() {
  return (
    <Card sx={{width:"200px"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Título del Card
        </Typography>
        <Typography color="text.secondary">
          Descripcion del card
        </Typography>
        <Button variant="contained" color="primary" sx={{marginBottom:"10px"}}>
          Botón para borrar
        </Button>
        <Button variant="contained" color="primary">
          Botón para editar
        </Button>
      </CardContent>
    </Card>
  );
}

export default MyCard;
