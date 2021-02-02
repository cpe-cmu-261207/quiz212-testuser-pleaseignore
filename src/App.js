import React, { Component } from "react";
export default class Counter extends Component {

  function App() {
  
  constructor(Persons) {
    this.state = {
      count: 0
    };
    increment() {
  this.setState({
    this.state.count: this.state.count + 1
  });
};
decrement() {
  this.setState({
    this.state.count: this.state.count - 1
  });
};
reset() {
  this.setState({
    this.state.count: 0
  });
};
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      {/* Code me please! */}
      Current count: {this.state.count}
        <hr />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <button className='reset' onClick={this.reset}>Reset</button>
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>YOUR ID HERE</p>
        <button>-</button>
        <button>reset</button>
        <button>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
