import React from 'react'

function Details(props) {

  function goBack() {
    props.history.goBack()
  }

  return (
    <div className="col-md-8 offset-md-2 text-center">
      <h1>Details page</h1>
      <p>{props.match.params.name}</p>
      {console.log(props)}
      <button className="btn btn-warning" onClick={goBack}>Go Back</button>
    </div>
  )
}



export default Details