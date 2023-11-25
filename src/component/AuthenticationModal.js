import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import authenticationSVG from "../assets/authentication.svg"
import { MdCancel } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const AuthenticationModal = ({setLoggedIn, logedIn}) => {

    const[password, showPassword] = useState(false);
    const [login, setlogin] = useState(false)

  return (
    <div>
        <div className='w-full lg:max-w-[46rem] max-sm:h-[34rem] flex flex-col gap-6 rounded-lg border border-richblack-400 bg-white z-50 fixed lg:left-[25rem] mx-auto lg:top-20 max-sm:bottom-0 transition-all duration-200 '>
            <MdCancel onClick={() => setLoggedIn(false)} className='absolute cursor-pointer text-3xl lg:text-[#e0e0e0] text-[#4d5154] lg:-top-8 lg:-right-8 top-4 right-4'/>
            <div className='max-sm:hidden text-sm text-center font-medium text-[#008A45] bg-[#EFFFF4] rounded-lg py-[1.0625rem]'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
            <div className='w-full flex px-9 pb-9 max-sm:pt-4'>
                <div className='flex flex-col lg:w-1/2 w-full items-start gap-6'>
                    <p className='text-2xl font-bold'>{login ? 'Sign In' : 'Create Account'}</p>
                    <div className='w-full  flex flex-col gap-[1.19rem]'>
                        <div className='w-full'>
                            {
                                !login && (
                                    <div className='w-full flex items-center'>
                                        <input className='w-1/2 px-3 py-2 bg-[#F7F8FA] border-t border-l border-[#D9D9DB]' type="text" placeholder='First Name'/>
                                        <input className='w-1/2 px-3 py-2 bg-[#F7F8FA] border-t border-r border-[#D9D9DB]' type="text" placeholder='Last Name'/>
                                    </div>
                                )
                            }
                            <input className='w-full px-3 py-2 bg-[#F7F8FA] border-b border-t border-l border-r border-[#D9D9DB]' type="text" placeholder='Email'/>
                            <div className='w-full relative'>
                                <input className='w-full px-3 py-2 bg-[#F7F8FA] border-b border-l border-r border-[#D9D9DB]' type={!password ? 'password' : 'text'} placeholder='Password'/>
                                {
                                    password ? (<FaRegEye onClick={()=>showPassword((prev)=>!prev)} className='absolute top-[0.6rem] right-4 text-[1.4rem] text-[#9fa6b2] cursor-pointer'/>) : (<FaRegEyeSlash onClick={()=>showPassword((prev)=>!prev)} className='absolute top-[0.6rem] right-4 text-[1.4rem] text-[#9fa6b2] cursor-pointer'/>)
                                }
                            </div>
                            {
                                !login && (
                                    <input className='w-full px-3 py-2 bg-[#F7F8FA] border-b border-l border-r border-[#D9D9DB]' type="text" placeholder='Confirm Password'/>
                                )
                            }
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <button className='lg:w-full max-sm:px-6 rounded-3xl bg-[#2F6CE5] py-3 text-white '>
                                {login ? 'Sign In' : 'Create Account'}
                            </button>
                            <p onClick={()=>setlogin((prev)=>!prev)} className='lg:hidden underline underline-offset-1'>{login ? 'or, Create Account' : 'or, Sign In'}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <buttone className="w-full py-2.5 flex gap-2.5 justify-center items-center text-sm text-black border border-[#D9D9DB] rounded-md">
                            <FaFacebook color='#1877f2'/>
                            <p>Sign up with Facebook</p>
                        </buttone>
                        <buttone className="w-full py-2.5 flex gap-2.5 justify-center items-center text-sm text-black border border-[#D9D9DB] rounded-md">
                            <FcGoogle size={16} />
                            <p>Sign up with Google</p>
                        </buttone>
                    </div>
                    <p className='w-full text-center lg:hidden'>{!login ? 'By signing up, you agree to our Terms & conditions, Privacy policy' : 'Forgot Password?'}</p>
                </div>
                <div className='hidden lg:flex flex-col gap-8 w-1/2 items-end'>
                    <p className='text-[#3D3D3D] text-sm'>Already have an account? <span onClick={()=>setlogin((prev)=>!prev)} className='text-[#2F6CE5] font-semibold cursor-pointer'>Sign In</span></p>
                    <img src={authenticationSVG} alt="" />
                    <p className='text-[0.6875rem]'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
        </div>

        <div className='fixed inset-0 z-10 !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-brightness-50'></div>
      
    </div>
  )
}

export default AuthenticationModal