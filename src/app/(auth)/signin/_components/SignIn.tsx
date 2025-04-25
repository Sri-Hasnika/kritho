"use client"
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SigninWithGoogle from "./SigninWithGoogle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState('password');

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      toast.loading("Signing in...");
      const response = await signIn('credentials', {
        username: data.username.toLowerCase(),
        password: data.password,
        callbackUrl: "/",
        redirect: false,
      });
      toast.dismiss();
      if (response?.error) {
        toast.error("Invalid username or password");
      } else {
        toast.success("Redirecting to dashboard...");
        setShowPassword('password');
        router.push("/");
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-lg border border-indigo-100 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-2">Welcome Back</h2>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Username"
            className="border bg-white dark:bg-slate-700 border-indigo-200 dark:border-slate-600 text-slate-800 dark:text-white text-sm font-medium p-3 outline-none rounded-lg w-full focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
            {...register("username", { required: true })}
          />
          {errors.username && <p className="text-sm font-medium text-rose-500 mt-1 ml-1">* Username is required</p>}
        </div>

        <div className="flex-grow">
          <div className="flex items-center relative">
            <input
              type={showPassword}
              placeholder="Password"
              className="border bg-white dark:bg-slate-700 border-indigo-200 dark:border-slate-600 text-slate-800 dark:text-white text-sm font-medium p-3 outline-none rounded-lg w-full focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              {...register("password", { required: true, minLength: 8 })}
            />
            {showPassword === 'password' ?
              <FaRegEyeSlash
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 w-5 h-5 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setShowPassword('text')}
              />
              :
              <FaRegEye
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 w-5 h-5 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setShowPassword('password')}
              />
            }
          </div>
          {errors.password && <p className="text-sm font-medium text-rose-500 mt-1 ml-1">* Password must have more than 8 characters</p>}
        </div>

        <div className="flex justify-end">
          <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-gradient-to-r from-indigo-700 to-indigo-400 hover:from-indigo-800 hover:to-indigo-500 text-white p-3 text-sm rounded-lg font-medium transform transition-all duration-200 shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <div className="relative flex items-center my-2">
          <div className="flex-grow border-t border-gray-300 dark:border-slate-600"></div>
          <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300 dark:border-slate-600"></div>
        </div>

        <div className="mt-1">
          <SigninWithGoogle />
        </div>

        <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-2">
          Don't have an account? <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;