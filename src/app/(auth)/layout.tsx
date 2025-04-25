import { FC, ReactNode } from 'react';
interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='relative h-screen w-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute w-48 h-48 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl -translate-x-12 -translate-y-12 opacity-60'></div>
      </div>
      <div className='absolute bottom-0 right-0 w-full h-full overflow-hidden'>
        <div className='absolute w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl translate-x-24 translate-y-24 opacity-60'></div>
      </div>
      <div className='flex justify-center items-center h-full'>
        <div className='relative z-10 p-7 m-2 md:p-10 sm:w-[400px] rounded-2xl border border-white/20 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl shadow-xl'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;