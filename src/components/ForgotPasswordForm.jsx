import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to your backend to handle forgot password logic
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message); // Display success or error message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container forgotpass text-center py-4'>
      <h2 className='py-2'>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label >
         <b> Email: </b>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <button className='resetbtn' type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPasswordForm;
