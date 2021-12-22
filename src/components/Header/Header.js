import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container, MenuItem, Select } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
//import { ChitterState } from '../../ChitterContext'
import AuthModal from '../Authentication/AuthModal'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"#00ADB5",
    fontWeight:"bold" ,
    cursor:"pointer"
  },
}));

const Header = () => {
  const classes = useStyles();
  //const navigate =  useNavigate();
  //const {currency, setCurrency, user} = CryptoState() 

  // console.log(currency);

  // const darkTheme = createTheme({
  //   palette: {
  //       primary:{ 
  //           main:'#fff',
  //       },
  //       type: 'dark',
  //   },
  // });

  return (
      <ThemeProvider>
        <div className={classes.root}>
        <AppBar color= "transparent" position="static">
            <Container>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Chitter
                </Typography>
                <AuthModal/>
                </Toolbar>
            </Container>
        </AppBar>
        </div>
    </ThemeProvider>
  );
}

export default Header