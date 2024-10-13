import React from 'react'

const Pages = () => {
    return (
        <div className='flex items-center justify-center  bg-slate-50'>

            <form className="border border-gray-300 rounded-lg p-10 shadow-lg m-20 max-w-lg w-full ">
                <h1 className="text-44rem font-semibold mb-6 text-left ">Sign in</h1>

                <label className="font-sans text-42rem text-left mb-2 block">Username</label>
                <input type="text" required className="border border-x-slate-300  rounded-md mb-4  py-2 w-full " />

                <label className="font-sans text-42rem text-left mb-2 block">Password</label>
                <input type="password" required className="border border-x-slate-300 rounded-md mb-4 py-2 w-full" />

                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="remember"
                        name="remember"
                        className="form-radio h-4 w-4 text-blue-600 border-gray-300 oval "
                    />
                    <div class="container">
                        <label for="remember" class="font-sans text-42rem ml-3 inline-block">Remember</label>

                    </div>
                    <label for="password" class="font-semibold text-30rem  cursor-pointer inline-block">Forgot password?</label>
                </div>
                <div className="flex justify-center mb-30 p-4">
                    <button className="bg-black text-cyan-50 px-24 py-2 rounded-md  ">Get started</button>
                </div>
                <div className='text-center'>
                    <label>
                        Don't have an account ?
                        <span className="sign-up-text font-semibold">
                            Sign up
                        </span>
                    </label>
                </div>
            </form>
        </div>

    )
}

export default Pages