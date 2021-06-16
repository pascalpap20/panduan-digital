import React from 'react';
import './MainView.css'
import Header from '../component/Header'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { Typography } from '@material-ui/core';
import Dropdown from '../component/Dropdown';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginTop:20
    },
    
    buttonDashboard: {
        marginTop: 13,
        backgroundColor: '#FBE0C4',
        marginLeft: 20,
        borderRadius: 10,
        width: 150,
        color: 'black',
        height: 40
    },  

    listStyle: {
        backgroundColor: '#0061A8'
    },

    buttonMatkul: {
        backgroundColor: '#AE9B86',
        marginLeft: 20,
        borderRadius: 10,
        width: 150,
        color: 'black',
        height: 40
        
    },
    spaceButton: {
        backgroundColor: '#0061A8',
        height: 15
    },
    bgColor: {
        backgroundColor: '#2978B5'
    },
    fillColor: {
        backgroundColor: '#2978B5',
        height: 240
    },
}));

const MataKuliah = (props) => {
    const classes = useStyles();

    // const usernameFromDashboard = props.location.state.username
    // const profile = JSON.parse(localStorage.getItem('token'))
    // console.log(profile)

    return(
        <div className={classes.bgColor}>
        <React.Fragment>
            
            <Header />
            <div className="side-nav">
                <div className={classes.root}>
                    <List className={classes.listStyle} component="nav" aria-label="secondary mailbox folders">
                        <Link to={{
                            pathname: "/dashboard",
                            // state: {username: usernameFromDashboard}
                        }}  
                            style={link}>

                            <ListItem className={classes.buttonDashboard} button>
                                    <ListItemText className="tengah" primary="Dashboard" />
                            </ListItem>
                        </Link>
                        <div className={classes.spaceButton}></div>
                        <Link to={{
                            pathname: "/matakuliah",
                            // state: {username: usernameFromDashboard}
                        }} 
                            
                            style={link}>

                            <ListItem className={classes.buttonMatkul} button>
                                    <ListItemText className="tengah" primary="Mata Kuliah" />
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </div>
            
            <div className="matakuliah-view">
                    {/* <Typography>ini buat Breadcrumb</Typography> */}
                    {/* <Typography>{profile.data.Nama}</Typography> */}
                    <Dropdown />
            
            </div>
        </React.Fragment>
        </div>
    );
}

const link = {
    textDecoration: "none"
}

export default MataKuliah;