import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { FiMail, FiPhone, FiUser, FiMapPin } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';

const UserDetail = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        api
            .get(`/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => setError(err))
    }, []);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-red-600">
                Xatolik yuz berdi.
            </div>
        );
    }

    return (
        <div className="my-[20px] max-w-[850px]  w-full mx-auto bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 p-6 flex flex-col items-center text-white space-y-8">
            <img src={user?.image } alt="User"  className="w-full max-h-[350px] object-cover object-center rounded-xl border border-gray-700" />
            <h2 className="text-3xl font-bold text-yellow-400 text-center">
                {user?.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-lg space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Shaxsiy Ma'lumotlar</h3>
                    <p className="flex items-center gap-2"><FiMail /> {user?.email}</p>
                    <p className="flex items-center gap-2"><FiPhone /> {user?.phone}</p>
                    <p className="flex items-center gap-2"><FiUser /> {user?.username}</p>
                    <p className="flex items-center gap-2"><BsGenderAmbiguous /> {user?.gender}</p>
                    <p className="flex items-center gap-2"><FaBirthdayCake /> {user?.age} yosh</p>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-lg space-y-3">
                    <h3 className="text-lg font-semibold text-blue-400">Manzil</h3>
                    <p className="flex items-center gap-2"><HiLocationMarker /> {user?.address?.city}</p>
                    <p className="flex items-center gap-2"><FiMapPin /> {user?.address?.street}</p>
                    <p className="flex items-center gap-2"><FiMapPin /> {user?.address?.country}</p>
                    <p className="flex items-center gap-2"><FiMapPin /> {user?.address?.state}, {user?.address?.zipcode}</p>
                </div>
            </div>
            <div className="w-full bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Qo'shimcha ma'lumot</h3>
                <p className="text-gray-300 leading-relaxed">{user?.bio}</p>
            </div>
        </div>
    )
}

export default UserDetail
