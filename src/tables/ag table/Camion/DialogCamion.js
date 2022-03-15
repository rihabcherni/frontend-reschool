import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogCamion({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,id_zone_travail,matricule,type_camion,taux_remplissage,capacite,heure_depart,heure_arrivee,longitude,latitude,volume_carburant_consomme,Kilometrage}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier camion":"créer un nouveau camion"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="id_zone_travail" value={id_zone_travail} onChange={e=>onChange(e)} placeholder="Entrer id zone travail" label="id_zone_travail" variant="outlined" margin="dense" fullWidth />
              <TextField id="matricule" value={matricule} onChange={e=>onChange(e)} placeholder="Entrer matricule" label="matricule" variant="outlined" margin="dense" fullWidth />
              <TextField id="type_camion" value={type_camion} onChange={e=>onChange(e)} placeholder="Entrer type camion" label="type camion" variant="outlined" margin="dense" fullWidth />
              <TextField id="taux_remplissage" value={taux_remplissage} onChange={e=>onChange(e)} placeholder="Entrer taux_remplissage" label="taux_remplissage" variant="outlined" margin="dense" fullWidth />
              <TextField id="capacite" value={capacite} onChange={e=>onChange(e)} placeholder="Entrer capacite" label="capacite" variant="outlined" margin="dense" fullWidth />
              <TextField id="heure_depart" value={heure_depart} onChange={e=>onChange(e)} placeholder="Entrer heure depart" label="heure depart" variant="outlined" margin="dense" fullWidth />
              <TextField id="heure_arrivee" value={heure_arrivee} onChange={e=>onChange(e)} placeholder="Entrer heure arrivee" label="heure arrivee" variant="outlined" margin="dense" fullWidth />            
              <TextField id="longitude" value={longitude} onChange={e=>onChange(e)} placeholder="Entrer longitude" label="longitude" variant="outlined" margin="dense" fullWidth />
              <TextField id="latitude" value={latitude} onChange={e=>onChange(e)} placeholder="Entrer latitude" label="latitude" variant="outlined" margin="dense" fullWidth />
              <TextField id="volume_carburant_consomme" value={volume_carburant_consomme} onChange={e=>onChange(e)} placeholder="Entrer volume carburant consomme" label="volume carburant consomme" variant="outlined" margin="dense" fullWidth />
              <TextField id="Kilometrage" value={Kilometrage} onChange={e=>onChange(e)} placeholder="Enter Kilometrage" label="Kilometrage" variant="outlined" margin="dense" fullWidth />       
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