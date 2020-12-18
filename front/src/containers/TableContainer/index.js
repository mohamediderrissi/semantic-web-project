import React, { useState } from 'react';
import {Button, Grid} from '@material-ui/core'
import TableComponent from '../../components/TableComponent';
import { getData } from '../../service';
import { selectRessourceForCity } from '../../service/queries';

const TableContainer = ({state}) => {
    const[rows, setRows] = useState([]);
    const handleClick = async() => {
        const results=[];
        const data = await getData(selectRessourceForCity(state.selectedCity,state.selectedType));
        data.results.bindings.forEach(e => {
          results.push({uri: e.subject.value, lat: e.lat.value, lont: e.lont.value, label: e.label.value});
        });
        setRows(results);
      }

    return (
        <div>
        <Grid Container>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                <Button
                disabled={ state.selectedCity===undefined || state.selectedType===undefined } 
                variant="contained" 
                color="secondary"
                onClick={() => handleClick()}
                >
                GO!</Button>
              </div>
            </Grid>
            <Grid item>
              <TableComponent data={rows} />
            </Grid>
          </Grid>
        </div>
    );

}

export default TableContainer;