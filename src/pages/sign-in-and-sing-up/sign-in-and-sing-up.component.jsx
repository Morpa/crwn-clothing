import React from 'react';

import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sing-up.styles.scss';

const SignInAndSingUp = () => (
  <div className='sing-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSingUp;
