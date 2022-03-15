import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogDepot({open,handleClose,data,onChange,handleFormSubmit}) {
  const {  id,id_zone_depot	,id_dechet,	id_camion	,date_depot,quantite_depose,	prix_total}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier depots":"créer un nouveau depots"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="id_zone_depot" value={id_zone_depot} onChange={e=>onChange(e)} placeholder="Entrer id_zone_depot" label="id zone depot" variant="outlined" margin="dense" fullWidth />
              <TextField id="id_dechet" value={id_dechet} onChange={e=>onChange(e)} placeholder="Entrer id_dechet" label="id dechet" variant="outlined" margin="dense" fullWidth />
              <TextField id="id_camion" value={id_camion} onChange={e=>onChange(e)} placeholder="Enter id_camion" label="id_camion" variant="outlined" margin="dense" fullWidth />       
              <TextField id="date_depot" value={date_depot} onChange={e=>onChange(e)} placeholder="Entrer date_depot" label="date_depot" variant="outlined" margin="dense" fullWidth />
              <TextField id="quantite_depose" value={quantite_depose} onChange={e=>onChange(e)} placeholder="Entrer quantite_depose" label="quantite_depose" variant="outlined" margin="dense" fullWidth />
              <TextField id="prix_total" value={prix_total} onChange={e=>onChange(e)} placeholder="Entrer prix_total" label="prix_total" variant="outlined" margin="dense" fullWidth />
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