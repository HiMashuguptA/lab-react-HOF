import React, { Component } from "react";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";
import Task6 from "./Task6";

export default class HOF extends Component {
    constructor() {
        super();
        this.state = {
            User_Collections: [
                { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
                { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
                { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
                { id: "4", name: "Sam", user_type: "Dancer", age: 58, years: 25 },
                { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
            ],
        };
    }
    render() {
        return (
            <div>
                <Task2 data={this.state.User_Collections} />
                <Task3 data={this.state.User_Collections} />
                <Task4 data={this.state.User_Collections} />
                <Task5 data={this.state.User_Collections} />
                <Task6 data={this.state.User_Collections} />
            </div>
        );
    }
}