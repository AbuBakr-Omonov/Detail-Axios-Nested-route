import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const PostsDetail = () => {

    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        api
            .get(`/posts/${id}`)
            .then(res =>
                setPost(res.data)
            )
            .catch(err =>
                setError(err)
            )
            .finally(() =>
                setLoading(false)
            );


    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                Yuklanmoqda...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-red-600">
                Xatolik yuz berdi.
            </div>
        );
    }

    return (
        <div className="my-[20px] max-w-[850px] w-full mx-auto bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col gap-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center leading-snug">
                {post?.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
                {post?.tags?.map((tag, idx) => (
                    <span key={idx} className="bg-yellow-700 bg-opacity-10 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-400">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                {post?.body}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-400">
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
                    <p className="text-xl font-semibold text-green-400">{post?.reactions?.likes}</p>
                    <p>Likes</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
                    <p className="text-xl font-semibold text-red-400">{post?.reactions?.dislikes}</p>
                    <p>Dislikes</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
                    <p className="text-xl font-semibold">{post?.views}</p>
                    <p>Views</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
                    <p className="text-xl font-semibold">#{post?.userId}</p>
                    <p>User ID</p>
                </div>
            </div>
        </div>

    )
}

export default PostsDetail