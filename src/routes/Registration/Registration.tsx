import { useState } from 'react';
import { handleChange } from '../../utils/form';
import { BackNav } from '../../components/Nav';

function Registration() {
  const URL = 'https://seruni-backend-production.up.railway.app';

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <>
      <BackNav />
      <div className='form-background'>
        <div className='form-container mt-10'>
          <h1 className='form-title'>Registration</h1>

          <form onSubmit={handleSubmit}>
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
        </div>
      </div>
    </>
  );
}

export default Registration;