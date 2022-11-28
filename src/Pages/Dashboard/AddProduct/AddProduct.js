import React from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = data => {
    const image = data.image[0];
    const imageHostKey = process.env.REACT_APP_image_key;
    const formData = new FormData();
    formData.append('image', image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        const newProduct = {
          name: data.productName,
          img: imgData.data.url,
          brand: data.brand,
          sellerName:"Md Tanin Rahman",
          sellerEmail: data.email,
          userVerification: null,
          description: {
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            yearsOfUse: data.ageOfUse,
            location: data.location,
            date: format(new Date(), "PP")
          }
        };

         // Post add product to DB
          fetch('https://beche-daw-server.vercel.app/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged){
              toast.success('Product added successfully.');
              navigate('/dashboard/my-products');
            }
          })
      }
    })
  }    

  return (
      <div className='w-full mx-auto lg:p-10'>
      <div className='text-center'>
        <h2 className='text-2xl lg:text-3xl font-bold'>Add A Product</h2>
        <p className='text-sm text-gray-500 mt-3'>Enter product details to add product</p>
      </div>
     <form onSubmit={handleSubmit(handleAddProduct)} className='mt-4'>          
          <label className='label'>Product Name</label>
          <input className='border p-3 w-full'
           {...register("productName", {required: "Product Name is required"})}
           placeholder='Enter Product Name'/>
           {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}

          <label className='label'>Your Email</label>
          <input className='border p-3 w-full' readOnly defaultValue={user?.email} {...register("email")}/>

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
          <select className='border p-3 w-full mb-4' {...register("ageOfUse", {required: "Age of use is required"})}>
             <option defaultValue>1 month</option>
             <option>2 month</option>
             <option>3 month</option>
             <option>4 month</option>
             <option>5 month</option>
             <option>6 month</option>
             <option>7 month</option>
             <option>8 month</option>
             <option>9 month</option>
             <option>10 month</option>
             <option>11 month</option>
             <option>More than 1 year</option>
          </select>
          {errors.ageOfUse && <p className='text-red-600'>{errors.ageOfUse?.message}</p>}

          <input type="file"
          {...register('image', {required: "Image is required"})}
          className="file-input file-input-bordered w-full max-w-xs" />
          {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}

          <div className='flex justify-between items-center'>
            <input className='border px-8 py-2 mt-5 bg-[#fd8f5f] text-white' type="submit" value='Add Product' />
          </div>
    </form>
    </div>
  );
};


export default AddProduct;