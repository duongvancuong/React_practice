import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <div className='kickass_field'>
            <input maxlength='30' required='required' />
            <lable>
              Username
              <span>Your chosen username</span>
            </lable>
          </div>
          <div className='kickass_field'>
            <input maxlength='30' required='required' type='email' />
            <lable>
              Email address
              <span>Your current email address</span>
            </lable>
          </div>
          <div className='kickass_field'>
            <input maxlength='30' pattern='.{6,}' required='required' type='password' />
            <lable>
              Password
              <span>Minimum of 6 characters</span>
            </lable>
          </div>
          <button>Sign up</button>
        </fieldset>
      </div>
    )
  }
}

export default SignUp;
