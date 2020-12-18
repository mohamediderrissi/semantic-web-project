import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const DetailComponent = ({uri, data}) => {
    const renderDetails = () => (
    <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Predicate</TableCell>
              <TableCell align="center">Object</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow>
                <TableCell align="left">{row.predicate}</TableCell>
                <TableCell property={row.predicate} align="center">{row.object}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    const render = () => (
        <div about={'<'+uri+'>'}>
            The predicates related to the Subject:  <h3>{uri}</h3>
            { renderDetails() }
        </div>
    );

    return (
        <div>
            { render() }
        </div>
    );
};

export default DetailComponent;