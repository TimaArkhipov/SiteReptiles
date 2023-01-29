import React from "react";
import { Link } from "react-router-dom";


export const PostItem = ({ post }) => {
    if (!post) {
        return(
            <div className='text-xl text-center text-white py-10'>
                Загрузка....
            </div>
        )
    }
    return (
        <Link to={`/${post.id}`}>
            <div className="flex flex-col basis-1/4 flex-grow">               
                <div className="text-white text-xl">            
                    {post.name.ru}
                </div>
                <p className="text-white opacity-60 text-xs pt-4">            
                    {post.descr.ru}
                </p>            
            </div>
        </Link>
    )
}