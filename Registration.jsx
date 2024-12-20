import React from 'react'

const Registration = () => {
    return (
        <div class="min-h-screen bg-blue-500 flex justify-center items-center p-4 ">
          <div className="bg-white p-8 rounded-sm w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Student Details</h2>
            <form>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Full Name:</label>
              <input type="text" placeholder="Enter the full name" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Mobile No:</label>
              <input type="number" placeholder="Enter your mobile number" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Address:</label>
              <input type="text" placeholder="Enter your address" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>

         
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Birth Date:</label>
              <input type="date" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Gender:</label>
              <div className="mt-1 flex space-x-4">
                <label>
                  <input type="radio" name="gender" value="male" className="mr-1" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" className="mr-1" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" className="mr-1" /> Other
                </label>
              </div>
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Email Address:</label>
              <input type="email" placeholder="Enter your email address" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className=" text-sm font-medium text-gray-700">College Name:</label>
            <input type="text" placeholder="Enter your college name" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mt-6">Parent Details</h2>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Parent Full Name:</label>
              <input type="text" placeholder="Enter parent full name" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Mother Full Name:</label>
              <input type="text" placeholder="Enter mother full name" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Parent Email:</label>
              <input type="email" placeholder="Enter email address" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Parent Mobile No:</label>
              <input type="number" placeholder="Enter mobile number" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className=" text-sm font-medium text-gray-700">Permanent Address:</label>
              <input type="text" placeholder="Enter permanent address" className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
              Save
            </button>
            <button type="button" className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600">
              Next
            </button>
          </div>
        </form>

        </div>
        </div>
    )
}

export default Registration