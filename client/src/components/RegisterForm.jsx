import React from 'react';

const RegisterForm = props => {
  return (
    <div className="container">
      <form className="add" onSubmit={props.handleRegisterSubmit}>
        <div className='form-group'>
          <span className='input-group'>
            <span className='input-group-addon'>UserName</span>
            <input 
            className='form-control' 
            type="text"
            name="registerUserName"
            placeholder="User Name"
            value={props.registerUserName}
            onChange={props.handleInputChange}
            required />
          </span>
        </div>
        <div className='form-group'>
          <span className='input-group'>
            <span className='input-group-addon'>Password</span>
            <input 
            className='form-control' 
            type="password"
            placeholder="Password"
            name="registerPassword"
            value={props.registerPassword}
            onChange={props.handleInputChange}
            required />
          </span>
        </div>
        <div className='form-group'>
          <span className='input-group'>
            <span className='input-group-addon'>Email</span>
            <input 
            className='form-control' 
            type="email"
            placeholder="Email"
            name="registerEmail"
            value={props.registerEmail}
            onChange={props.handleInputChange}
            required />
          </span>
        </div>
        <div className='form-group'>
          <span className='input-group'>
            <span className='input-group-addon'>First Name</span>
            <input 
            className='form-control' 
            type="text"
            placeholder="First Name"
            name="registerFirstName"
            value={props.registerFirstName}
            onChange={props.handleInputChange}
            required />
          </span>
        </div>
        <div className='form-group'>
          <span className='input-group'>
            <span className='input-group-addon'>Last Name</span>
            <input 
            className='form-control' 
            type="text"
            placeholder="Last Name"
            name="registerLastName"
            value={props.registerLastName}
            onChange={props.handleInputChange}
            required />
          </span>
        </div>
        <input type="submit" value="Register!" className="btn bookingbtn" />
      </form>
    </div>
  );
};

export default RegisterForm;