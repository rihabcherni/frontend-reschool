import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function DialogEtablissement({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,id_bloc_poubelle,nom,capacite_poubelle,type,Etat,temps_remplissage}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{id?"modifier etablissement":"créer un nouveau etablissement"}</DialogTitle>
      <DialogContent>
         <form>
                <TextField id="id_bloc_poubelle" value={id_bloc_poubelle} onChange={e=>onChange(e)} placeholder="Entrer id bloc poubelle" label="id bloc poubelle" variant="outlined" margin="dense" fullWidth />
                <TextField id="nom" value={nom} onChange={e=>onChange(e)} placeholder="Entrer nom poubelle" label="nom poubelle" variant="outlined" margin="dense" fullWidth />
                <TextField id="capacite_poubelle" value={capacite_poubelle} onChange={e=>onChange(e)} placeholder="Enter capacite du poubelle" label="la capacite du poubelle" variant="outlined" margin="dense" fullWidth />       
                <TextField id="type" value={type} onChange={e=>onChange(e)} placeholder="Enter type du poubele" label="type de poubelle" variant="outlined" margin="dense" fullWidth />       
                <TextField id="Etat" value={Etat} onChange={e=>onChange(e)} placeholder="Entrer Etat" label="Etat poubelle" variant="outlined" margin="dense" fullWidth />
                <TextField id="temps_remplissage" value={temps_remplissage} onChange={e=>onChange(e)} placeholder="Enter temps_remplissage" label="temps_remplissage" variant="outlined" margin="dense" fullWidth />       
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