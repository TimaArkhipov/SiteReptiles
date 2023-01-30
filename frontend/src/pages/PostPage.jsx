import React from "react";
import { useEffect } from 'react'
import { useCallback, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "../utils/axios";

export const PostPage = () => {
    const [post, setPost] = useState(null)
    const params = useParams()

    const fetchPost = useCallback(async () =>{
        const { data } = await axios.get(`/posts/${params.id}`)
        console.log("data = ", data);
        setPost(data)        
    }, [params.id])    

    useEffect(() => {        
       fetchPost()       
    }, [fetchPost]);

    // console.log("post.photo = ", post.photo);
    // console.log("params = ", params);
    

    return (
        <div>
        {/* <button className="fkex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
            Назад
        </button> */}

        <div className="flex gap-10 py-8">
            <div className="w-2/3">
                <div className="flex flex-col basis-1/4 flex-grow">
                <div
                        className={
                            post?.photo
                            ? 'flex rouded-sm h-80'
                                : 'flex rounded-sm'
                        }
                    >
                        {post?.photo && (
                            <img
                                src={`http://localhost:3001${post.photo}`}
                                alt='img'
                                className='object-cover w-full'
                            />
                        )}
                    </div>
                </div>
                <div className="text-white text-xl">            
                    {post?.name.ru}
                </div>
                <p className="text-white opacity-60 text-xs pt-4">            
                    {post?.descr.ru}
                </p>                                
            </div>
            <div className="w-1/3">COMMENTS</div>
        </div>
    </div>
    )
}