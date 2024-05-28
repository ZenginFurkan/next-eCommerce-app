import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function SigninForm() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up form" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
      </Head>

      <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="w-full py-8">
          <div className="flex items-center justify-center space-x-2">
          </div>
          <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Sign In</h2>
            <form className="my-8 text-sm">

              <div className="flex flex-col my-4">
                <label htmlFor="email" className="text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="password" className="text-gray-700">Password</label>
                <div x-data="{ show: false }" className="relative flex items-center mt-2">
                  <input type="password" name="password" id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" />
                  <button onClick={() => { }} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <Link href={'/forgetpassword'} >
                  <button className='underline font-serif' >Forget password ? </button>
                </Link>
              </div>
              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-black hover:bg-slate-900  px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign In</button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>
            <div className="text-sm">
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200">
                <span>Continue with Google</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-white my-2 py-2 bg-blue-400 hover:bg-blue-500">
                <span>Continue with Facebook</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-white my-2 py-2 bg-black hover:bg-zinc-800">
                <span>Continue with GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
