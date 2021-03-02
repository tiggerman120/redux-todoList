import Header from '../header/header';
import Footer from '../footer/footer';
import TodoList from '../todo-list/todo-list';
import TodoForm from '../todo-form/todo-form';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightGrey',
  }
}))

const Main = () => {
const classes = useStyles();


  return (
    <Grid Container className={classes.root}>
      <Header />
      <TodoForm />
      <br />
      <TodoList />
      <Footer />
    </Grid>
  )
}
export default Main