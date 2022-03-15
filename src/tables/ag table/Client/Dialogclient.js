import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function DialogClient({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,nom,prenom,numero_telephone,email,adresse,type_dechet_achete,quantite_total_achete,mot_de_passe}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{id?"modifier client":"créer un nouveau client"}</DialogTitle>
      <DialogContent>
         <form>
                <TextField id="nom" value={nom} onChange={e=>onChange(e)} placeholder="Entrer nom" label="nom" variant="outlined" margin="dense" fullWidth />
                <TextField id="prenom" value={prenom} onChange={e=>onChange(e)} placeholder="Entrer prenom" label="prenom" variant="outlined" margin="dense" fullWidth />
                <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter email" label="email" variant="outlined" margin="dense" fullWidth />       
                <TextField id="adresse" value={adresse} onChange={e=>onChange(e)} placeholder="Entrer adresse" label="adresse" variant="outlined" margin="dense" fullWidth />
                <TextField id="type_dechet_achete" value={type_dechet_achete} onChange={e=>onChange(e)} placeholder="Entrer type_dechet_achete" label="type_dechet_achete" variant="outlined" margin="dense" fullWidth />
                <TextField id="quantite_total_achete" value={quantite_total_achete} onChange={e=>onChange(e)} placeholder="Entrer quantite_total_achete" label="quantite_total_achete" variant="outlined" margin="dense" fullWidth />
                <TextField id="mot_de_passe" value={mot_de_passe} onChange={e=>onChange(e)} placeholder="Entrer mot_de_passe" label="mot_de_passe" variant="outlined" margin="dense" fullWidth />
                <TextField id="numero_telephone" value={numero_telephone} onChange={e=>onChange(e)} placeholder="Entrer numero_telephone" label="numero telephone" variant="outlined" margin="dense" fullWidth />
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