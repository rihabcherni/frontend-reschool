import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogAdmin({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,name,email,password}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier utilisateur":"créer un nouveau utilisateur"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="name" value={name} onChange={e=>onChange(e)} placeholder="Entrer nom" label="nom" variant="outlined" margin="dense" fullWidth />
              <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter email" label="email" variant="outlined" margin="dense" fullWidth />       
              <TextField id="password" value={password} onChange={e=>onChange(e)} placeholder="Entrer mot de passe" label="mot de passe" variant="outlined" margin="dense" fullWidth />
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