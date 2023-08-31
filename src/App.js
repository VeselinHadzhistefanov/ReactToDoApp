import React, {Component} from 'react';
import {TodoBanner} from "./TodoBanner";
import {TodoCreator} from "./TodoCreator";
import {TodoRow} from "./TodoRow";

//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Veselin",
            date: "29th of August",
            todoItems: [{action: "Buy Flowers", done: false},
                {action: "Get Shoes", done: false},
                {action: "Collect Tickets", done: false}],
            //newItemText: ""
        }
    }

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Veselin" ? "My" : "Veselin"
        })
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value});
    }

    createNewTodo = (task) => {
        if (!this.state.todoItems.find(item => item.action === task)) {
            this.setState({
                todoItems: [...this.state.todoItems, {action: task, done: false}]
            });
        }
    }

    toggleTodo = (todo) => this.setState({
        todoItems:
            this.state.todoItems.map(item => item.action === todo.action
                ? {...item, done: !item.done} : item)
    });

    todoTableRows = () => this.state.todoItems.map(item =>
        <TodoRow key={item.action} item={item} callback={this.toggleTodo}/>)


    render() {

        return (
            <div>
                <TodoBanner name={this.state.userName} tasks={this.state.todoItems} date={this.state.date}/>

                <button className="btn btn-primary m-2"
                        onClick={this.changeStateData}>
                    Change view
                </button>

                <div className="container-fluid">
                    <TodoCreator callback={this.createNewTodo}/>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                        </thead>
                        <tbody>{this.todoTableRows()}</tbody>
                    </table>

                </div>
            </div>
        )
    };
}