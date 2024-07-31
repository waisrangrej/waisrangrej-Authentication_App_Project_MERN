import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [formData, setformData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(null)


  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      setLoading(false)
      if (data.success ===false) {
        seterror(true)
      }
    } catch (error) {
      console.log("error while fetching the api for signup", error);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>
        <input type="text" placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />

        <input type="email" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />

        <input type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ?"Loading" :"SignUp"}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/signin">
          <span className=' text-blue-500'>Sign In</span>
        </Link>
      </div>
      <div>
        <p className='text-red-700'>{error && "something went wrong"}</p>
      </div>
    </div>
  )
}

export default SignUp