"use client"
import Link from 'next/link';
import { useState } from 'react';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleLogin = e =>{
    e.preventDefault();
   

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        router.push('/');
        
      }
      else {
        Swal.fire({
          title: "Error",
          text: "Invalid email or password.",
          icon: "error"
        });
      }
    })
    
  };


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
     <>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
       
            <div>
              <h1 className="text-2xl font-semibold ">LogIn</h1>
            </div>
            <form onSubmit={handleLogin}>
            <div className="divide-y divide-gray-200 pt-5">
              <div className="py- text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            
           
              <div>
                    <label htmlFor="email" className="block text-gray-800 font-bold">
                    Email
                    </label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="@email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                    />
                
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-800 font-bold">
                    Password
                    </label>
                    <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                    />
                
                    </div>
           
                            

                <div className="relative top-8">
                  <button className="bg-cyan-600 text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </form>
          </div>
          <div className="w-full mt-12 flex justify-center">
          <Link href="/SignUp">
           <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
             
             <span>SignUp</span>
           </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default LoginPage
