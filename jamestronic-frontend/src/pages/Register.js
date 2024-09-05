import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      // This is where you'd normally handle registration logic, like calling an API
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...formik.getFieldProps('username')}
            className={`border p-2 w-full ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500">{formik.errors.username}</div>
          ) : null}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
            className={`border p-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
            className={`border p-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
            className={`border p-2 w-full ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
