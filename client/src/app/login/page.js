"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {
  const router = useRouter();


  const handleLogin = async (e) =>{
    e.preventDefault();
   const form = e.target;
   
   const Item = {
    email: form.email.value,
    password: form.password.value,
  };
  console.log(Item)

    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(Item),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.success){
       
        location.reload();
        router.push('/');
      
          toast.success("LogIn successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
     
      }else if(data.status === 400){
        toast.error("User Doesn't Exist!!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        toast.error("Please Check your Email/Password", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      
      }
      
    })
    
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
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="@email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                    />
                
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-800 font-bold">
                    Password
                    </label>
                    <input
                    required
                    type="password"
                    name="password"
                    id="password"
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
         <span className=' mt-2 mr-1.5'> Don't have an account?</span>
          <Link href="/SignUp">
           <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
             
             <span>SignUp</span>
           </button>
           </Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  </>
  )
}

export default LoginPage
