import React, { useEffect, useState } from 'react';
import './MainView.css'
import Header from '../component/Header'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PaperDashboard from '../component/PaperDashboard';
import PaperShow from '../component/PaperShow';
import PaperShowElektif from '../component/PaperShowElektif';
import axios from 'axios';
// import { Typography } from '@material-ui/core';


const proxy = "https://corsanywhere.herokuapp.com/"
const baseURL = "http://intense-temple-76166.herokuapp.com/";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginTop:20
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(40),
        backgroundColor: '#8AB6D6'
        },
    },
    show: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(61),
            height: theme.spacing(40),
        backgroundColor: '#8AB6D6'
        },
    },

    buttonDashboard: {
        marginTop: 13,
        backgroundColor: '#AE9B86',
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
        backgroundColor: '#FBE0C4',
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
    }

}));

const MainView = (props) => {
    const classes = useStyles();
    // console.log(props.location.state.username)
    // const usernameFromLogin = props.location.state.username
    // const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    // console.log(TOKEN)
    // const { decodedToken, isExpired } = useJwt(name);
    // console.log(decodedToken)
    
    // const profile = JSON.parse(localStorage.getItem('token'))
    // const [jumlahElektifTersedia, setJumlahElektifTersedia] = useState(0);
    const [dataTertarik, setDataTertarik] = useState([]);
    const [dataElektif, setDataElektif] = useState([]);

    const getData = () => {
        var config = {
            method: 'get',
            url: `${proxy}${baseURL}api/test-repo-elektif/`,
            headers: { 
              'Content-Type': 'application/json',
            //   'Access-Control-Allow-Origin': '*'
            },
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data);
            // setJumlahElektifTersedia(response.data.length)
            setDataElektif(response.data);
        })
          .catch(function (error) {
            console.log(error);
          });
    }

    const getTertarikElektif = () => {
        var config = {
            method: 'get',
            url: `${proxy}${baseURL}api/repo-list-tertarik/`,
            headers: { 
              'Content-Type': 'application/json'
            },
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data);
            setDataTertarik(response.data);
            // console.log(JSON.parse(localStorage.getItem("token")).data.MahasiswaId)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        // getData();
        // getTertarikElektif();
    })

    useEffect(() => {
        getData();
        getTertarikElektif();
    }, [])

    const elektifTertarikDiikuti = dataTertarik.filter(item => item.id_civitas_ipb === JSON.parse(localStorage.getItem("token")).data.MahasiswaId)
    console.log(elektifTertarikDiikuti.length)
    
    const nim = JSON.parse(localStorage.getItem("token")).data.NIM
    console.log(parseInt(nim.substring(3,5)))
    const date = new Date()
    const year = date.getFullYear()
    const yearUser = 2000 + parseInt(nim.substring(3,5))
    console.log(year)
    const tingkat = year - yearUser
    const bulan = date.getMonth() + 1
    console.log(bulan)
    var semester = 0
    if( bulan >= 8 ){
        semester = 2*tingkat+1
    } else {
        semester = 2*tingkat
    }


    return(
        <div className={classes.bgColor}>
            <Header />
            <div className="side-nav">
                <div className={classes.root}>
                    
                    <List className={classes.listStyle} component="nav" aria-label="secondary mailbox folders">
                        <Link to={{
                            pathname: "/dashboard",
                            // state: {username: usernameFromLogin}
                        }}  
                            style={link}>

                            <ListItem className={classes.buttonDashboard} button>
                                    <ListItemText className="tengah" primary="Dashboard" />
                            </ListItem>
                        </Link>
                        <ListItem className={classes.spaceButton}></ListItem>
                        <Link to={{
                            pathname: "/matakuliah",
                            // state: {username: usernameFromLogin}
                        }} 
                            
                            style={link}>
                            
                            <ListItem className={classes.buttonMatkul} button>
                                    <ListItemText className="tengah" primary="Mata Kuliah" />
                            </ListItem>
                            
                        </Link>
                    </List>
                </div>
            </div>
            
            <div className="dashboard-view">
                <div className={classes.paper}>
                    <PaperDashboard title="Jumlah elektif yang tersedia" counter={dataElektif.length} />
                    <PaperDashboard title="Jumlah elektif yang tertarik untuk diikuti" counter={elektifTertarikDiikuti.length} />
                    <PaperDashboard title="Semester saat ini" counter={semester}/>
                </div>
                <div className={classes.show}>
                    <PaperShow title="Daftar mata kuliah elektif tersedia" data={dataElektif}/>
                    <PaperShowElektif title="Mata Kuliah elektif yang tertarik diikuti" dataElektif={dataElektif} dataTertarik={elektifTertarikDiikuti} />
                </div>
                {/* <Typography>{usernameFromLogin}</Typography> */}
                {/* <Typography>{profile.name}</Typography> */}
            </div>
            
        </div>
    );
}

const link = {
    textDecoration: "none"
}

export default MainView;