import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/userSlice';

export default function Login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmitHandler = async (data) => {
    // Handle form submission logic here
    
    try {
      const res = await axios.post(`http://localhost:3000/api/user/login`, data, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      //  console.log(res);
      if(res.data.success){
        toast.success(res.data.message)
        navigate("/")
        dispatch(setAuthUser(res.data))
      }
      
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="min-h-[calc(100vh-66px)] bg-gradient-to-r from-neutral-content via-base-200 to-base-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-lg p-6">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-base-content mb-2">Login</h1>
          <p className="text-sm text-base-content/60">
            Welcome back! Please log in to your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-base-content">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="you@example.com"
                className={`input w-full focus:ring-primary placeholder:text-primary ${errors.email ? "input-error" : "input-bordered input-primary"
                  }`}
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-base-content">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /(?=.*\d)/,
                    message: "Password must contain at least one number",
                  },
                })}
                placeholder="Enter your password"
                className={`input w-full focus:ring-primary placeholder:text-primary ${errors.password ? "input-error" : "input-bordered input-primary"
                  }`}
              />
              {errors.password && (
                <p className="text-error text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-sm text-primary text-right">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full py-2 text-white text-sm font-semibold shadow-md hover:bg-primary-focus transition duration-300 ease-in-out"
              >
                Log In
              </button>
              <div className='text-center text-sm mt-1 text-primary'>
                New to ChatApp? <Link to="/signup">Create a account</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
