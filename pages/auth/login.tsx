import { LOGIN } from "@/src/apollo/queries/auth";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default () => {
  const [login] = useMutation(LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = () => {};

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const isValid = validateForm();
    // if (isValid) {
    try {
      // console.log(email, password);
      const resp = await login({
        variables: {
          email,
          password,
        },
      });
      const data = resp.data.login;
      // console.log("dATA", data);
      for (let key of Object.keys(data)) {
        localStorage.setItem(key, data[key]);
      }
      router.reload();
    } catch (err: any) {
      toast.error(err.message);
    }
    // }
  };

  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          {/* <img src="https://floatui.com/logo-dark.svg" width={150} /> */}
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">Welcome Back</h3>
            <p className="text-gray-300">Lets Choose Your Trip & EnJoy</p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Join 5,00+ users
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center bg-white justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Login
              </h3>
              <p className="">
                Dont have an account?{" "}
                <Link
                  href="/auth/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </main>
  );
};
