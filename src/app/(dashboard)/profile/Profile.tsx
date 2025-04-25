'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

const UserProfile = ({ currentUser }: { currentUser: User }) => {
    const router = useRouter();
    const formData = currentUser;

    return (
        <div className="flex flex-col items-center m-5 mt-12 md:mt-20 font-semibold dark:text-white">
            <div className='relative'>
                <Image
                    src={formData?.image || '/images/placeholder.jpg'}
                    alt="User Image"
                    width={120}
                    height={120}
                    className="rounded-full bg-slate-300 mb-5 border-4 border-white dark:border-gray-800 shadow-lg"
                />
            </div>

            <form className="flex flex-col md:flex-row justify-center md:gap-10 dark:text-white w-full max-w-3xl">
                <div className="w-full md:w-[40%] mt-2 dark:text-white">
                    <label className="text-sm text-gray-700 dark:text-gray-300">Username:</label>
                    <input
                        type="text"
                        name="username"
                        disabled
                        title="name"
                        value={formData.username}
                        className="w-full px-4 py-2 mb-4 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 shadow-sm"
                    />
                    <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
                        Email:
                        <input
                            type="email"
                            name="email"
                            disabled
                            value={formData.email}
                            className="w-full px-4 py-2 mb-4 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 shadow-sm"
                        />
                    </label>
                </div>
                <div className="w-full md:mt-3 md:w-[40%] dark:text-white">
                    <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
                        Name:
                        <input
                            type="text"
                            name="name"
                            disabled
                            value={formData.name}
                            className="w-full px-4 py-2 rounded-lg border mb-4 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 shadow-sm"
                        />
                    </label>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                        Role:
                        <input
                            type="text"
                            name="role"
                            disabled
                            value={formData.role}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 shadow-sm"
                        />
                    </label>
                </div>
            </form>

            <div className="mt-8">
                <button
                    onClick={() => router.push('/profile/manage-password')}
                    className="flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                    Manage Password
                </button>
            </div>
        </div>
    );
}

export default UserProfile;