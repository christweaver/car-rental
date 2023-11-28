export default function reservations() {
  return (
    <div className=" bg-gray-100">
      {/* <h1 className="text-[28px] ml-6 pt-2">
        Log in to view your reservations
      </h1> */}

      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg p-8 shadow-xl w-96 space-y-6">
          <h2 className="text-3xl font-semibold text-center">
            Log in to view your reservations
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
