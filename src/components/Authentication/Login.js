import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { ChitterState } from '../../ChitterContext'


const Login = ({handleClose}) => {

    const [alert, setAlert] = useState({
      open:false,
      message:"",
      type:"success"
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const { setAlert } = ChitterState()
    const auth = getAuth();
    
    const handleSubmit = async () => {
        if (!email || !password) {
          setAlert({
            open: true,
            message: "Please fill all the Fields",
            type: "error",
          });
          return;
        }
    
        try {
          const result = await signInWithEmailAndPassword(auth, email, password);
          setAlert({
            open: true,
            message: `Sign Up Successful. Welcome ${result.user.email}`,
            type: "success",
          });
          // console.log(result);
          handleClose();
        } catch (error) {
          setAlert({
            open: true,
            message: error.message,
            type: "error",
          });
          return;
        }
      };

    return (
        <Box 
        p={3}
        style={{display:"flex", flexDirection:"column", gap:"20px"}}
        >
        <TextField
            variant="outlined"
            type="Email"
            label="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
        />
        <TextField
            variant="outlined"
            type="Password"
            label="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
        />
        <Button
        variant="contained"
        size="large"
        style={{backgroundColor:"#00ADB5"}}
        onClick={handleSubmit}
        >
        Login
        </Button> 
        </Box>
    )
}

export default Login
