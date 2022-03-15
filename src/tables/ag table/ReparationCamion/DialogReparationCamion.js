import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogReparationCamion({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,id_camion,id_mecanicien,description_panne,cout,date_debut_reparation,date_fin_reparation}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier reparation camion":"créer un nouveau reparation camion"}</DialogTitle>
        <DialogContent>
        <form>
              <TextField id="id_camion" value={id_camion} onChange={e=>onChange(e)} placeholder="Entrer id camion" label="id camion" variant="outlined" margin="dense" fullWidth />
              <TextField id="id_mecanicien" value={id_mecanicien} onChange={e=>onChange(e)} placeholder="Entrer id_mecanicien" label="id mecanicien" variant="outlined" margin="dense" fullWidth />
              <TextField id="description_panne" value={description_panne} onChange={e=>onChange(e)} placeholder="Entrer description panne" label="description panne" variant="outlined" margin="dense" fullWidth />
              <TextField id="cout" value={cout} onChange={e=>onChange(e)} placeholder="Entrer cout" label="cout" variant="outlined" margin="dense" fullWidth />
              <TextField id="date_debut_reparation" value={date_debut_reparation} onChange={e=>onChange(e)} placeholder="Enter date_debut_reparation" label="date_debut_reparation" variant="outlined" margin="dense" fullWidth />       
              <TextField id="date_fin_reparation" value={date_fin_reparation} onChange={e=>onChange(e)} placeholder="Entrer date_fin_reparation" label="date_fin_reparation" variant="outlined" margin="dense" fullWidth />
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