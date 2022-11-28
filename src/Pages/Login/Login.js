import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/banner.png';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import saveUser from '../Shared/SaveUser/SaveUser';



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleLogin = data => {
    setLoginError('');
    login(data.email, data.password)
    .then(result => {
      const user = result.user;
      const role = 'Buyer';
      saveUser(user.displayName, user.email, role);
      fetch(`http://localhost:5000/jwt?email=${data.email}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.accessToken) {
              console.log(data);
              localStorage.setItem('accessToken', data.accessToken);
              navigate(from, {replace: true});
              toast.success('Successfully Login');
          }
      });
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
      fetch(`http://localhost:5000/jwt?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.accessToken) {
              console.log(data);
              localStorage.setItem('accessToken', data.accessToken);
              navigate(from, {replace: true});
              toast.success('Successfully Login');
          }
      });
    })
    .catch(err => console.log(err));
  }
  return (
   <div className=' flex justify-center items-center ' style={{
    background: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
   }}>
     <div className='w-5/6 md:w-3/5 lg:w-2/5 my-10 md:my-16 mx-auto p-6 md:p-10 bg-white'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Login</h2>
        <p className='text-sm text-gray-500 mt-3'>Enter Login details to get access</p>
      </div>
     <form onSubmit={handleSubmit(handleLogin)} className='mt-4'>          
          <label className='label'>Email Address</label>
          <input className='border p-3 mb-3 w-full' {...register("email",
          {required: "Email Address is required."}
          )} placeholder='Email Address'/>
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

          <label className='label'>Password</label>
          <input className='border p-3 w-full' {...register("password",
          {required: "Password is required."}
          )} placeholder='Password'/>
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

          <label className="label text-[#fd8f5f]">Forgot Password?</label>
          <p className='my-2 text-red-600'>{loginError}</p>
          <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
            <p className='mt-3'>New to BecheDaw.com? <Link className='text-[#fd8f5f]' to='/signup'>Create an account.</Link></p>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white w-full md:w-fit' type="submit" value='Login' />
          </div>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className='border px-8 text-[#fd8f5f] py-2 w-full hover:bg-[#fd8f5f] hover:text-white border-[#fd8f5f]'><Link>Continue With Google</Link></button>
    </form>
    </div>
   </div>
  );
};

export default Login;