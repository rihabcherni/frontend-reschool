import React, { useState, useMemo, useCallback, useEffect , useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DialogEtablissement from './DialogEtablissement';
import {Item} from '../../../components/Item'

const initialValue = { id_zone_travail:"", nom:"", nbr_personnes:"",adresse:"",email:"",mot_de_passe:"",numero_telephone:"",quantite_dechets:"",created_at:"", updated_at:""}
function Etablissement() {
  const gridRef = useRef();
  const rowHeight = 50;
  const defaultColDef = useMemo(() => {
    return {
      resizable: true,sortable: true, flex: 1, filter: true, floatingFilter: true 
    };
  }, []);
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = `http://127.0.0.1:8000/api/etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id" ,headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true},
    { headerName: "zone travail", field: "id_zone_travail"},
    { headerName: "nom", field: "nom"},
    { headerName: "nombre de personnes", field: "nbr_personnes"},
    { headerName: "adresse", field: "adresse" },
    { headerName: "email", field: "email" },
    { headerName: "mot de passe", field: "mot_de_passe"},
    { headerName: "numero telephone", field: "numero_telephone" },
    { headerName: "quantité déchets", field: "quantite_dechets" },
    { headerName: "date de création", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
    { headerName: "date de màj", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
    {
      headerName: "Actions", field: "id" ,filter: false, cellRenderer: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"5px"}}><EditIcon/></Button>
        <Button variant="outlined" color="error" onClick={() => handleDelete(params.value)}><DeleteIcon/></Button>
      </div>
    }
  ]
  const columnTypes = useMemo(() => {
    return {
      numberColumn: { width: 130, filter: 'agNumberColumnFilter' },
      medalColumn: { width: 100, columnGroupShow: 'open', filter: false },
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: (filterLocalDateAtMidnight, cellValue) => {
            const dateParts = cellValue.split('/');
            const day = Number(dateParts[0]);
            const month = Number(dateParts[1]) - 1;
            const year = Number(dateParts[2]);
            const cellDate = new Date(year, month, day);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          },
        },
      },
    };
  }, []);
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp.data))
  }
  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
    console.log(value,id)
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  const handleDelete = (id) => {
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", id)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())

    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne ?")
      confirm && fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getData()

        })
    } else {
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getData()
        })
    }
  }
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);
  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('quickFilter').value
    );
  }, []);
  const onPaginationChange=(pageSize)=>{
    gridApi.api.paginationSetPageSize(Number(pageSize))
  }
  return (
    <div className="table">
      <h2 className='color2'>Etablissement</h2>
      <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
      <Item>
            <ManageSearchIcon variant="contained" color="success"/>
            <input type="text"  onInput={onQuickFilterChanged}  id="quickFilter"  placeholder="recherche..." className='search'/>
      </Item>
      <Item>
              <select className="paginate" onChange={(e)=>onPaginationChange(e.target.value)}>
                <option value='5'>5</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            <Button variant="contained" color="primary" onClick={onBtnExport} className="marginR"><FileDownloadIcon/></Button>
            <Button variant="contained" color="success" onClick={handleClickOpen}><AddIcon/></Button>
      </Item>
     
  </Grid>
  <div className="ag-theme-alpine" style={{ height: '350px'}}>
        <AgGridReact ref={gridRef} rowData={tableData} columnDefs={columnDefs}  defaultColDef={defaultColDef}
                    onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight}
                    pagination={true} paginationPageSize={5}/>
  </div>
      <DialogEtablissement open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}
export default Etablissement;