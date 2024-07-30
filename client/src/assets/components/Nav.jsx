import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className=' bg-slate-200 '>
<div className="flex justify-between items-center p-7">
    <Link to="/">
    <h1 className=' font-bold'>Auth App</h1>
    </Link>
 <ul className='flex gap-5 text-black'>
    <Link to="/"><li>Home</li></Link>
    <Link to="/about"><li>About</li></Link>
    <Link to="/signin"><li>SignIn</li></Link>
    <Link to="/signup"><li>SignUp</li></Link>
 </ul>
</div>
    </div>
  )
}

export default Nav