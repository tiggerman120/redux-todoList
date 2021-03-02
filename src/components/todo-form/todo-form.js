import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, FormGroup, Input, InputLabel, Paper, Slider } from '@material-ui/core';
import { addItem } from '../../store/actions/actions'


const mapDispatchToProps = { addItem }

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    width: '50vw',
    alignItems: 'center',
  },
  formGroup: {

  }
}))


const TodoForm = (props) => {
  const [item, setItem] = useState([])
  const classes = useStyles();

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
      props.addItem(item)
      setItem(item)
      console.log(item);
    }

  return (
    // <h1>todoForm Proof of life</h1>
    <Paper className="form">
      <FormGroup className={classes.root}>
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
    todoList: state.reducers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
