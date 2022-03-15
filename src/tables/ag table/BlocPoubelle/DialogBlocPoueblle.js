import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogBlocPoubelle({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,id_etablissement,longitude,latitude}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{id?"modifier bloc poubelle":"créer un nouveau bloc poubelle"}</DialogTitle>
      <DialogContent>
         <form>
              <TextField id="id_etablissement" value={id_etablissement} onChange={e=>onChange(e)} placeholder="Enter id_etablissement" label="id_etablissement" variant="outlined" margin="dense" fullWidth />       
              <TextField id="longitude" value={longitude} onChange={e=>onChange(e)} placeholder="Entrer longitude" label="longitude" variant="outlined" margin="dense" fullWidth />
              <TextField id="latitude" value={latitude} onChange={e=>onChange(e)} placeholder="Entrer latitude" label="latitude" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
          Annuler
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
          {id?"modifier":"envoyer"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}