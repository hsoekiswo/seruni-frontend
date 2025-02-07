import { useState } from 'react'
import { BackNav } from '../../components/Nav'

function Registration() {
  const URL = 'https://seruni-backend-production.up.railway.app';

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
  });
  const [users, setUsers] = useState({});

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        // mode: 'no-cors',
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

  const handleUser = async() => {
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.status === 204 ? null : await response.json();
      console.log('Response from backend:', data);

      if (response.ok) {
        setUsers(data);
      } else {
        alert('Error get users!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  }

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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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