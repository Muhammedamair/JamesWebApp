import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      service: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      service: Yup.string().required('Please select a service'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`border p-2 w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`border p-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
      </div>

      <div>
        <select
          name="service"
          className={`border p-2 w-full ${formik.touched.service && formik.errors.service ? 'border-red-500' : ''}`}
          {...formik.getFieldProps('service')}
        >
          <option value="">Select Service</option>
          <option value="tv">TV Repair</option>
          <option value="laptop">Laptop Repair</option>
        </select>
        {formik.touched.service && formik.errors.service ? <div className="text-red-500">{formik.errors.service}</div> : null}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
