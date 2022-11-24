import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/banner.png';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import saveUser from '../Shared/SaveUser/SaveUser';



const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();


  const handleLogin = data => {
    setLoginError('');
    login(data.email, data.password)
    .then(result => {
      const user = result.user;
    })
    .catch(err => {
      setLoginError(err.message);
    })
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      const role = 'Buyer';
      saveUser(user.displayName, user.email, role);
      navigate('/');
    })
    .catch(err => console.log(err));
  }
  return (
   <div className=' flex justify-center items-center ' style={{
    background: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
   }}>
     <div className='w-2/5 my-16 mx-auto p-10 bg-white'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Login</h2>
        <p className='text-sm text-gray-500 mt-3'>Enter Login details to get access</p>
      </div>
     <form onSubmit={handleSubmit(handleLogin)} className='mt-4'>          
          <label className='label'>Email Address</label>
          <input className='border p-3 mb-3 w-full' {...register("email")} placeholder='Email Address'/>
          <label className='label'>Password</label>
          <input className='border p-3 w-full' {...register("password")} placeholder='Password'/>
          <label className="label text-[#fd8f5f]">Forgot Password?</label>
          <p className='my-2 text-red-600'>{loginError}</p>
          <div className='flex justify-between items-center'>
            <p className='mt-3'>New to BecheDaw.com? <Link className='text-[#fd8f5f]' to='/signup'>Create an account.</Link></p>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white' type="submit" value='Login' />
          </div>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className='border px-8 text-[#fd8f5f] py-2 w-full hover:bg-[#fd8f5f] hover:text-white border-[#fd8f5f]'><Link>Continue With Google</Link></button>
    </form>
    </div>
   </div>
  );
};

export default Login;