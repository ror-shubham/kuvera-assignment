import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Fund.css';

function Fund() {
  const {fundCode} = useParams();
  const [fund, changeFund] = useState({});
  const [isLoading, changeLoading] = useState();
  useEffect(() => {
    changeLoading(true);
    const getFundFromCode = async () => {
      const res = await axios.get(`https://api.kuvera.in/api/v3/funds/${fundCode}.json`);
      changeFund(res.data[0]);
      changeLoading(false);
    };
    getFundFromCode()
  }, [fundCode]);

  console.log(fund);
  return (
    <div className='fund-parent'>
      {isLoading ?
        <CircularProgress />:
        <TableContainer component={Paper}>
            <h3>{fund.name}</h3>
            <Table size='small' aria-label="a dense table">
              <TableBody>
                {fund && Object.keys(fund).map((key) => (
                  <>
                    <TableRow key={key}>
                      <TableCell size='small' component="th" scope="row">
                        <b>{key}</b>
                      </TableCell>
                      {(typeof fund[key] !== 'object' || (Array.isArray(fund[key]) && typeof fund[key][0] !== 'object')) &&
                      (
                        <TableCell size='small'>{fund[key].toString()}</TableCell>
                      )
                      }
                    </TableRow>
                    {typeof fund[key] === 'object' && !Array.isArray(fund[key]) && (
                      <>
                        {fund[key] && Object.keys(fund[key]).map(innerKey => (
                          <TableRow>
                            <TableCell size='small' />
                            <TableCell size='small'>{innerKey.toString()}</TableCell>
                            <TableCell className='small_column' size='small'>{fund[key][innerKey].toString()}</TableCell>
                          </TableRow>
                        ))}
                      </>
                    )}
                    { Array.isArray(fund[key]) && (typeof fund[key][0] === 'object') && (
                      fund[key].map(el => (
                        <TableRow>
                          <TableCell className='small_column' size='small' />
                          {
                            el && Object.keys(el).map(innerKey => (
                              <TableRow>
                                <TableCell size='small' />
                                <TableCell size='small'>{innerKey.toString()}</TableCell>
                                <TableCell size='small' align='left'>{el[innerKey].toString()}</TableCell>
                              </TableRow>
                            ))
                          }
                        </TableRow>
                      ))
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      }
    </div>
  )
}

export default Fund;
