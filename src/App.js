import Main from './components/main/main'
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightGrey',
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Main />
    </Container>
  );
}

export default App;
