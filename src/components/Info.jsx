import React from "react";
import logo from "../assets/imgs/logo.png";
function Info() {
  return (
    <div className="h-[100%]  px-20 fixed flex items-baseline gap-10 justify-between">
      <div>
        <div className="flex items-center gap-2 py-2">
          <div className="flex items-center gap-2 py-7">
            <img className="h-[90px]" src={logo} alt="" />
            <a
              className="font-[Poppins] text-[34px] text-black font-bold"
              href="/"
            >
              Talim uz
            </a>
          </div>
        </div>
        <div className="text-black">
          <p className="font-[Gotu] p-3">
            <p className="text-[20px] font-bold">📚 1. Asosiy bo'limlar:</p>
            Bosh sahifa: Yangiliklar, e'lonlar va muhim ma'lumotlar. Biz
            haqimizda: Saytning maqsadi, vazifalari va jamoa haqida ma'lumot.
            O'quv kurslari: Maktab fanlari (Matematika, Fizika, Tarix, Ingliz
            tili va boshqalar) Onlayn kurslar (IT, dizayn, tillar, biznes va
            boshqalar) Sertifikatlar va dars jadvali
          </p>
          <p className="font-[Gotu] p-3">
            <p className="text-[20px] font-bold">
              📚 2. O'qituvchilar va talaba profillari:
            </p>
            O'qituvchilar haqida ma'lumot (ism-familiya, mutaxassisligi,
            tajribasi) Talaba profili (yutuqlar, o'qigan kurslari, baholari)
            Fikr-mulohazalar va reytinglar
          </p>
          <p className="font-[Gotu] p-3">
            <p className="text-[20px] font-bold">
              📅 3. Yangiliklar va e'lonlar:
            </p>
            Ta'lim yangiliklari Seminarlar, vebinarlar va tanlovlar haqidagi
            ma'lumotlar Imtihon vaqtlari va grantlar haqida e'lonlar
          </p>
          <p className="font-[Gotu] p-3">
            <p className="text-[20px] font-bold">📖 4. Resurslar:</p>
            Darsliklar va ma'ruza matnlari Testlar va amaliy topshiriqlar Video
            darslar va tutoriallar PDF kitoblar va qo'llanmalar
          </p>
          <p className="font-[Gotu] p-3">
            <p className="text-[20px] font-bold">🏆 5. Qo'shimcha xizmatlar:</p>
            Onlayn testlar va baholash tizimi Savol-javob bo'limi (forum yoki
            FAQ) Bloglar va maqolalar Mobil ilova (agar mavjud bo'lsa)
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Info;
