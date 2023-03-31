import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import Coininfo from '../components/Coininfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from "../CryptoContext";


const Coinpage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState()

  const { currency, symbol } = CryptoState()

  const fetchCoins = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data)

  }
  console.log(coin);

  useEffect(() => {
    fetchCoins()
  }, [])

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      }
    }

  }));



  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
      </div>
      <Coininfo coin={coin} />
    </div>
  )
}


export default Coinpage