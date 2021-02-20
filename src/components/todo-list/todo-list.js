import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions';


const TodoList = (props) => {
  console.log(props)
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className="todoForm">
      <h1>list Proof of life</h1>
      {props.todoList.map((item, i) => (
        <div key={i}>
          <ul>
            <li>Task: {item.text}</li>
            <li>For: {item.assignee}</li>
            <li>Difficulty: {item.difficulty}</li>

          </ul>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => (console.log(state), {
  todoList: state.reducers.list
})

export default connect(mapStateToProps)(TodoList)