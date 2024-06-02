
"use client";
import { useEffect, useState } from "react";
import API from "@/services/api";
import { PostProp } from "@/types";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "./searchContext";

const Hero = () => {
    const [posts, setPosts] = useState<PostProp[]>([]);
    const { searchQuery } = useSearch();
    

    useEffect(() => {
        const fetchPosts = async () => {
            if (!searchQuery) {
                try {
                    const response = await API.get("/posts/public");
                   
                    setPosts(response.data);
                } catch (error) {
                    console.error("Error fetching public posts:", error); // Debugging line
                }
            } else {
                try {
                   
                    const response = await API.get("/posts/search", {
                        params: { query: searchQuery }
                    });
              

                    setPosts(response.data);
                } catch (error) {
                    console.error("Error fetching search posts:", error);
                }


            }
        };

        fetchPosts();
    }, [searchQuery]);

    return (
        <div>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {posts.map((item, i) => (
          
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={
                            <Skeleton className="w-32 md:w-[190px] relative left-9 md:top-1/2 h-[30px] rounded-full" />
                        }
                        className={item.className}
                       
                    />
           
                ))}
            </BentoGrid>
              
        </div>
    );
};

export default Hero;
