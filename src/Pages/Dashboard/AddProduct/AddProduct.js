import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleAddProduct = data => {
  //  const newProduct =  {
  //     name:"Apple 13pro",
  //     img:"https://i.postimg.cc/5yWxvkWH/apple.jpg","brand":"Apple",description:{
  //     resalePrice:{"$numberInt":"85000"},
  //     originalPrice:{"$numberInt":"100000"},
  //     yearsOfUse:"6th month",
  //     location:"Uttara, Dhaka",
  //     date:"11-11-2022",
  //     sellerName:"Md Tanin Rahman",
  //     sellerEmail: 
  //   }}
  }
  return (
      <div className='w-full my-12 p-10'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Add A Product</h2>
        <p className='text-sm text-gray-500 mt-3'>Enter product details to add product</p>
      </div>
     <form onSubmit={handleSubmit(handleAddProduct)} className='mt-4'>          
          <label className='label'>Product Name</label>
          <input className='border p-3 w-full'
           {...register("productName", {required: "Product Name is required"})}
           placeholder='Enter Product Name'/>
           {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}

          <label className='label'>Your Email</label>
          <input className='border p-3 w-full' {...register("email")} placeholder='Enter Your Email'/>

          <label className='label'>Brand</label>
          <select {...register('brand')} className="select select-bordered w-full">
            <option defaultValue>Apple</option>
            <option>Samsung</option>
            <option>Oppo</option>
          </select>

          <label className='label'>Resale Price</label>
          <input type='text' className='border p-3 w-full' {...register("resalePrice", {required: "Resale price is required"})} placeholder='Enter Resale Price'/>
          {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}

          <label className='label'>Original Price</label>
          <input type='text' className='border p-3 w-full' {...register("originalPrice", {required: "Original price is required"})} placeholder='Enter Original Price'/>
          {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}

          <label className='label'>Location</label>
          <input type='text' className='border p-3 w-full' {...register("location", {required: "Location is required"})} placeholder='Enter Your location'/>
          {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}

          <label className='label'>Age of Use</label>
          <input type='text' className='border p-3 w-full' {...register("ageOfUse", {required: "Age of use is required"})} placeholder='Enter use time'/>
          {errors.ageOfUse && <p className='text-red-600'>{errors.ageOfUse?.message}</p>}

          <div className='flex justify-between items-center'>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white' type="submit" value='Add Product' />
          </div>
    </form>
    </div>
  );
};

export default AddProduct;