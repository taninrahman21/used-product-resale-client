import React from 'react';

const Blogs = () => {
  return (
    <div className='w-5/6 mx-auto my-10'>
     <h2 className='border-l-4 mb-8 text-2xl border-[#fd8f5f] uppercase pl-2 font-semibold '>BLogs</h2>
      <div>
        <div className='mb-5'>
          <h2 className='text-2xl font-semibold mb-2'>Question 1: What are the different ways to manage a state in a React application?</h2>
          <p className='text-xl text-gray-600'>In React apps, there are at least seven ways to handle the state.Here is some way to handle state like URL, Web Storage, Local State,Lifted State, Derived State.</p>
        </div>
        <div className='mb-5'>
          <h2 className='text-2xl font-semibold mb-2'>Question 2: How does prototypical inheritance work?</h2>
          <p className='text-xl text-gray-600'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__..</p>
        </div>
        <div className='mb-5'>
          <h2 className='text-2xl font-semibold mb-2'>Question 3: What is a unit test? Why should we write unit tests?</h2>
          <p className='text-xl text-gray-600 mb-2'>Unit testing is testing the smallest testable unit of an application. It is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct.</p>
          <p className='text-xl text-gray-600'>We should write unit test couse unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
        </div>
        <div className='mb-5'>
          <h2 className='text-2xl font-semibold mb-2'>Question 4: React vs. Angular vs. Vue?</h2>
          <p className='text-xl text-gray-600 mb-2'>Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.</p>
          <p className='text-xl text-gray-600'>Angular is used to create High performance and functionality at minimal cost,Maintenance,Reusability,Declarative UI and Simple architecture.React is  SEO Friendly, React Developer Tools, Migration to React Native, Stability due to one-way data binding, Easy migration of technology Library.Vue js is Size and Simplicity, Boosts performance, Error Reporting framework.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;