import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign:'center',
    flexDirection:'column'
  },
  text: {
    marginTop: 10,
    marginBottom: 70,
    fontWeight: 'bold'
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    '& > *': {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
  }, 
  counter: {
    fontSize: 72
  }
  
}));

export default function SimplePaper({ title, counter }) {
  const classes = useStyles();

  return (
      <Paper elevation={3} className={classes.root}>
        <Typography className={classes.text} variant='body2'>{title}</Typography>
        <Typography className={classes.counter}>{counter}</Typography>
      </Paper>
  );
}
