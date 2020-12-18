import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import UserSelection from './components/UserSelection';
import TableContainer from './containers/TableContainer';
import './index.css';


const App = () =>  {
  const initialState = {
    selectedCity: undefined,
    selectedType: undefined,
  };
  const [state, setstate] = useState(initialState);
    return (
      <div class="App">
      <Container fixed>
          <UserSelection  state={state} setstate={setstate} />
          <TableContainer state={state} />
      </Container>
      </div>
    );
}

export default App;
