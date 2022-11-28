import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/banner.png';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import saveUser from '../Shared/SaveUser/SaveUser';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser, googleSignIn, updateUser, logOut } = useContext(AuthContext);
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();


  const handleSignup = data => {
    setSignupError('');
    createUser(data.email, data.password)
    .then(result => {
      // console.log(user);
      const profile = {displayName: data.name}
      updateUser(profile)
      .then(() => {
        saveUser(data.name, data.email, data.role);
        logOut();
        navigate('/login');
      })
      .catch(err => console.log(err));      
      
    })
    .catch(error => {
      setSignupError(error.message);
    });
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      const role = 'Buyer';
      saveUser(user.displayName, user.email, role);
      fetch(`https://used-product-resale-server-smoky.vercel.app/jwt?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
          if (data.accessToken) {
              localStorage.setItem('accessToken', data.accessToken);
              navigate('/');
              toast.success('Successfully Login');
          }
      });
    })
    .catch(err => {
      setSignupError(err.message);
    });
  }
  return (
   <div className=' flex justify-center items-center ' style={{
    background: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
   }}>
     <div className='w-5/6 md:w-3/5 lg:w-2/5 my-10 md:my-16  mx-auto p-6 md:p-10 bg-white'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Sign Up</h2>
        <p className='text-sm text-gray-500 mt-3'>Enter SignUp details to get access</p>
      </div>
     <form onSubmit={handleSubmit(handleSignup)} className='mt-4'>          
          <label className='label'>Full Name</label>
          <input className='border p-3 w-full'
           {...register("name", {required: "Full name is required."})}
           placeholder='Enter Full Name'/>
           {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

          <label className='label'>Email Address</label>
          <input className='border p-3 w-full' 
          {...register("email", {required: "Email Address is required."})}
           placeholder='Enter Email Address'/>
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

          <label className='label'>Who you are?</label>
          <select {...register('role')} className="select select-bordered w-full">
            <option defaultValue>Buyer</option>
            <option>Seller</option>
          </select>

          <label className='label'>Password</label>
          <input type='password' className='border p-3 w-full' {...register("password", {required: "Password is required.",
         minLength: { value: 6, message: 'Password must be 6 characters or longer' }})} placeholder='Enter Password'/>
          {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          <p className='text-red-600 my-2'>{signupError}</p>
          <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
            <p className='mt-3'>Already have an account? <Link className='text-[#fd8f5f]' to='/login'>Login.</Link></p>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white w-full md:w-fit' type="submit" value='Sign Up' />
          </div>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className='border text-[#fd8f5f] px-8 py-2 w-full hover:bg-[#fd8f5f] hover:text-white border-[#fd8f5f]'><Link>Continue With Google</Link></button>
    </form>
    </div>
   </div>
  );
};

export default Signup;