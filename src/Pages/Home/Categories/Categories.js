import React from 'react';
import img1 from '../../../assets/apple.jpeg';
import img2 from '../../../assets/samsung.jpg';
import img3 from '../../../assets/oppo.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {id: 1, name: 'Apple', img: img1},
    {id: 2, name: 'Samsung', img: img2},
    {id: 3, name: 'Oppo', img: img3},
  ]
  return (
    <div className='w-5/6 mx-auto my-20'>
    <h2 className='border-l-4 text-3xl border-[#fd8f5f] uppercase pl-2 font-semibold '>Categories</h2>
     <div className='grid grid-cols-3 gap-14 mt-10'>
        {
            categories.map(category => <div className='border rounded-sm px-5 py-3' key={category.id}>
              <img className='w-full h-[200px]' src={category.img} alt="categoryImage" />
              <h2 className='text-3xl font-semibold mt-2'><Link to={`/category/${category.name}`}>{category.name}</Link></h2>
              </div>)
          }
     </div>
    </div>
  );
};

export default Categories;