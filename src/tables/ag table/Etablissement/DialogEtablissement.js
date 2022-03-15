import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function DialogEtablissement({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,id_zone_travail,nom,nbr_personnes,numero_telephone,email,adresse,mot_de_passe,quantite_dechets}=data

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
                <TextField id="id_zone_travail" value={id_zone_travail} onChange={e=>onChange(e)} placeholder="Entrer id zone travail" label="id zone travail" variant="outlined" margin="dense" fullWidth />
                <TextField id="nom" value={nom} onChange={e=>onChange(e)} placeholder="Entrer nom etablissement" label="nom etablissment" variant="outlined" margin="dense" fullWidth />
                <TextField id="nbr_personnes" value={nbr_personnes} onChange={e=>onChange(e)} placeholder="Enter nombre des personnes" label="nombre des personnes" variant="outlined" margin="dense" fullWidth />       
                <TextField id="adresse" value={adresse} onChange={e=>onChange(e)} placeholder="Entrer adresse" label="adresse" variant="outlined" margin="dense" fullWidth />
                <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter email" label="email" variant="outlined" margin="dense" fullWidth />       
                <TextField id="mot_de_passe" value={mot_de_passe} onChange={e=>onChange(e)} placeholder="Entrer mot_de_passe" label="mot de passe" variant="outlined" margin="dense" fullWidth />
                <TextField id="numero_telephone" value={numero_telephone} onChange={e=>onChange(e)} placeholder="Entrer numero de telephone" label="numero telephone" variant="outlined" margin="dense" fullWidth />
                <TextField id="quantite_dechets" value={quantite_dechets} onChange={e=>onChange(e)} placeholder="Enter quantité de dechets collecté par etablissement" label="quantité dechets collecté" variant="outlined" margin="dense" fullWidth />       
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