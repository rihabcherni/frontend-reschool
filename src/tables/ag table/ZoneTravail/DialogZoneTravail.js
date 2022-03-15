import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function DialogZoneTravail({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id ,region,quantite_total_collecte_plastique,quantite_total_collecte_composte,quantite_total_collecte_papier,quantite_total_collecte_canette}=data
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{id?"modifier zone de travail":"créer un nouveau zone de travail"}</DialogTitle>
      <DialogContent>
         <form>
            <TextField id="region" value={region} onChange={e=>onChange(e)} placeholder="Entrer region" label="region" variant="outlined" margin="dense" fullWidth />
            <TextField id="quantite_total_collecte_plastique" value={quantite_total_collecte_plastique} onChange={e=>onChange(e)} placeholder="Entrer quantite total collecté plastique" label="quantite total collecté plastique" variant="outlined" margin="dense" fullWidth />
            <TextField id="quantite_total_collecte_composte" value={quantite_total_collecte_composte} onChange={e=>onChange(e)} placeholder="Entrer quantite total collecté composte" label="quantite total collecté composte" variant="outlined" margin="dense" fullWidth />
            <TextField id="quantite_total_collecte_papier" value={quantite_total_collecte_papier} onChange={e=>onChange(e)} placeholder="Entrer quantite total collecté papier" label="quantite total collecté papier" variant="outlined" margin="dense" fullWidth />
            <TextField id="quantite_total_collecte_canette" value={quantite_total_collecte_canette} onChange={e=>onChange(e)} placeholder="Entrer quantite total collecté canette" label="quantite total collecté canette" variant="outlined" margin="dense" fullWidth />

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