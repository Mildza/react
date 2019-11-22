import { useState, useEffect } from "react";

export const useInput = (initialState, validator) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({})
  const [isSubmited, setIsSubmited] = useState(false)

  useEffect(() => {
    if (isSubmited) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        setIsSubmited(true)
      } else {
        setIsSubmited(false)
      }
    }
    return () => {
    };
  }, [errors, isSubmited])

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const blurHandler = () => {
    const validationErrors = validator(values)
    setErrors(validationErrors)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const validationErrors = validator(values)
    setErrors(validationErrors)
    setIsSubmited(true)
  }

  return { values, errors, isSubmited, changeHandler, blurHandler, submitHandler }
};