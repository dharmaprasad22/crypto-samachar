import React, { useEffect, useState } from 'react'
import axios from "axios";
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { createTheme } from '@mui/system';
import { ClassNames, ThemeProvider } from '@emotion/react';
//import { Container, LinearProgress, Table, TableContainer, TableHead, TableRow } from '@mui/material';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Container } from '@mui/system';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles } from "@material-ui/core"
import { useNavigate } from 'react-router-dom';




const CoinsTable = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState([])
    const navigate = useNavigate()


    const { currency } = CryptoState()
    const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(currency))

        setCoins(data)
        setLoading(false)
    }
    console.log(search)
    useEffect(() => {
        fetchCoins()

    }, [currency])

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    })

    const handleSearch = () => {
        return coins.filter((coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)

        )
    }

    const useStyles = makeStyles( () => ({



    }))

    const classes = useStyles();

    return (

        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center" }}>

                <Typography
                    variant="h4"
                    style={{
                        fontWeight: 'bold',
                        margin: 15,
                        fontFamily: "Montserrat",
                    }}>
                    Cryptocurrency Prices by Market Cap
                </Typography>

                <TextField id="outlined-basic" label="Search For a Crypto Currency.."
                    variant="outlined"

                    style={{ marginBottom: 40, width: "100%", }}
                    onChange={(e) => setSearch(e.target.value)} />
                <TableContainer>
                    {
                        loading ? (
                            <LinearProgress style={{ background: "gold" }} />
                        ) : (
                            <Table>

                                <TableHead style={{
                                    backgroundColor: "#EEBC1D"
                                }}>
                                    <TableRow>
                                        {["Coin", "Price", "24h change", "Market Cap"].map((head) => (
                                            < TableCell
                                                style={{
                                                    color: "black",
                                                    fontWeight: "9000",
                                                    fontFamily: "Montserrat",
                                                    fontWeight: 'bold',

                                                }}
                                                key={head}
                                                align={head === "Coin" ? "" : "right"}
                                            >
                                                {head}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        handleSearch().map((row) => {
                            const profit = row.price_change_percentage_24 > 0;

                            return(
                                <TableRow 
                                onClick={() => navigate.push(`/coins/${row.id}`)}
                                ClassName={classes.row}
                                key={row.name}>
  
                                </TableRow>
                            )
                                        })}

                                </TableBody>

                            </Table>
                        )
                    }

                </TableContainer>
            </Container>
        </ThemeProvider >

    )
}

export default CoinsTable