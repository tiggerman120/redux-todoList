import { useEffect } from 'react';
import { connect } from 'react-redux';


const TodoForm = (props) => {
  console.log(props)
  useEffect(() => {

  }, [])

  return (
    <div className="todoForm">
      <h1>form Proof of life</h1>
      {props.todoList.map((item, i) => (
        <div key={i}>
          {item.text}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => (console.log(state), {
  todoList: state.reducers.list
})

export default connect(mapStateToProps)(TodoForm)