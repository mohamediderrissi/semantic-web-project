import React, { useState, useEffect } from 'react';
import {Grid} from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { getData } from '../../service';
import { CITIES, TYPES } from '../../service/queries';

const UserSelection = ({setstate, state}) => {
    //const cities = ["Saint-etienne", "Lyon","Paris"];
    const [cities, setCities] = useState([""]);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    // const types = ["Gare SNCF", "Hospitals","Libraries","Schools"];
    const [types, setTypes] = useState([""]);
    const [selectedType, setSelectedTypes] = useState(types[0]);

    useEffect(
        async() => {
          const data = await getData(CITIES);
          let _cities = [];
          data.results.bindings.forEach(e => {
            let city = e.object.value.split("/").slice(-1)[0]; // return Toulouse - Saint-Etienne ...etc.
            _cities.push(city);
          });
          setCities(_cities);
        }
      , [])
    useEffect(
        async() => {
          const data = await getData(TYPES);
          let _types = [];
          data.results.bindings.forEach(e => {
            let city = e.object.value.split("/").slice(-1)[0]; // return Train_Station ...etc
            _types.push(city);
          });
          setTypes(_types);
        }
      , [])

    return (
        <div>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
            >
                 <Grid item xs={4}>
                 <FormControl fullWidth>
                     <InputLabel id="select-city"  >Select a City</InputLabel>
                     <Select
                     labelId="select-city"
                     value={selectedCity}
                     onChange={(e) => { 
                       setSelectedCity(e.target.value);
                       setstate({
                         ...state,
                        selectedCity: e.target.value,
                       })
                        }}>
                    {
                        cities.map((city,index) => <MenuItem id={city} value={city}>{cities[index]}</MenuItem> )
                    }
            </Select>
            </FormControl>
                </Grid>
                <Grid item xs={4}>
                <FormControl fullWidth>
                     <InputLabel id="select-type"  >What you are looking for ?</InputLabel>
                     <Select
                     labelId="select-type"
                     value={selectedType}
                     onChange={(e) => { 
                       setSelectedTypes(e.target.value);
                       setstate({
                        ...state,
                        selectedType: e.target.value,
                      })
                        }}>
                    {
                        types.map((type,index) => <MenuItem id={type} value={type}>{types[index]}</MenuItem> )
                    }
            </Select>
            </FormControl>

                </Grid>

            </Grid>
        </div>
    );
}

export default UserSelection;