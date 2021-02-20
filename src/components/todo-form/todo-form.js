import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, FormGroup, Input, InputLabel, Paper, Slider } from '@material-ui/core';
import { addItem } from '../../store/actions'

import './todo-form.scss'

const mapDispatchToProps = { addItem }

const TodoForm = (props) => {
  const [item, setItem] = useState([])
  
  useEffect((item) => {

    console.log(`form useeffect triggering ${item}`)
    
  })

  const inputChangeHandler = e => {

    setItem({ ...item, [e.target.name]: e.target.value })
  }


  const sliderChangeHandler = (e, value) => {
    console.log(`${e.target} value: ${value}`);
    e.target.name = 'difficulty'
    setItem({ ...item, [e.target.name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button working');
    setItem(item)
    console.log(item);
    props.addItem(item)
  }

  return (
    // <h1>todoForm Proof of life</h1>
    <Paper>
      <FormGroup className="Form">
        <FormControl>
          <InputLabel>Task</InputLabel>
          <Input name="text" autoComplete="true" defaultValue="enter task here"
            onChange={inputChangeHandler}
          />
          <Slider
            name="difficulty"

            step={1}
            marks

            min={1}
            max={5}
            onChange={sliderChangeHandler}
          />

        </FormControl>
        <FormControl>
          <InputLabel>Assignee</InputLabel>
          <Input name="assignee" defaultValue="Garrett" onChange={inputChangeHandler} />
        </FormControl>
        <Button onClick={handleClick}>Submit</Button>
      </FormGroup>
    </Paper>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
