import React from 'react';
import Signup from '../components/Signup';

const SignupPage = () => (
  <div className="min-vh-100 d-flex align-items-center justify-content-center"
    style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #f4f6f9 100%)' }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <Signup />
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;