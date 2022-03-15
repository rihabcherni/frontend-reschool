import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogDechet({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,type_dechet,prix_unitaire}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier dechets":"créer un nouveau dechets"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="type_dechet" value={type_dechet} onChange={e=>onChange(e)} placeholder="Entrer type_dechet" label="type_dechet" variant="outlined" margin="dense" fullWidth />
              <TextField id="prix_unitaire" value={prix_unitaire} onChange={e=>onChange(e)} placeholder="Entrer prix_unitaire" label="prix_unitaire" variant="outlined" margin="dense" fullWidth />
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