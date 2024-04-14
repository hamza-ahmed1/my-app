import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


function Signup() {
  const validation = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    age: yup.number().required('Age is required').positive('Age must be a positive number'),
  });

  return (
    <div className="container">
      <Formik
        validationSchema={validation}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          age: '',
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
        
            <Field type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password"/>
            <ErrorMessage name="confirmPassword" className="text-danger" />
            <br/>
            
            <Field type="text" name="firstName" className="form-control" placeholder="First Name"/>
            <ErrorMessage name="firstName" className="text-danger" />
            <br/>
            
            <Field type="text" name="lastName" className="form-control" placeholder="Last Name"/>
            <ErrorMessage name="lastName" className="text-danger" />
            <br/>
            
            <Field type="number" name="age" className="form-control" placeholder="Enter Age"/>
            <ErrorMessage name="age" className="text-danger" />
            <br/>
            <br />
            <button type="submit" className="btn btn-light mt-2" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
