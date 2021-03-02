import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Button, Card, Container, List, ListItem } from '@material-ui/core'
import { asyncGetData, deleteItem, updateItem} from '../../store/actions/actions';
import './todo-list.scss'

const mapDispatchToProps = { asyncGetData, deleteItem, updateItem };

const TodoList = (props) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [listItem, setListitem] = useState([]);
  console.log(props)

  const updateOneItem = (item) => {
    console.log(item)
    props.updateItem(item)
    console.log(item)
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
    return <div className="app">Loading...</div>
  } else {
    return (
      <Container className="todoList">
        <h1>list Proof of life</h1>
        {response.map((item, i) => (
          <Card className="todoListCard" key={i}>
            <List className={`complete-${item.complete.toString()}`}>
            
              <ListItem className="listItem" alignItems="flex-start">Task: {item.text}</ListItem>
              
              <ListItem className="listItem">For: {item.assignee}</ListItem>
              
              <ListItem className="listItem">Difficulty: {item.difficulty}</ListItem>
              
              <Button onClick={() => {updateOneItem(item)}}>complete</Button>

              <Button onClick={() => {deleteOneItem(item)}}>Delete</Button>
            </List>
            
          </Card>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = state => (console.log(state), {
  todoList: state.reducers
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)