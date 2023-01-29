import e from 'cors'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { PopularPosts } from '../components/PopularPosts'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'

export const MainPage = () => {

    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.post) //, popularPosts
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])
    
    // console.log(posts, ' После селектора')
    // if (!posts.length) {
    //     return (
    //         <div className='text-xl text-center text-white py-10'>
    //             Постов не найдено
    //         </div>
    //     )

    // console.log('k = ', k)
    return (
        <div className='max-w-[900px] mx-auto py-10'>
            {/* <div className="flex justify-between gap-8"> */}
            {/* <div className="flex justify-between gap-8"> */}
                <div className="flex flex-col gap-10">
                    { posts?.map((post => 
                        <PostItem key={post.id} post={post} /> 
                    ))}
                                       
                {/* </div> */}
                {/* <div className="basis-1/5">
                    <div className="text-xs uppercase text-white">
                        Популярное: 
                    </div>         

                    {/* {
                        popularPost?.map((post, idx) => (
                            <PopularPosts key={idx} post={post}/>
                        ))
                    }                }
                </div> */}
            </div>            
        </div>
    )
}