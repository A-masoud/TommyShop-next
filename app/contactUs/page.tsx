// app/contact/page.tsx
import React from "react";
import { FaInstagram, FaTelegram, FaLinkedin, FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col my-14 rounded-3xl items-center p-8">
      {/* هدر */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">تماس با ما</h1>
        <p className="mt-2 text-gray-500">هر سوال یا پیشنهادی دارید، با ما در ارتباط باشید</p>
      </header>

      <main className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-6xl">
        {/* فرم تماس */}
        <form className="flex-1 min-w-[300px] bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">فرم تماس</h2>
          
          <label htmlFor="name" className="block font-medium mb-1 text-gray-700">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            placeholder="نام شما"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition"
          />

          <label htmlFor="email" className="block font-medium mb-1 text-gray-700">ایمیل</label>
          <input
            type="email"
            id="email"
            placeholder="ایمیل شما"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition"
          />

          <label htmlFor="message" className="block font-medium mb-1 text-gray-700">پیام</label>
          <textarea
            id="message"
            rows={5}
            placeholder="پیام شما"
            className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            ارسال پیام
          </button>
        </form>

        {/* اطلاعات تماس */}
        <div className="flex-1 min-w-[250px] flex flex-col gap-6">
          <div className="bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-2xl p-6 shadow-md flex items-center gap-3">
            <FaEnvelope className="text-orange-400 w-6 h-6" />
            <div>
              <h3 className="text-gray-800 font-semibold">ایمیل</h3>
              <p className="text-gray-600">info@domain.com</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-2xl p-6 shadow-md flex items-center gap-3">
            <FaPhone className="text-orange-400 w-6 h-6" />
            <div>
              <h3 className="text-gray-800 font-semibold">تلفن</h3>
              <p className="text-gray-600">+98 912 345 6789</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-2xl p-6 shadow-md flex items-center gap-3">
            <FaFax className="text-orange-400 w-6 h-6" />
            <div>
              <h3 className="text-gray-800 font-semibold">فکس</h3>
              <p className="text-gray-600">+98 21 1234 5678</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-2xl p-6 shadow-md flex items-center gap-3">
            <FaMapMarkerAlt className="text-orange-400 w-6 h-6" />
            <div>
              <h3 className="text-gray-800 font-semibold">آدرس</h3>
              <p className="text-gray-600">تهران، خیابان مثال، پلاک ۱۲۳</p>
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="bg-white/20 backdrop-blur-md border border-gray-300/40 rounded-2xl p-6 shadow-md flex items-center gap-4 justify-center">
            <a href="#" className="text-gray-800 hover:text-orange-400 transition"><FaInstagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-800 hover:text-orange-400 transition"><FaTelegram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-800 hover:text-orange-400 transition"><FaLinkedin className="w-6 h-6" /></a>
          </div>
        </div>
      </main>
    </div>
  );
}
