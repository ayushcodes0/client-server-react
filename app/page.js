"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = ()=>{
    toast.success('login successfull', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }
  return (
    <div>
      <button onClick={notify} className='px-5 py-3 bg-slate-600 rounded-md text-white font-semibold m-5'>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page
