import React from "react";
import { getTodosFromAPI, deleteTodo, changeTodo, addTodo, get_todos } from '../api'
import {parse_json, parse_to_api_format, parse_todo} from '../utils/utils'
import './Task.css'


const Todo = props => (
  <li>
    <h5>{props.todo.name}</h5>
    <div className="inside">
      <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
      <span className={"underlined".repeat(props.todo.checked)}>{props.todo.text}</span>
      <button className="btn dltBtn" onClick={props.onDelete}>Delete</button>
    </div>
  </li>
  )

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      cur_todos: [],
      btn_state: [true, false],
      isDone: false,
    }


    
  }

    

  componentDidMount = () => {
    getTodosFromAPI()
    .then(res => {
      this.setState({todos: parse_json(res)})
      this.changeMenu(false)
    })
  }


  componentDidUpdate = () => {

  }

  addTodo(max_id) {
    const name = prompt("TODO name please!")
    const text = prompt("TODO text please!")
    if(name === "" || text == ""){
      alert("Не заполнены обязательные поля!")
      return;
    }
    getTodosFromAPI()
    .then(res => {
      let max_id = 0
      let ids = res.map(res=>{
        return res.id
      })
      max_id = Math.max.apply(Math, ids)
      let id = max_id + 1
      if(Number.isNaN(id)){
        alert("Ошибка");
      return;
      }
      let todo = {id: id, name: name ,text: text, checked: false}
      todo = parse_to_api_format(todo)
      addTodo(todo)
        .then(res => {
          if(res.hasOwnProperty("Error")){
            alert("Ошибка")
            return -1;
          }else{
            this.setState({todos: parse_json(res)})
            this.changeMenu(this.state.isDone)

          }
          
        })
    })


  }

  removeTodo(id) {
    //this.setState({todos:this.state.todos.splice(id,1)})
    deleteTodo(id)
      .then(res =>{
        if(res.hasOwnProperty("Error")){
          alert("Ошибка")
          return;
        }
        this.setState({todos: parse_json(res)})
        this.changeMenu(this.state.isDone)
      })
  } 

  toggleTodo(id) {
    let data = this.state.todos.find(x => x.id ===id)
    data = {...data, checked: !data.checked}
    data = parse_to_api_format(data)
    changeTodo(id, data)
      .then(res => {
        if(res.hasOwnProperty("Error")){
          alert("Ошибка")
          return;
        }
        this.setState({todos: parse_json(res)})
        this.changeMenu(this.state.isDone)
      })

    
  }

  changeMenu(isDone){
    this.setState({isDone: isDone})
    let todos = this.state.todos.filter((todo) =>{
      return todo.checked === isDone;
    })
    let btn_state = this.state.btn_state
    btn_state[Number(isDone)] = false
    btn_state[Number(!isDone)] = true
    this.setState({cur_todos: todos})
    this.setState({btn_state: btn_state})


  }
    
    render() {
        return (
            <div>
                <div className="wrapper">
                    <header>ToDo App</header>
                    <div id="todoCounter1">
                      <div>Todo count: {this.state.todos.length}</div>
                      <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
                    </div>
                    <div>
                      <div className="tabPanel">
                        <button className={"tabBtn".repeat(this.state.btn_state[0]) || "tabBtn notActive"} onClick={() => this.changeMenu(false)}>In process</button>
                        <button className={"tabBtn".repeat(this.state.btn_state[1]) || "tabBtn notActive"} onClick={() => this.changeMenu(true)}>Done</button>
                      </div>
                      <ul className={"todoList"}>
                        {this.state.cur_todos.map(todo => (
                            <Todo
                            onToggle={() => this.toggleTodo(todo.id)}
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                            />
                        ))}
                      </ul> 
                    </div>
                    <button className="addBtn" onClick={() => this.addTodo()}>Add task</button>
                </div>
            </div>
        )
    }

}