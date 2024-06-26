





"use client";
import API from "@/services/api";
import { useResizableTextarea } from "@/lib/customhooks/useTextareaResizable"; // Adjust the import path as needed
import { Switch } from "@/components/ui/switch";
import { FormEvent, useEffect, useRef } from "react";
import {useSearch} from "./searchContext"

const CreatePost = () => {
    const { textareaRef } = useResizableTextarea();
    const {isPlusIconClicked,setIsPlusIconClicked} = useSearch();
    const formContainerRef = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
  const OnMousedown = (e: MouseEvent)=>{
   if(formContainerRef.current){
    if(isPlusIconClicked && !(formContainerRef.current.contains(e.target as Node))){

      setIsPlusIconClicked(false)
      document.removeEventListener("mousedown",OnMousedown)

    }
      }
  }
  if(isPlusIconClicked){
    document.addEventListener("mousedown",OnMousedown)
  }

    },[isPlusIconClicked])


  const titleRef = useRef<HTMLInputElement | null>(null);

  const typeRef = useRef<HTMLButtonElement | null>(null);

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPlusIconClicked(false)

    let formValues = {
      title: "",
      description: "",
      visibility: "",
    };

    if (titleRef.current && typeRef.current && textareaRef.current) {
      formValues = {
        title: titleRef.current.value,
        description: textareaRef.current.value,
        visibility: typeRef.current.value,
      };
    }

    const response = await API.post("/posts/createPost", formValues);
  };

  return (
   
       <div ref={formContainerRef} className={`hidden  ${isPlusIconClicked && "!block"} fixed top-[25vh] left-[10vw]  z-10`}>
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">Create a post</h2>

            <form className="mt-5" onSubmit={(e) => createPost(e)}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="text-base font-medium text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Title"
                      type="text"
                      ref={titleRef}
                      id="title"
                      className="flex h-10 text-gray-700 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="title"
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
                    id="description"
                    className="border focus:outline-none focus:ring-1 overflow-hidden focus:ring-gray-400 focus:ring-offset-1 px-3 py-2 rounded-lg w-full text-gray-700"
                  ></textarea>
                </div>

                <div className="flex gap-2">
                  <label>Public</label>
                  <Switch
                    ref={typeRef}
                    onCheckedChange={(checked) => {
                      if (typeRef.current && checked)
                        typeRef.current.value = "private";
                    }}
                    id="type"
                    name="type"
                    value="public"
                  />
                  <label htmlFor="type">Private</label>
                </div>

                <div>
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                    Create Post
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