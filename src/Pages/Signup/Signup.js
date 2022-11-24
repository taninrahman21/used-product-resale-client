import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/banner.png';
import { AuthContext } from '../../contexts/UserContext/UserContext';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const {createUser, googleSignIn} = useContext(AuthContext);
  const [signupError, setSignupError] = useState('');

  const handleSignup = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      setSignupError(error.message);
    });
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user);
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
        <h2 className='text-3xl font-bold'>Sign Up</h2>
        <p className='text-sm text-gray-500 mt-3'>Enter SignUp details to get access</p>
      </div>
     <form onSubmit={handleSubmit(handleSignup)} className='mt-4'>          
          <label className='label'>Full Name</label>
          <input className='border p-3 mb-3 w-full'
           {...register("name")} 
           
           placeholder='Enter Full Name'/>
          <label className='label'>Email Address</label>
          <input className='border p-3 mb-3 w-full' {...register("email")} placeholder='Enter Email Address'/>
          <label className='label'>Who you are?</label>
          <select {...register('role')} className="select select-bordered w-full">
            <option defaultValue>Buyer</option>
            <option>Seller</option>
          </select>
          <label className='label'>Password</label>
          <input type='password' className='border p-3 w-full' {...register("password")} placeholder='Enter Password'/>
          <div className='flex justify-between items-center'>
            <p className='mt-3'>Already have an account? <Link className='text-[#fd8f5f]' to='/login'>Login.</Link></p>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white' type="submit" value='Sign Up' />
          </div>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className='border text-[#fd8f5f] px-8 py-2 w-full hover:bg-[#fd8f5f] hover:text-white border-[#fd8f5f]'><Link>Continue With Google</Link></button>
    </form>
    </div>
   </div>
  );
};

export default Signup;