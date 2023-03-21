import React from 'react'
import { makeStyles } from "@material-ui/core"
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Carousel from './Carousel';


  const useStyles = makeStyles(() => ({
    banner: {
      position: 'relative',
      height: '70vh',
      width: '100vw',
      backgroundImage: "url(./banner4.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    bannerContent: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tagline:{
      display:"flex",
      height:"45%",
      flexDirection:"column",
      justifyContent:"center",
      textAlign:"center",

    },
  }));
const Banner = () => {
  const classes = useStyles()


  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography 
          variant='h2'
          style={{
            fontWeight:'bold',
            marginBottom:15,
            fontFamily:"Montserrat",
               
          }}
          >
            CRYPTO SAMACHAR
            </Typography>
            <Typography variant='subtitle1'
          style={{
            color:"darkgray",           
            fontFamily:"Montserrat",
            textTransform:"capitalize"

               
          }}>

            Get All The Info Regarding Your Favorite Crypto Currency
            </Typography>

        </div>
        <Carousel/>


      </Container>
    </div>
  )
}

export default Banner