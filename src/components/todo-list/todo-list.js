import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { deleteItem, asyncGetData } from '../../store/actions/actions';

const mapDispatchToProps = { deleteItem, asyncGetData };


const TodoList = (props) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [listItem, setListitem] = useState([]);
  console.log(props)

  
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

  useEffect(() => {
    console.log(props)
    //setResponse(props.todoList)
  }, [response])

  useEffect(() => {
   
  }, [])


  if (isLoading === true) {
    return <div className="app">Loading...</div>
  } else {
    return (
      <div className="todoForm">
        <h1>list Proof of life</h1>
        {response.map((item, i) => (
          <div key={i}>
            <ul>
              <li>Task: {item.text}</li>
              <li>For: {item.assignee}</li>
              <li>Difficulty: {item.difficulty}</li>
              <Button onClick={() => {deleteOneItem(item)}}>Delete</Button>
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => (console.log(state), {
  todoList: state.reducers
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)