import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

const SigninWithGoogle = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    const response = await signIn('google', { callbackUrl: '/' });
    if (response?.ok) {
      toast.success('Signin successful');
      router.push('/');
    }
    if (response?.error) {
      toast.error(response.error);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => { e.preventDefault(); loginWithGoogle() }}
        className='bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600 text-slate-800 dark:text-white text-sm font-medium rounded-lg w-full transition-all duration-200 shadow-sm hover:shadow-md'
      >
        <div className='flex rounded-md justify-center items-center gap-3 p-2.5'>
          <div className='flex-shrink-0 flex items-center justify-center'>
            <FcGoogle className="w-5 h-5" />
          </div>
          <span>Continue with Google</span>
        </div>
      </button>
    </div>
  );
};

export default SigninWithGoogle;