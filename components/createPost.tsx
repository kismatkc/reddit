"use client";
import { useResizableTextarea } from "@/lib/customhooks/useTextareaResizable"; // Adjust the import path as needed

const CreatePost = () => {
  const { textareaRef } = useResizableTextarea();
  return (
    <div className="">
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">Create a post</h2>

            <form className="mt-5">
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Full Name"
                      type="text"
                      className="flex h-10 text-gray-700 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="user_name"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    placeholder="Enter post description"
                    rows={1}
                    ref={textareaRef}
                    name="description"
                    className="border focus:outline-none focus:ring-1 overflow-hidden focus:ring-gray-400 focus:ring-offset-1 px-3 py-2 rounded-lg w-full text-gray-700"
                  ></textarea>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="password"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="button"
                  >
                    Create Account
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

export default CreatePost;
