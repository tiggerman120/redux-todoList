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

const Header = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item className={classes.root}>HeaderText</Grid>
    </Grid>
  )
}

export default Header;