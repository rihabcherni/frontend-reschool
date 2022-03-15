import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

const initialValue = { adresse:"", quantite_maximale_depot:"",created_at:"", updated_at:""}


export default function DialogZoneDepot({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,adresse,quantite_maximale_depot}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier zone depots":"créer un nouveau zone depots"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="adresse" value={adresse} onChange={e=>onChange(e)} placeholder="Entrer adresse" label="adresse" variant="outlined" margin="dense" fullWidth />
              <TextField id="quantite_maximale_depot" value={quantite_maximale_depot} onChange={e=>onChange(e)} placeholder="Entrer quantite_maximale_depot" label="quantite_maximale_depot" variant="outlined" margin="dense" fullWidth />
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