import { ErrorMessage } from 'formik'
import React from 'react'

export function ErrorMessages({name}) {
  return (
    <div>
      <ErrorMessage name={name}/> 
    </div>
  )
}

