'use client';
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { AiOutlineLoading } from "react-icons/ai";


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
    role: "",
  });
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    // if (!userValues.email || !userValues.password) {
    //   setErrorMessage("Please fill all fields");
    //   setLoading(false);
    //   return;
    // }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userValues.email, userValues.password);

      const user = userCredential.user;

      await sendEmailVerification(user);

      localStorage.setItem("user", JSON.stringify({
        name,
        email,
        role,
      }));
      setErrorMessage("regestration successful ! please verify your email to login");
      setEmail("");
      setPassword("");
      setName("");
      setRole("");
    }
    catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An error occured");
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-600 to-black ">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg ">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
            <div className="flex flex-col space-y-1">
              <label
                typeof="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Your name
              </label>
              <Input
                type="name"
                name="name"
                id="name"
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                typeof="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <label
                typeof="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Password
              </label>
              <div className="flex items-center">
                <input
                  disabled={loading}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="disabled:cursor-not-allowed disabled:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required={true}
                />

                <button
                  type="button"
                  className=" bg-transparent focus:outline-none -ml-10 "
                >
                  <label
                    onClick={() => setShowPassword(!showPassword)}
                    htmlFor="toggle"
                  >
                    {showPassword ? (
                      <Image
                        width={20}
                        height={20}
                        src="/eye_logo.svg"
                        className="cursor-pointer"
                        alt="logo to see password"
                      />
                    ) : (
                      <Image
                        width={20}
                        height={20}
                        src="/close_eye.svg"
                        className="cursor-pointer"
                        alt="logo to see password"
                      />
                    )}
                  </label>
                </button>
              </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  typeof="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Select your role
                </label>
                <Select 
                id="role"
                require={false}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
             
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {message && <div className="text-green-500 text-sm">{message}</div>}

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border accent-accentColor border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  // required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    typeof="remember"
                    className="text-gray-700 dark:text-gray-200 "
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="/auth/admin/forgot-password"
                className="text-sm font-medium   text-dark hover:underline "
              >
                Forgot password?
              </Link>
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="text-white bg-red-400 rounded-md text-sm p-2 ">
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-300 mt-5 w-full text-gray-500 flex gap-x-3 justify-center items-center bg-accentColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center  disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In ..." : "Sign In"}
              {loading && (
                <AiOutlineLoading className="animate-spin text-accentColor" />

              )}
            </button>
          </form>
        </div>
      </div>
      <div className="images my-0 max-[1030px]:hidden  rounded-l-[18%] w-full  pl-10  bg-[#EEB22E17]  ">
        <div className="font-extrabold  text-3xl rounded-l-[22%]  w-full background-slideshow flex items-center justify-center  h-screen "></div>
      </div>
    </div>
  );
}
