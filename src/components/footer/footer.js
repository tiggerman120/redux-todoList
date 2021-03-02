import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing(2)
  }
}))

const Footer = () => {
const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>Footer Proof Of Life</Grid>
    </Grid>
  )
}

export default Footer;
