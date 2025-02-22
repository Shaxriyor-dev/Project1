import React from "react";
import logo from "../assets/imgs/logo.png";
function Info() {
  return (
    <div className="h-[100%]  px-20 bg-gradient-to-r from-[#34495E] to-gray-900 fixed flex items-baseline gap-10 justify-between">
      <div>
      <div className="flex items-center gap-2 py-7">
        <div className="flex items-center gap-2 py-7">
        <img className="h-[90px]" src={logo} alt="" />
        <a
          className="font-[Poppins] text-[34px] text-white font-bold"
          href="/"
        >
          Talim uz
        </a>
        </div>
        </div>
        <div className="text-white">
        <p  className="text-2xl font-[Poppins] font-[600] mt-4"> ✨ Kelajak sari bilim bilan</p>
        <p className="font-[Poppins] font-medium mt-5 text-base/8 text-[17px] w-[75rem]">
          "Bilim Sari Qadam" — bu zamonaviy ta'lim texnologiyalariga asoslangan
          o'quv platformasi bo'lib, o'quvchilarga sifatli va samarali bilim
          olish imkonini yaratadi. 🖤 Sayt orqali o'quvchilar fanlarni o'rganish,
          interaktiv darslarda ishtirok etish va o'z bilimlarini sinab
          ko'rishlari mumkin. Platforma o'quvchilarga quyidagi imkoniyatlarni
          taqdim etadi:  Oson va tezkor foydalanish: Sayt orqali istalgan
          vaqtda va istalgan joydan darslarga ulanish imkoniyati.  Boy ta'lim
          resurslari: Matnli darsliklar, videodarslar, testlar, interaktiv
          mashqlar va amaliy topshiriqlar.❔
          ko'rishlari mumkin. Platforma o'quvchilarga quyidagi imkoniyatlarni
          taqdim etadi: 🖤 Oson va tezkor foydalanish: Sayt orqali istalgan
          vaqtda va istalgan joydan darslarga ulanish imkoniyati.  Boy ta'lim
          resurslari: Matnli darsliklar, videodarslar, testlar, interaktiv
          mashqlar va amaliy topshiriqlar.
          vaqtda va istalgan joydan darslarga ulanish imkoniyati.  Boy ta'lim
          resurslari: Matnli darsliklar, videodarslar, testlar, interaktiv
          mashqlar va amaliy topshiriqlar.❔
        </p>
        </div>
      </div>
      <div>
         
      </div>
     </div>
  );
}

export default Info;
