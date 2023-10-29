import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SIGNUP } from "@/src/apollo/queries/auth";
import { useLazyQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
export default () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [signup] = useMutation(SIGNUP);

  const validateForm = () => {
    if (!password || password.length < 8) {
      toast.error("Password is not valid!");
      return;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const resp = await signup({
          variables: {
            email,
            password,
            mobileNumber,
            name,
          },
        });
        const data = resp.data.signup;
        for (let key of Object.keys(data)) {
          localStorage.setItem(key, data[key]);
        }
        router.reload();
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <main className="w-full bg-white flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img src="https://floatui.com/logo-dark.svg" width={150} />
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Start Travelling For Free
            </h3>
            <p className="text-gray-300">
              Become a Member and Start Travelling For Free
            </p>
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
                Join 500+ users
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
      <div className="flex-1 flex items-center bg-white justify-center h-screen mt-5">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-t-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
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
              <label className="font-medium">Mobile Number</label>
              <input
                type="number"
                required
                onChange={(e) => setMobileNumber(e.target.value)}
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
            <div className="relative max-w-xl mx-auto sm:text-center">
              <p className="text-gray-800 text-xl font-semibold sm:text-xl">
                Membership Fee ₹ 999 (One Time Only - Lifetime Access)
              </p>
              <div className="mt-3 max-w-xl">
                <form className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-2 pt-6 pb-8 mb-4">
                  <div>
                    <div className="flex items-center ">
                      <p>
                        Pay Via UPI App <sup>*</sup> : (click Here → )
                      </p>
                      <div className="flex border-inherit gap-2 ml-6">
                        <a href="upi://pay?pa=mohansharma916@okhdfcbank&cu=INR&am=999">
                          <img
                            className=""
                            src="/media/google-pay.svg"
                            width={40}
                            height={40}
                            alt="google-pay-Icon"
                          />
                        </a>
                        <a href="upi://pay?pa=mohansharma916@okhdfcbank&cu=INR&am=999">
                          <img
                            className=""
                            src="/media/phone-pay.png"
                            width={40}
                            height={40}
                            alt="phone-pay-Icon"
                          />
                        </a>
                      </div>
                    </div>
                    <p className=" text-slate-400 text-[8px]">
                      {" "}
                      <sup>*</sup>
                      To Avoid Transaction Fee Of Payment Platform We are
                      directly Receiving Payment Throygh UPI{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </main>
  );
};
