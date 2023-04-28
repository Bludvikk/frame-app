'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import ClientOnly from "../components/ClientOnly";
import { IRegister, RegisterSchema } from "../schema/userSchema";
import { useRouter } from "next/navigation";




const Register = () => {

    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<IRegister>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            contactNumber: "",
        },
        resolver: zodResolver(RegisterSchema),
        mode: 'onChange'
    })

    return (
        <ClientOnly>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-slate-950 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">Frame</a>
              <p className="mt-6 font-light text-sm text-center text-gray-300 md:mt-0">
                With the power of Frame, you can now manage applications for
                your businesses!
              </p>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span className="font-semibold text-sm">
                  Don't have an account?
                </span>
                <a href="#" className="underline font-thin text-sm">
                  Get Started!
                </a>
              </p>
              <p className="mt-6 text-sm text-center text-gray-300">
                Read our{" "}
                <a href="#" className="underline">
                  terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  conditions
                </a>
              </p>
            </div>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form action="#"  className="flex flex-col space-y-5">
                <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
                <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field: { onChange}}) => (
                    <Input
                    onChange={onChange}
                    type='text'
                    placeholder="First Name"
                    />
                  )}
                />
                {errors.firstName?.message && <p className="text-sm text-red-600 pl-2">{errors.firstName?.message}</p>}
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Last Name
                </label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field: { onChange} }) => (
                    <Input
                    onChange={onChange}
                    type='text'
                    placeholder="Last Name"
                    />
                  )}
                />
                {errors.lastName?.message && <p className="text-sm text-red-600 pl-2">{errors.lastName?.message}</p>}
              </div>

                </div>
                <div className="flex flex-col space-y-1">
                <label
                  htmlFor="contactNumber"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <Controller
                  name="contactNumber"
                  control={control}
                  
                  render={({ field: { onChange} }) => (
                    <Input
                    
                    onChange={onChange}
                    type='number'
                    placeholder="Contact Number"
                    
                    />
                  )}
                />
                {errors.contactNumber?.message && <p className="text-sm text-red-600 pl-2">{errors.contactNumber?.message}</p>}
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange}, formState }) => (
                    <Input
                    onChange={onChange}
                    type='email'
                    placeholder="Email"
                    />
                  )}
                />
                {errors.email?.message && <p className="text-sm text-red-600 pl-2">{errors.email?.message}</p>}
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange }, formState }) => (
                    <Input
                    onChange={onChange}
                    type='password'
                    placeholder="Password"
                    />
                  )}
                />
                {errors.password?.message && <p className="text-sm text-red-600 pl-2">{errors.password?.message}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-semibold text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Button
                    variant='outline'
                  type="submit"
                  className="w-full px-4 py-2 text-lg text-white hover:bg-slate-600 hover:text-white font-semibold bg-slate-950"
                >
                  Sumit
                </Button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-slate-800 rounded-md group hover:bg-slate-600 focus:outline-none"
                  >
                    <span>
                      <Icon
                        icon="ic:baseline-facebook"
                        color="blue"
                        width={30}
                        height={30}
                      />
                    </span>
                    <span className="text-sm font-medium text-slate-950 group-hover:text-white">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-slate-800 rounded-md group hover:bg-slate-600 focus:outline-none"
                  >
                    <span>
                      <Icon
                        icon="mdi:google"
                        color="blue"
                        width={25}
                        height={25}
                      />
                    </span>
                    <span className="text-sm font-medium text-slate-950 group-hover:text-white">
                      Google
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ClientOnly>
    );
}
 
export default Register;