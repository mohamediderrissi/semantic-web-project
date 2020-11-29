import React, { useState } from 'react';
import {Grid} from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
const UserSelection = () => {
    const cities = ["Saint-etienne", "Lyon","Paris"];
    const types = ["Gare SNCF", "Hospitals","Libraries","Schools"];
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [selectedType, setSelectedTypes] = useState(types[0]);

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
                     onChange={(e) => { setSelectedCity(e.target.value); }}>
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
                     onChange={(e) => { setSelectedTypes(e.target.value); }}>
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