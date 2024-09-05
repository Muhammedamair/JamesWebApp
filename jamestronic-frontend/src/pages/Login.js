import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { AuthContext } from '../context/AuthContext';
import * as Yup from 'yup';

const Login = () => {
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Mock login logic; replace with your API call
      const mockUser = { email: values.email };
      login(mockUser);
      alert('Logged in successfully');
    },
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
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

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
