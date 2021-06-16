import React, { useEffect, useState } from 'react';
import './MainView.css'
import Header from '../component/Header'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TableElektif from '../component/TableElektif';
import ClearIcon from '@material-ui/icons/Clear';
import ListKomentar from '../component/ListKomentar';
// import DATAKOMENTAR from '../component/dataDummyKomentar';
// import TambahKomentarCard from '../component/TambahKomentarCard';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
import axios from 'axios';
import DATADETAIL from '../component/dataDummyDetail';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginTop:20
    },    
    divider: {
        marginTop: 30
    },
    dividerDesc: {
      marginTop: 20,
    },
    viewHeader: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        marginRight: theme.spacing(2)
    },
    tableElektif: {
        display: "flex",
        justifyContent: "center"
    }, 
    
    rootKomentar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '100%',
    },
    paperKomentar: {
        display: 'flex',
        width: "70%"
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
    textTittle: {
      fontWeight: 'bold',
      fontSize: 30
    },
    textDesc: {
      fontWeight: 'bold',
      fontSize: 20
    },
    textIsi: {
      fontSize: 18
    },
    btnBatal: {
      backgroundColor: "#ff4c4c"
    }
}));

const proxy = "https://corsanywhere.herokuapp.com/"
const baseURL = "http://intense-temple-76166.herokuapp.com/";

