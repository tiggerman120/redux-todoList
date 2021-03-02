import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Grid, List, ListItem, Paper } from '@material-ui/core'
import { asyncGetData, deleteItem, updateItemPropertyComplete} from '../../store/actions/actions';


const mapDispatchToProps = { asyncGetData, deleteItem, updateItemPropertyComplete };


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  completefalse: {
    backgroundColor: 'pink',
  },
  completetrue: {
    backgroundColor: 'green',
  }

}))



const TodoList = (props) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles()
  console.log(props)

  const updateOneItem = (item) => {
    console.log(item)
    props.updateItemPropertyComplete(item)
    console.log(item)
    let res = response.map((items, i) => 
      items._id === item._id ? {...items, complete: !items.complete } : items
    )
    console.log(res)
    setResponse(res)
  }

  const deleteOneItem = (item) => {
    props.deleteItem(item)
    let res = response.filter(items => items !== item)
    console.log(res)
    setResponse(res)
    console.log(response)
    
  }
  
  useEffect(() => {
    console.log(props)
    const getData = async () => {
      await props.asyncGetData()
      
      setResponse(props.todoList)
      setLoading(false)
    }
    console.log(props)
    getData();
  }, []);

  useEffect(() => {
    console.log(response)
    setResponse(props.todoList)
  })

  if (isLoading === true) {
    return <Container className="app">Loading...</Container>
  } else {
    return (
      <Grid container spacing={3} className={classes.root}>

        {response.map((item, i) => (
          <Grid item xs={6} className="todoListCard" key={i}>
            <Paper className={item.complete === true ? classes.completetrue : classes.completefalse}>
            
              <ListItem className="listItem">{<p className="listItemText">Task: {item.text}</p>}</ListItem>
              
              <ListItem className="listItem">{<p className="listItemText">For: {item.assignee}</p>}</ListItem>
              
              <ListItem className="listItem">Difficulty: {<p className="listItemText">{item.difficulty}</p>}</ListItem>
              
              <Button className="completeButton" onClick={() => {updateOneItem(item)}}>complete</Button>

              <Button className="deleteButton" onClick={() => {deleteOneItem(item)}}>Delete</Button>
            </Paper>
            
          </Grid>
        ))}
      </Grid>
    )
  }
}

const mapStateToProps = state => (console.log(state), {
  todoList: state.reducers
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)