import React, { Component } from "react";
import Parent from "./Parrent";
import Child from "./Child";


export default class Grany extends Component {
  state = {
    car: {
      name: "Mazda",
      model: 3
    },
    inputName: "",
    students: [
      { name: "Maja", age: 43 },
      { name: "Kaca", age: 33 },
      { name: "Jeka", age: 23 }
    ]
  };

  changeCar = () => this.setState({ car: { name: "Punto", model: 1 } });
  typing = e => this.setState({ inputName: e.target.value });
  deleteStudents = (i) => {
    const tempStudent = [...this.state.students]
    tempStudent.splice(i, 1)
    this.setState({ students: tempStudent })
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <>
        <h3 className="text-center">Grany</h3>
        <p>Car name: {this.state.car.name} {this.state.car.model}</p>
        <p>Input: {this.state.inputName}</p>
        <hr />
        <Parent
          car={this.state.car}
          click={this.changeCar}
          inputName={this.state.inputName}
          typing={this.typing}
        >
          Childrens of the night!
        </Parent>
        {this.state.students.map((student, i) => {
          return <Child students={student}
            key={student.name} clicks={this.deleteStudents.bind(this, i)}>
          </Child>

        })}
      </>
    );
  }
}
