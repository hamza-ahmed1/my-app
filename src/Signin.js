

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function Signin() {
  const validation = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <div className="container">
      <Formik
        validationSchema={validation}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-group bg-dark-purple text-light p-4 rounded">
            <Field type="email" name="email" className="form-control" placeholder="Enter email" />
            <ErrorMessage name="email" className="text-danger" /> 
            <br/>

            <Field type="password" name="password" className="form-control" placeholder="Enter Password"/>
            <ErrorMessage name="password" className="text-danger" />
            <br/>
        
            <button type="submit" className="btn btn-light mt-2" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signin;
