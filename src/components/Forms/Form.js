import React from 'react'
import { useInput } from '../../shared/inputHooks'
import validator from '../../shared/validator'
import './Form.css'

const INITIAL_STATE = {
  firstName: '',
  email: '',
  password: '',
  skill: 'beginner',
  gender: 'other'
}

function Form() {

  const { values, errors, isSubmited, changeHandler, blurHandler, submitHandler } = useInput(INITIAL_STATE, validator)

  return (
    <div>
      <form className="form-group" onSubmit={submitHandler}>

        <input type="text"
          name="firstName"
          value={values.firstName}
          onBlur={blurHandler}
          onChange={changeHandler}
          className={"form-control " + (errors.firstName && 'invalid')}
          placeholder="Enter name">
        </input>
        {errors.firstName && <small>{errors.firstName}</small>}

        <input type="text"
          name="email"
          value={values.email}
          onChange={changeHandler}
          onBlur={blurHandler}
          className={"form-control " + (errors.email && 'invalid')}
          placeholder="Enter email">
        </input>
        {errors.email && <small>{errors.email}</small>}

        <input type="password" className="form-control"
          name="password"
          value={values.password}
          onChange={changeHandler}
          onBlur={blurHandler}
          placeholder="Enter password"
          autoComplete="true">
        </input>

        <div className="form-group mt-3">
          <select className="form-control" name='skill'
            value={values.skill}
            onChange={changeHandler}>
            <option>begginer</option>
            <option>advanced</option>
            <option>master</option>
          </select>
        </div>

        <div className="form-control my-3" >
          <label className="mr-3">
            <input type="radio" name="gender" checked={values.gender === 'male'} value="male" onChange={changeHandler} /> Male
        </label>
          <label className="mr-3">
            <input type="radio" name="gender" checked={values.gender === 'female'} value="female" onChange={changeHandler} /> Female
        </label>
          <label >
            <input type="radio" name="gender" checked={values.gender === 'other'} value="other" onChange={changeHandler} /> Other
        </label>
        </div>
        <button type="submit" className="btn btn-warning" onClick={submitHandler} >sumbit</button>
      </form>
      {isSubmited ? (
        <div>
          <p>Name: {values.firstName}</p>
          <p>Email: {values.email}</p>
          <p>Password: {values.password}</p>
          <p>Skill: {values.skill}</p>
          <p>Gender: {values.gender}</p>
        </div>) : null}

    </div>
  )

}

export default Form

