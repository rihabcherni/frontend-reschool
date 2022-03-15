import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogOuvrier({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,id_etablissement,id_camion,nom,poste,prenom,numero_tel,email,mot_de_passe}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier ouvrier":"créer un nouveau ouvrier"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="id_etablissement" value={id_etablissement} onChange={e=>onChange(e)} placeholder="Entrer id etablissement" label="id_etablissement" variant="outlined" margin="dense" fullWidth />
              <TextField id="id_camion" value={id_camion} onChange={e=>onChange(e)} placeholder="Enter id camion" label="id_camion" variant="outlined" margin="dense" fullWidth />       
              <TextField id="poste" value={poste} onChange={e=>onChange(e)} placeholder="Enter poste" label="poste" variant="outlined" margin="dense" fullWidth />       
              <TextField id="nom" value={nom} onChange={e=>onChange(e)} placeholder="Entrer nom" label="nom" variant="outlined" margin="dense" fullWidth />
              <TextField id="prenom" value={prenom} onChange={e=>onChange(e)} placeholder="Entrer prenom" label="prenom" variant="outlined" margin="dense" fullWidth />
              <TextField id="numero_tel" value={numero_tel} onChange={e=>onChange(e)} placeholder="Entrer numero_telephone" label="numero telephone" variant="outlined" margin="dense" fullWidth />
              <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter email" label="email" variant="outlined" margin="dense" fullWidth />       
              <TextField id="mot_de_passe" value={mot_de_passe} onChange={e=>onChange(e)} placeholder="Entrer mot_de_passe" label="mot_de_passe" variant="outlined" margin="dense" fullWidth />
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