import React from 'react';

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 via-yellow-200 to-yellow-300 flex items-center justify-center">
      <div className="w-full flex justify-center">
        <main className="bg-white shadow-md rounded-md p-4 max-w-sm w-full">
          <form action="/login" method="POST">
            <div className="flex gap-2 justify-center mb-4">
              <img className="h-16" src="logo1.png" alt="CV Maker Logo" />
              <div>
                <h1 className="text-xl font-bold mb-1">
                  <b>CV</b> Maker
                </h1>
                <p className="text-sm text-gray-600">Login to your account</p>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 flex items-center justify-center"
            >
              Login
            </button>

            <div className="flex justify-between mt-3 text-sm">
              <a href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
              <a href="/register" className="text-blue-500 hover:underline">
                Register
              </a>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
