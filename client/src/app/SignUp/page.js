"use client"
import Link from 'next/link';
import { useForm } from "react-hook-form";




const image_hosting_api = 'https://api.imgbb.com/1/upload?key=85c8731da646b31b05291de72ca2b2ad';
const signup = () => {
  const { register, handleSubmit, reset } = useForm();
 

  const onSubmit = async (data) => {
    console.log(data);
  
    const formData = new FormData();
    formData.append('image', data.image[0]);
  
    const response = await fetch(image_hosting_api, {
      method: 'POST',
      body: formData,
    });
  
    console.log(response);
  
    if (response.ok) {
      const responseData = await response.json();
      if (responseData.success) {
     
        const Item = {
          name: data.name,
          email: data.email,
          password: data.password,
          image: responseData.data.display_url
        };
        console.log(Item);
        fetch('http://localhost:4000/signup', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(Item)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              title: "Congratulation",
              text: "You successfully Create a Account!",
              icon: "success"
            });
            
          }
        })

      } else {
        console.error('Image upload failed:', responseData.error.message);
      }
    } else {
      console.error('Image upload failed:', response.statusText);
    }
  };

  
  return (
  <>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
       
            <div>
              <h1 className="text-2xl font-semibold ">SignUp</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="divide-y divide-gray-200 pt-5">
              <div className="py- text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div>
              <label htmlFor="name" className="block text-gray-800 font-bold">
                    Name
                </label>
                <input
             
                    type="text"
                  required
                    placeholder="username"
                    {...register("name", { required: true})}
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>
                <div>
                    <label htmlFor="email" className="block text-gray-800 font-bold">
                    Email
                    </label>
                    <input
               required
                    type="text"
                   
                    placeholder="@email"
                    {...register("email", { required: true})}
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                    />
                
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-800 font-bold">
                    Password
                    </label>
                    <input
                
                    type="password"
                  required
                   
                    placeholder="password"
                    {...register("password", { required: true})}
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                    />
                
                    </div>
                            <div>
                            <label htmlFor="email" className="block text-gray-800 mb-3 font-bold">
                                    Image
                                        </label>
                                    <div className="flex items-center space-x-6">
                                    <input
                                   
                             required
                              type="file"
                              {...register("image", { required: true})}
                              className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                            />
                    </div>
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
          <Link href="/login">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
             
              <span>Login</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default signup
