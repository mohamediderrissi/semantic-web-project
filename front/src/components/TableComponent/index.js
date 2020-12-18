import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DetailContainer  from '../../containers/DetailContainer';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    cursor: 'pointer',
  },
});


const TableComponent = ({data}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [uri, setUri] = useState(undefined);
  const classes = useStyles();
  const handleRowClick = (uri) => {
    setUri(uri);
    setShowDetails(true);
  };

  const renderTableComponent = () => (
  <TableContainer component={Paper}>
    <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell align="right">latitude</TableCell>
          <TableCell align="right">Longtitude</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.uri} onClick={() => handleRowClick(row.uri)} className={classes.row}>
            <TableCell component="th" scope="row">
              {row.label}
            </TableCell>
            <TableCell align="right">{row.lat}</TableCell>
            <TableCell align="right">{row.lont}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );

  return (
    <div>
      {showDetails ? <DetailContainer uri={uri} setShowDetails={setShowDetails} /> : renderTableComponent()}
    </div>  
  );
}

export default TableComponent;