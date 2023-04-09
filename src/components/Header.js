import React from 'react'
import {makeStyles,AppBar, 
    Container,Toolbar,Typography
    ,Select,MenuItem,

} from "@material-ui/core"
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authtication/AuthModal';
import UserSidebar from './Authtication/UserSidebar';

const usestyle = makeStyles(() => ({
    title:{
        flex: 1,
        color: "green",
        fontFamily: "Montserrat",
        fontweight: "bold",
        cursor: "pointer"

    }
})
)

const Header = () => {

    // const history = useHistory();
    const classes = usestyle();
    const navigate = useNavigate();

    const {currency , setCurrency,user} = CryptoState()
    //console.log(currency)

    const darkTheme = createTheme( {
        palette:{
            
            primary:{
                main: '#fff',
            },
            type:'dark',
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={() => navigate("/")} className={classes.title}
                variant='h5'
                style={{
                    fontWeight:'bold',
                   
                    fontFamily:"Montserrat",
                       
                  }}>
                    CRYPTO SAMACHAR
                </Typography>

                <Select variant='outlined'
                style={{
                    width:100,
                    height:40,
                    marginRight:15,
                    // color: 'white',
                    // borderColor: 'white',
                    // borderStyle: 'solid',
                    
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                     <MenuItem value={"USD"}>USD</MenuItem>
                     <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
                {user? <UserSidebar/>: <AuthModal/>}
            </Toolbar>
        </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header