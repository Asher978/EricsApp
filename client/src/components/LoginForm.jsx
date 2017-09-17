import React from 'react';


const LoginForm = props => {
  return (
    <div className="container">
      <form className="add" onSubmit={props.handleLoginSubmit}>
        <div className='form-group'>
          <span className='input-group'>
            <span className='input-group-addon'>UserName</span>
            <input 
            className='form-control' 
            type="text"
            name="loginUserName"
            placeholder="Enter Your User Name"
            value={props.loginUserName}
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
            placeholder="Enter your Password"
            name="loginPassword"
            value={props.loginPassword}
            onChange={props.handleInputChange}
            required />
          </span>
        </div>
        <input type="submit" value="Log in!" className="btn bookingbtn" />
      </form> 
    </div>
  );
};

export default LoginForm;