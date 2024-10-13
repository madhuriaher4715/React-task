import React from 'react';

const Page2 = () => {
  return (
    <div className='flex items-center justify-center  bg-slate-50'>
      <form className="border border-gray-300 rounded-lg p-10 shadow-lg m-20 max-w-lg w-full ">
        <h1 className="text-44rem font-semibold mb-6 text-left ">Sign up</h1>

        <label className="font-sans text-42rem text-left mb-2 block">Full Name</label>
        <input type="text" required className="border border-x-slate-300  rounded-md mb-4  py-2 w-full " />

        <label className="font-sans text-42rem text-left mb-2 block">Email</label>
        <input type="email" required className="border border-x-slate-300 rounded-md mb-4 py-2 w-full" />

        <label className="font-sans text-42rem text-left mb-2 block">Username</label>
        <input type="text" required className="border border-x-slate-300  rounded-md mb-4  py-2 w-full " />

        <label className="font-sans text-42rem text-left mb-2 block">Password</label>
        <input type="password" required className="border border-x-slate-300 rounded-md mb-4 py-2 w-full" />

        <label className="font-sans text-42rem text-left mb-2 block">Confirm Password</label>
        <input type="password" required className="border border-x-slate-300 rounded-md mb-4 py-2 w-full" />

        <div className="flex justify-center mb-30 p-4">
          <button className="bg-black text-cyan-50 px-24 py-2 rounded-md  ">Sign up</button>
        </div>
        <div className='text-center'>
          <label>
            Already have an account ?
            <span className="sign-in-text font-semibold">
              Sign in
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Page2;