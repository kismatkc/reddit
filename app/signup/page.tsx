"use client";
import API from "@/services/api";
import React, { FormEvent, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = async (e: FormEvent) => {
    e.preventDefault();
    const response = await API.post("/users/createUser", {
      email,
      password,
    });

    if (response.status === 201) {
      console.log(response.data);
    }
  };

  return (
    <div className={`block fixed top-[30vh] left-[20vw]  z-10`}>
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>

            <form
              className="mt-5"
              onSubmit={(e) => {
                handleInput(e);
              }}
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 text-gray-700 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Enter your Password"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex h-10 text-gray-700 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="email"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