const PelajaranPage = (props) => {
    const classes = useStyles();

    const [data, setData] = useState([])
    const [koordinator, setKoordinator] = useState([])
    const [dataTertarik, setDataTertarik] = useState([])
    
    const [isTertarik, setIsTertarik] = useState(false)
    const [komentarValues, setKomentarValues] = useState("")
    const [dataListKomentar, setDataListKomentar] = useState([])

    // const [dataDetail, setDataDetail] = useState([])

    useEffect(() => {
        const id = props.match.params.id
        console.log(id)

        var config = {
            method: 'get',
            url: 'https://api.ipb.ac.id/v1/MataKuliah/DepartemenSaya?TahunAkademik=2020/2021&Semester=All&Strata=S1',
            headers: { 
              'X-IPBAPI-TOKEN': 'Bearer 62225dc6-925a-3bb6-af6c-45e427d7514c'
            }
          };
          
          axios(config)
          .then(function (response) {
            // console.log(response.data);
            const data = response.data.find(item => item.MataKuliahId === parseInt(id))
            console.log(data)
            console.log(data.Koordinator.Nama)
            setData(data)
            setKoordinator(data.Koordinator)
          })
          .catch(function (error) {
            console.log(error);
          });

        // const data = DATAMATKUL.find(item => item.id === parseInt(id))
        // console.log(data)
        // setData(data)
        
    }, [props.match.params.id])

    const getData = async () => {
        // const id = props.match.params.id

        var config = {
            method: 'get',
            url: `${proxy}${baseURL}api/repo-list-tertarik`,
            headers: { 
              'Content-Type': 'application/json'
            }
          };
          
          await axios(config)
          .then(function (response) {
            console.log(response.data);
            // const data = response.data.filter(item => item.id_mata_kuliah === parseInt(id))
            // console.log(data)
            setDataTertarik(response.data)
            // setShowType(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const getDataKomentar = async () => {
      
      var config = {
        method: 'get',
        url: `${proxy}${baseURL}api/repo-list-komentar/`,
        headers: { 
          'Content-Type': 'application/json'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
        setDataListKomentar(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    const checkIsTertarikCondition = async () => {
        const id = props.match.params.id
        console.log(JSON.parse(localStorage.getItem('token')).data.MahasiswaId)
        console.log(id)
        var config = {
            method: 'get',
            url: `${proxy}${baseURL}api/repo-list-tertarik`,
            headers: { 
              'Content-Type': 'application/json'
            }
          };
          
          await axios(config)
          .then(function (response) {
            console.log(response.data);
            const findUser = response.data.find(item => ((item.id_mata_kuliah === parseInt(id)) && (item.id_civitas_ipb === JSON.parse(localStorage.getItem('token')).data.MahasiswaId)))
            if(findUser){
                setIsTertarik(true); 
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
      // const getDetail = async()=>{
          const detailMk = DATADETAIL.filter(item => (item.mkid === parseInt(props.match.params.id)));
          console.log(detailMk[0])
          // setDataDetail(detailMk[0]);
          // const detailMk = dataDetail.filter(item => (item.mkid === parseInt(props.match.params.id)));
          // const detailsMk = detailMk[0];
          // console.log(dataDetail);
        
        //   var config = {
        //   method: 'get',
        //   url: `http://localhost:8000/api/repo-detail`,
        //   headers: { 
        //     'Content-Type': 'application/json'
        //   }
        // };
        
        // await axios(config)
        // .then(function (response) {
        //   console.log(response.data);
        //   const detailMk = response.data.filter(item => (item.mkid === parseInt(props.match.params.id)));
        //   setDataDetail(detailMk[0]);
        //   // const detailMk = dataDetail.filter(item => (item.mkid === parseInt(props.match.params.id)));
        //   // const detailsMk = detailMk[0];
        //   console.log(dataDetail);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      // }
        
     
    console.log(koordinator);

    useEffect(() => {
        getData();
        getDataKomentar();
        // getDetail();
    }, [])

    useEffect(() => {
        checkIsTertarikCondition();
        
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // alert("Asik")
        const res = await axios.get(`${proxy}${baseURL}api/repo-list-tertarik`, {
        headers: { 
          'Content-Type': 'application/json'
        }})

        console.log(res.data)
        // console.log(res.data[res.data.length-1].id)
        if(isTertarik === false){
            // ini nanti ke proses post database
            const newDataTertarik = {
                id: res.data.length === 0 ? res.data.length : res.data[res.data.length-1].id + 1,
                username: JSON.parse(localStorage.getItem("token")).data.Nama,
                nim: JSON.parse(localStorage.getItem("token")).data.NIM,
                id_mata_kuliah: parseInt(props.match.params.id),
                id_civitas_ipb: JSON.parse(localStorage.getItem("token")).data.MahasiswaId
            }

            var config = {
                method: 'post',
                url: `${proxy}${baseURL}api/repo-add-tertarik`,
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : newDataTertarik
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                setDataTertarik([...dataTertarik, newDataTertarik])
                setIsTertarik(!isTertarik)
              })
              .catch(function (error) {
                console.log(error);
              });

        } else {
            // dataTertarik harusnya diambil dari database
            const idUser = JSON.parse(localStorage.getItem("token")).data.MahasiswaId
            console.log(idUser)
            const id = props.match.params.id
            const checkUser = res.data.find(item => ((item.id_mata_kuliah === parseInt(id)) && (item.id_civitas_ipb === JSON.parse(localStorage.getItem('token')).data.MahasiswaId)))
            console.log(checkUser.id)
            if(checkUser){

                var configDel = {
                    method: 'delete',
                    url: `${proxy}${baseURL}api/repo-delete-tertarik/${checkUser.id}`,
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                };
                
                axios(configDel)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setDataTertarik(dataTertarik.filter(item => item.id_civitas_ipb !== idUser))
                    setIsTertarik(!isTertarik)
                })
                .catch(function (error) {
                    console.log(error);
                });   
            }

        }
        console.log(dataTertarik)
    }   
    


    const handleSubmitKomentar = async (e) => {
        console.log(komentarValues)

        const res = await axios.get(`${proxy}${baseURL}api/repo-list-komentar`, {
          headers: { 
            'Content-Type': 'application/json'
        }})
        console.log(res.data)
        if(komentarValues.trim().length > 0){
            const newKomentarData = {
                id: res.data.length === 0 ? res.data.length : res.data[res.data.length-1].id + 1,
                username: JSON.parse(localStorage.getItem("token")).data.Nama,
                nim: JSON.parse(localStorage.getItem("token")).data.NIM,
                komentar: komentarValues,
                id_mata_kuliah: parseInt(props.match.params.id),
                id_civitas_ipb: JSON.parse(localStorage.getItem("token")).data.MahasiswaId
            }

            var config = {
              method: 'post',
              url: `${proxy}${baseURL}api/repo-add-komentar`,
              headers: { 
                'Content-Type': 'application/json'
              },
              data : newKomentarData
            };
            
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              setDataListKomentar([...dataListKomentar, newKomentarData])
              setKomentarValues("")
              window.location.reload()
            })
            .catch(function (error) {
              console.log(error);
            });

        }
    }

    

    
    return(
        <div className={classes.bgColor}>
        <React.Fragment>
            <Header />
            <div className="side-nav">
                <div className={classes.root}>
                    <List className={classes.listStyle} component="nav" aria-label="secondary mailbox folders">
                        <Link to={{
                            pathname: "/dashboard"
                        }}  
                            style={link}>

                            <ListItem className={classes.buttonDashboard} button>
                                    <ListItemText className="tengah" primary="Dashboard" />
                            </ListItem>
                        </Link>
                        <div className={classes.spaceButton}></div>
                        <Link to={{
                            pathname: "/matakuliah"
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
                    <Typography className={classes.textTittle}>{data.Nama}</Typography>
                    <div className={classes.viewHeader}>
                        <Typography className={classes.textTittle}>{data.Kode}</Typography>
                        {props.location.state.type === "Elektif" ? (
                        <Button
                            variant="contained"
                            color={isTertarik ? "secondary" : "primary"}
                            size="small"
                            className={classes.button}
                            startIcon={isTertarik ? <ClearIcon/> : <AddIcon />}
                            onClick={handleSubmit}
                            >
                            {isTertarik ? "Batal" : "Tertarik?"}
                        </Button>) : ("")}
                    </div>

                    <Divider className={classes.divider} />
                    <Typography className={classes.textDesc}>Deskripsi</Typography>
                    <Typography className={classes.textIsi}>{detailMk[0].description}</Typography>
                    <Divider className={classes.dividerDesc}></Divider>
                    <Typography className={classes.textDesc}>Prasyarat</Typography>
                    <Typography className={classes.textIsi}>{detailMk[0].pras}</Typography>
                    <Divider className={classes.dividerDesc}></Divider>
                    <Typography className={classes.textDesc}>Dosen Koordinator</Typography>
                    <Typography className={classes.textIsi}>{koordinator.Nip} - {koordinator.NamaGelar}</Typography>
                    <Divider className={classes.dividerDesc}></Divider>
                    {props.location.state.type === "Elektif" ? 
                      (<Typography className={classes.textDesc}>Daftar Mahasiswa yang tertarik mengikuti mata kuliah elektif ini</Typography>)
                      : 
                      ""
                    }
                    {props.location.state.type === "Elektif" ? (
                    <div className={classes.tableElektif}>
                        <TableElektif dataTertarik={dataTertarik} idMataKuliah={parseInt(props.match.params.id)} />
                    </div>) : ("")}
                    <Typography className={classes.textDesc}>Review</Typography>
                    
                    
                    {/* <TambahKomentarCard /> */}
                    <div className={classes.rootKomentar}>
                            <Paper className={classes.paperKomentar}>
                                <TextField value={komentarValues} 
                                        onChange={e => setKomentarValues(e.target.value)} 
                                        id="filled-multiline-static" 
                                        label="Tulis komentar" 
                                        multiline
                                        rows={2}
                                        variant="filled"
                                        className={clsx(classes.margin, classes.textField)} 
                                />    
                                <Button onClick={handleSubmitKomentar}>Kirim</Button>
                            </Paper>
                    <ListKomentar dataKomentar={dataListKomentar} idMataKuliah={parseInt(props.match.params.id)} />
                    </div>
            </div>
        </React.Fragment>
        </div>
    );
}

const link = {
    textDecoration: "none"
}

export default PelajaranPage;