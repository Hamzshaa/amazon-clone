import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <section className="h-screen flex flex-col items-center">
      <Link to="/" className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="my-8 mx-auto object-contain w-[100px]"
        />
      </Link>

      <div className="w-[350px] flex flex-col rounded-md border-[1px] border-gray-300 p-5">
        <h1 className="text-2xl my-5 font-semibold">Sign-In</h1>
        <form action="" className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mb-2.5 py-2 px-4 bg-white w-full border-gray-400 border-[1px] rounded-md focus:outline-1 focus:outline-blue-400"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mb-2.5 py-2 px-4 bg-white w-full border-gray-400 border-[1px] rounded-md focus:outline-1 focus:outline-blue-400"
              required
            />
          </div>
          <button className="border-none bg-[#f0c14b] rounded-md w-full h-8 mt-2.5 cursor-pointer hover:bg-[var(--primary-shade)]">
            Sign In
          </button>
        </form>
        <p className="py-2.5 text-sm">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="border-none rounded-md w-full h-8 mt-2.5 cursor-pointer bg-gray-300 hover:bg-gray-400">
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}
