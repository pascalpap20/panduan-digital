import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, GridList, GridListTile } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign:'center',
    flexDirection:'column',
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  card: {
    maxWidth:275,
    marginTop: 10,
    backgroundColor: "#FBE0C4"
  }

}));

export default function PaperShow({ title, data }) {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root}>
            <Typography className={classes.text} >{title}</Typography>
            <GridList cellHeight='auto' className={classes.gridList} cols={2} >
              {data.map((item) => 
                <GridListTile cols={1} key={item.MataKuliahId}>
                  <Card className={classes.card} >

                      <Typography key={item.MataKuliahId}>{item.Nama}</Typography>

                  </Card>
                </GridListTile>              
              )}
            </GridList>       
        </Paper>
  );
}
