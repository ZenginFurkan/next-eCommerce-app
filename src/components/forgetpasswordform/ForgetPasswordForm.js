import Head from 'next/head';

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Forgot Password form" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/3">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Forgot Your Password?</h2>
          <p className="text-center text-sm text-gray-600 mb-8">Enter your email address and we will send you a password reset email.</p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-150"
            >
              Send Password Reset Email
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
 