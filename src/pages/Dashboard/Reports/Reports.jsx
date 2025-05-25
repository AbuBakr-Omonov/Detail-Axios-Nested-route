import React from 'react'
import { FileText } from "lucide-react";
const Reports = () => {
  return (
    <div>
      <div className="bg-gray-900 rounded-2xl shadow-md p-6 space-y-6 text-gray-200">
        <div className="flex items-center gap-3">
          <FileText size={28} className="text-sky-500" />
          <h2 className="text-2xl font-bold">Reports Overview</h2>
        </div>

        <p className="text-gray-300 text-[15px] leading-relaxed">
          Reports sahifasi orqali siz barcha faoliyat bo‘yicha hisobotlarni ko‘rishingiz, foydalanuvchilar harakatlarini tahlil qilishingiz,
          tizimdagi holatlar bo‘yicha PDF va Excel hujjatlarni yuklab olishingiz mumkin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Haftalik Hisobot</h3>
            <p className="text-gray-400">Oxirgi 7 kun ichida yaratilgan 25 ta yangi foydalanuvchi.</p>
            <p className="text-gray-400">Aktivlik darajasi: <span className="text-green-400 font-medium">+8%</span></p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Faoliyat Natijalari</h3>
            <p className="text-gray-400">So‘nggi oyning umumiy foydalanish statistikasi.</p>
            <p className="text-gray-400">PDF shaklida eksport qilish mumkin.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Yuklab olingan hujjatlar</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>2025-Mart Faoliyat Hisoboti</li>
              <li>Foydalanuvchi O‘sish Grafikasi</li>
              <li>Savollar Statistikasi</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Xavfsizlik va Foydalanuvchi Loglari</h3>
            <p className="text-gray-400">Admin panelda amalga oshirilgan harakatlar logi.</p>
            <p className="text-gray-400">So‘nggi tahrir: <span className="text-yellow-400">24 soat oldin</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports