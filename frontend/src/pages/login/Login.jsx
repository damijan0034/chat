

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto min-w-96">
      <div className="bg-gray-400 bg-clip-padding bg-opacity-0 shadow-md backdrop-filter backdrop-blur-lg p-6 rounded-lg w-full">
        <h1 className="font-semibold text-gray-300 text-3xl text-center">
            Login
            <span className="text-blue-500">Chat App</span>
        </h1>
        <form action="">
            <div>
                <label  className="p-2 label">
                <span className="text-base label-text">
                    Username
                </span>
                </label>
                <input type="text" className="w-full h-10 input input-bordered"
                placeholder="Username"
                />
            </div>

            <div>
                <label  className="p-2 label">
                <span className="text-base label-text">
                    Password
                </span>
                </label>
                <input type="password" className="w-full h-10 input input-bordered"
                placeholder="Password"
                />
            </div>
            <a href="#" className="mt-2 hover:text-blue-600 text-sm hover:underline">
                {"Don`t"} have an account? Signup
            </a>
            <div>
                <button className="btn-block mt-2 btn-sm btn">Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
