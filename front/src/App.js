import React, { Component, useState } from 'react';
import {Button, Container, Grid} from '@material-ui/core'
import UserSelection from './components/UserSelection';
import MapComponent from './components/MapComponent';
import TableComponent from './components/TableComponent';

const App = () =>  {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  }
    return (
      <div>
        {!clicked && <Container fixed>
          <UserSelection />
          <Grid Container>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                <Button 
                variant="contained" 
                color="secondary"
                onClick={() => handleClick()}
                >
                GO!</Button>
              </div>
            </Grid>
            <Grid item>
              <TableComponent />
            </Grid>
          </Grid>
        </Container>}
        {clicked && (
          <Container  fixed>
              <div style={{ position: "absolute", width:"725px", height: "300px", margin: "15px" }}>
                <h1>Alaoui</h1>
                <MapComponent />
              </div>          
          </Container>
        )}
      </div>
    );
}

export default App;
