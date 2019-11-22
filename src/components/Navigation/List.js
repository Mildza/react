import React from 'react'
import { Link } from 'react-router-dom'

function List() {
  const data = [
    { name: "Maja", age: 43 },
    { name: "Kaca", age: 33 },
    { name: "Jeka", age: 23 }
  ]

  return (

    data.map(el => {
      return <li className="list-group-item" key={el.name}><Link to={'/routing/' + el.name}>{el.name}</Link></li>
    })


  )
}

export default List