import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
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
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
            <p className="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In" onClick={() => router.push("/signin")} >Sign in here</a></p>
            <form className="my-8 text-sm">
              <div className="flex flex-col my-4">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input type="text" name="name" id="name" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="email" className="text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="password" className="text-gray-700">Password</label>
                <div x-data="{ show: false }" className="relative flex items-center mt-2">
                  <input type="password" name="password" id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" />
                  <button onClick={() => {}} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </button>
                </div>
              </div>
             
              <div className="flex items-center">
                <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded" />
                <label htmlFor="remember_me" className="text-gray-700">I accept the <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
              </div>
              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>
            <div className="text-sm">
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                <span>Sign up with Google</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign up with Facebook</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                <span>Sign up with LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
