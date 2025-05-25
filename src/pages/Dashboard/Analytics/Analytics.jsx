import React from 'react'
import { BarChart2 } from "lucide-react";
const Analytics = () => {
  return (

    <div className="bg-gray-800 rounded-2xl shadow-md p-6 space-y-6">
      <div className="flex items-center gap-3">
        <BarChart2 size={28} className="text-sky-600" />
        <h2 className="text-2xl font-bold text-gray-300">Analytics Overview</h2>
      </div>

      <p className="text-gray-300 text-[15px] leading-relaxed">
        Analytics sahifasi sizga platformangizda bo'layotgan barcha asosiy statistik ko'rsatkichlar haqida t'liq ma'lumot beradi.
        Bu sizning foydalanuvchilar xatti-harakatlarini tushunishingiz, eng ko'p foydalanilayotgan funksiyalarni aniqlashingiz,
        va umumiy faoliyatni tahlil qilishingiz uchun kerak.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Foydalanuvchilar</h3>
          <p className="text-gray-400">Bugungi faol foydalanuvchilar: <span className="font-bold text-sky-600">1,245</span></p>
          <p className="text-gray-400">o'tgan hafta: <span className="font-bold text-green-600">+5.2%</span></p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Tashriflar</h3>
          <p className="text-gray-400">Jami tashriflar (oylik): <span className="font-bold text-sky-600">32,900</span></p>
          <p className="text-gray-400">Oldingi oyga nisbatan: <span className="font-bold text-green-600">+12%</span></p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Eng ko'p k'rilgan sahifalar</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Landing Page</li>
            <li>Messages Panel</li>
            <li>Profile Settings</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Konversiya</h3>
          <p className="text-gray-400">Aksiyalarga o'tish darajasi: <span className="font-bold text-sky-600">7.3%</span></p>
          <p className="text-gray-400">Rejalashtirilgan o'sish: <span className="font-bold text-yellow-600">+10%</span></p>
        </div>
      </div>
    </div>
  )
}

export default Analytics