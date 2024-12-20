import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const onSubmitHandler = async (data) => {
    // Handle form submission logic here
    try {
      const res = await axios.post(`http://localhost:3000/api/user/register`, data, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      // console.log(res);
      if(res.data.success){
        toast.success(res.data.message)
        navigate("/login")
      }
      
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message)
    }
  };

  const password = watch("password"); // Watch password for validation in confirmPassword

  return (
    <div className="min-h-[calc(100vh-66px)] bg-gradient-to-r from-base-200 via-base-300 to-base-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-base-100 rounded-xl shadow-lg p-6">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-base-content mb-2">Sign Up</h1>
          <p className="text-sm text-base-content/60">
            Join us and let's create something amazing!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {/* Left Column */}
            <div className="md:w-1/2 space-y-4">
              {/* FullName */}
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-base-content">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", { required: "Fullname is required"})}
                  placeholder="Enter your Full Name"
                  className={`input w-full focus:ring-primary placeholder:text-primary ${
                    errors.fullName ? "input-error" : "input-bordered input-primary"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-error text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-base-content">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username", { required: "Username is required", minLength: 3 })}
                  placeholder="Choose a username"
                  className={`input w-full focus:ring-primary placeholder:text-primary ${
                    errors.username ? "input-error" : "input-bordered input-primary"
                  }`}
                />
                {errors.username && (
                  <p className="text-error text-sm mt-1">{errors.username.message}</p>
                )}
              </div>

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
                  className={`input w-full focus:ring-primary placeholder:text-primary ${
                    errors.email ? "input-error" : "input-bordered input-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 space-y-4">
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
                  placeholder="Enter a strong password"
                  className={`input w-full focus:ring-primary placeholder:text-primary ${
                    errors.password ? "input-error" : "input-bordered input-primary"
                  }`}
                />
                {errors.password && (
                  <p className="text-error text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-base-content">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  placeholder="Confirm your password"
                  className={`input w-full focus:ring-primary placeholder:text-primary ${
                    errors.confirmPassword ? "input-error" : "input-bordered input-primary"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-error text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-medium text-base-content">Gender</label>
                <div className={`flex space-x-4 mt-2 ${errors.gender ? "input-error" : ""}`}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...register("gender", { required: "Please select your gender" })}
                      value="male"
                      className="radio radio-primary"
                    />
                    <span className="ml-2 text-base-content">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...register("gender", { required: "Please select your gender" })}
                      value="female"
                      className="radio radio-primary"
                    />
                    <span className="ml-2 text-base-content">Female</span>
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-error text-sm mt-1">{errors.gender.message}</p>
                )}
              </div>

              {/* Already have an account? */}
              <div className="text-sm text-primary text-right">
                <span>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full py-2 shadow-md transition duration-300 hover:bg-primary-focus"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
