import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button, Paper} from '@material-ui/core';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../context/auth'
// import { Typography } from '@material-ui/core';
import bgLogin from '../img/bgLogin.jpg'

const useStyles = makeStyles((theme) => ({
  // bgLogin: {
  //   backgroundImage: bgLogin
  // },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    display: 'flex',
    flexDirection:"column",
    flexWrap: 'wrap',
    color: '#8AB6D6',
    marginTop: 40,
    marginLeft: 45,
    marginRight: 50
  },
  judul: {
    marginTop: 60,
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'white'
  },

  kotak: {
    backgroundColor: '#8AB6D6',
    height: 260,
    width: 350,
    borderRadius: 15,
    marginTop: 300,
    // marginTop: 40,
    marginBottom: 100
  },

}));

export default function Login() {
  const classes = useStyles();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const { isAuthenticated, loginSuccess, loginFailed } = useContext(AuthContext)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {

    var data = JSON.stringify({"Username":username,"Password":password});

    var config = {
      method: 'post',
      url: 'https://api.ipb.ac.id/v1/Authentication/LoginMahasiswa',
      headers: { 
        'Content-Type': 'application/json', 
        'X-IPBAPI-TOKEN': 'Bearer 62225dc6-925a-3bb6-af6c-45e427d7514c'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response))
      loginSuccess()
    })
    .catch(function (error) {
      console.log(error);
      setUsername("")
      setPassword("")
      loginFailed()
    });

        // try {
        //     const res = await axios.post(config)
        //     console.log(res)
        //     const profile = {
        //       name: res.data.data.name,
        //       role: res.data.data.role 
        //     }
        //     localStorage.setItem("token", JSON.stringify(profile))   
        //     console.log(profile)
        //     loginSuccess()
            
        // } catch (err) {
        //     console.log("FAILED")
        //     console.log(err.response)
        //     setUsername("")
        //     setPassword("")
        //     loginFailed()
        // }

    }
  
  // useEffect(() => {
  //   console.log("di use  effect" + isAuthenticated)
  // }) 
  
  if (isAuthenticated){   
    localStorage.setItem("isLogin", isAuthenticated) 
    console.log("di if " + isAuthenticated)
    return <Redirect to={{
      pathname: "/dashboard",
      state: {
        username: username
      }
    }} />
  }  

  return (
    //<div>
    // <div className={classes.root}>
    // <div>
    // <Typography className={classes.judul}>PANDUAN DIGITAL IPB</Typography>
    <div style={{ backgroundImage: `url(${bgLogin})`,
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
    }}>
      <div className={classes.root} noValidate autoComplete="off">
      <div className={classes.kotak}>
            <Paper className={classes.paper}>
                <TextField value={username} onChange={e => setUsername(e.target.value)} id="standard-basic" label="Username" className={clsx(classes.margin, classes.textField)} />
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        />
                </FormControl>
                <Button onClick={handleSubmit}>Login</Button>
                
            </Paper>
            </div>
      </div>
      </div>
    // </div>
  );
}
