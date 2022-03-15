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
import DialogAdmin from './dialogAdmin';
import {Item} from '../../../components/Item'

const initialValue = { nom:"", prenom:"",CIN:"", numero_telephone:"", email:"",mot_de_passe:"",created_at:"", updated_at:""}
function Administrateur() {
  const gridRef = useRef();
  const rowHeight = 50;
  const defaultColDef = useMemo(() => {
    return {
      resizable: true,sortable: true, flex: 1, filter: true 
    };
  }, []);
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => { setOpen(true);};
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };

  const url = `http://127.0.0.1:8000/api/administrateurs`
  const columnDefs = [
    { headerName: "ID", field: "id" ,headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true},
    { headerName: "nom", field: "nom"},
    { headerName: "CIN", field: "CIN"},
    { headerName: "prenom", field: "prenom"},
    { headerName: "numero_telephone", field: "numero_telephone" },
    { headerName: "email", field: "email" },
    { headerName: "mot_de_passe", field: "mot_de_passe"},
    { headerName: "created_at", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
    { headerName: "updated_at", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
    {
      headerName: "Actions", field: "Actions" ,filter: false, cellRenderer: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)} className="marginR"><EditIcon/></Button>
        <Button variant="outlined" color="error" onClick={() => handleDelete(params.value)} className="marginR"><DeleteIcon/></Button>
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
    fetch(url).then(resp => resp.json()).then(resp => 
      {
      setTableData(resp.data) }   )
  }
  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
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
    if (confirm) { fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())   }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne?")
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
      }).then(resp =>{
     resp.json()
     } ).then(resp => {
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
      <h1 className='color'>Administrateur</h1>
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
      <DialogAdmin open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}
export default Administrateur;