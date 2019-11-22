import React from 'react'
import './Child.css'


const Child = (props) => <li className="list-group-item" onClick={props.clicks}>
  {props.students.name}, age: {props.students.age}
</li>

export default Child