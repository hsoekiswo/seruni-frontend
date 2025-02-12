import { useState } from 'react';
import { Link } from 'react-router';
import { HomeNav } from '@components/shared/Nav';
import { handleChange, handleSubmit } from '@utils/form/formUtils';

function Registration() {
  const path = '/register'
  const URL = 'https://seruni-backend-production.up.railway.app' + path;

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
  });

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };
  
  return (
    <>
      <HomeNav />
      <div className='form-background'>
        <div className='form-container mt-10'>
          <h1 className='form-title'>Registration</h1>

          <form onSubmit={(e) => handleSubmit(e, URL, params)}>
            <div className='mb-4'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={(e) => handleChange(e, setFormData, formData)}
                autoComplete='off'
                className='form-input'
              >
              </input>
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={(e) => handleChange(e, setFormData, formData)}
                autoComplete='off'
                className='form-input'
              ></input>
            </div>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={(e) => handleChange(e, setFormData, formData)}
                autoComplete='off'
                className='form-input'
              ></input>
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={(e) => handleChange(e, setFormData, formData)}
                autoComplete='off'
                className='form-input'
              ></input>
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='form-label'>
                Phone
              </label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={(e) => handleChange(e, setFormData, formData)}
                autoComplete='off'
              className='form-input'
              ></input>
            </div>
            <button
              type='submit'
              className='form-button'
            >
              Register
            </button>
          </form>
          <div className='mt-3'>
            <p>
              Have an account?
              <Link to='/login'> Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;