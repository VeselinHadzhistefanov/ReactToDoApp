import React, {Component} from 'react';
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
            newItemText: ""
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

    createNewToDoItem = () => {
        if (!this.state.todoItems
            .find(item => item.action === this.state.newItemText)) {

            this.setState({
                todoItems: [...this.state.todoItems, {action: this.state.newItemText, done: false}],
                newItemText: ""
            })
        }
    }

    toggleTodo = (todo) => this.setState({
        todoItems:
            this.state.todoItems.map(item => item.action === todo.action
                ? {...item, done: !item.done} : item)
    });

    todoTableRows = () => this.state.todoItems.map(item =>
        <tr key={item.action}>
            <td>{item.action}</td>
            <td>
                <input type="checkbox" checked={item.done}
                       onChange={() => this.toggleTodo(item)}/>
            </td>
        </tr>);

    render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    {this.state.userName}{this.state.userName === "Veselin" ? "'s" : ""} To Do List for
                    the {this.state.date}
                    ({this.state.todoItems.filter(t => !t.done).length} items to do)
                </h4>

                <button className="btn btn-primary m-2"
                        onClick={this.changeStateData}>
                    Change view
                </button>

                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control"
                               value={this.state.newItemText}
                               onChange={this.updateNewTextValue}/>
                        <button className="btn btn-primary mt-1"
                                onClick={this.createNewToDoItem}>Add
                        </button>
                    </div>
                </div>

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
        )
    };
}