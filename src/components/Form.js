import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    channel:''
}
const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }

const validationSchema = Yup.object({
    firstName: Yup.string().required('Your name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Your email is required'),
    gender: Yup.string().required('Please enter your gender'),
    age: Yup
    .number()
    .required("Please supply your age")
    .min(18, "You must be at least 18 years")
    .max(60, "You must be at most 60 years"),
    contact:Yup
    .number()
    .required('Your contact number is required')
    .max(10,'The contact number should be of 10 digits'),
    password:Yup
    .string()
    .required('Password is necessary')
    .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
      confirmPassword: Yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
    })
  })

function SignUpForm() {
    return (
        <Formik 
        initialValues = {initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            <Form>
                <label htmlFor = 'name'>First Name </label>
                <Field type = 'text' id='firstName' name = 'firstName'/>
                <ErrorMessage name='firstName' />

                <label htmlFor = 'name'>Last Name </label>
                <Field type = 'text' id='lastName' name = 'lastName'/>
                <ErrorMessage name='lastName' />
               
                <label htmlFor = 'gender'>Gender </label>
                <Field type = 'text' id='gender' name = 'gender' placeholder/>
                <ErrorMessage name='gender' />

                <label htmlFor = 'age'>Age </label>
                <Field type = 'text' id='age' name = 'age'/>
                <ErrorMessage name='age' />

                <label htmlFor = 'email'>Email </label>
                <Field type = 'text' id='email' name = 'email'/>
                <ErrorMessage name='email' />

                <label htmlFor = 'contact'>Contact Number </label>
                <Field type = 'text' id='contact' name = 'contact'/>
                <ErrorMessage name='contact' />

                <label htmlFor = 'password'>Password </label>
                <Field type = 'text' id='password' name = 'password'/>
                <ErrorMessage name='password' />

                <label htmlFor = 'confirmPassword'>Confirm Password </label>
                <Field type = 'text' id='confirmPassword' name = 'confirmPassword'/>
                <ErrorMessage name='confirmPassword' />
                

                <button type = 'Submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default SignUpForm
