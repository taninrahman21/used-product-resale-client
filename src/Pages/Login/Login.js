import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/banner.png';

const handleLogin = data => {
  console.log(data)
}

const Login = () => {
  const { register, handleSubmit } = useForm();
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
          <div className='flex justify-between items-center'>
            <p className='mt-3'>New to BecheDaw.com? <Link className='text-[#fd8f5f]' to='/signup'>Create an account.</Link></p>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white' type="submit" value='Login' />
          </div>
          <div className="divider">OR</div>
          <button className='border px-8 text-[#fd8f5f] py-2 w-full hover:bg-[#fd8f5f] hover:text-white border-[#fd8f5f]'><Link>Continue With Google</Link></button>
    </form>
    </div>
   </div>
  );
};

export default Login;