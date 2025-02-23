import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Loginim = ()=>{
    const [Name , Setname] = useState('');
    const  [pass , Setpass] = useState('');
    const [eroer , Seteroer] = useState('');
    const navigate = useNavigate();

    const logins = (e) =>{
      e.preventDefault();

      if(Name === 'admin@gmail.com' && pass === '123456'){
         navigate('/admin')
      }else{
        Seteroer('Sizning loginingiz hato qayta urign!!!')
      }

      if(Name === 'xodim@gmail.com' && pass === '12345678'){
         navigate('/admin')
      }else{
        Seteroer('Sizning loginingiz hato qayta urign!!!')
      }
      if(Name === 'muhammadyusuf@gmail.com' && pass === '12345678'){
         navigate('/admin')
      }else{
        Seteroer('Sizning loginingiz hato qayta urign!!!')
      }
      if(Name === 'rustam@gmail.com' && pass === '12345678'){
         navigate('/admin')
      }else{
        Seteroer('Sizning loginingiz hato qayta urign!!!')
      }
    };

    return (
    <div className="flex h-[100%] flex-col justify-center ml-[53%]  items-center">
      <div className="h-[420px] w-[930px] bg-[#ffffff] text-[#34495E] border rounded-[5px] ">
        <div className="h-[90px]  bg-gradient-to-r from-[#34495E] to-gray-900 flex justify-between items-center p-10">
          <p className="text-3xl font-bold font-[Poppins] text-white">
            {" "}
            Kirish Ta'lim uz
          </p>
          <a
            className="font-[Poppins] text-white text-[18px] underline "
            href="#"
          >
            Tizimda ro‘yxatdan o‘tmaganmisiz?
          </a>
        </div>
       
        {eroer && (
          <div className="bg-red-100 font-[Poppins] fixed w-232 text-red-700 p-2 rounded mb-4 text-center">
            {eroer}
          </div>
        )}
        <form className="w-[490px] mt-4  p-8" onSubmit={logins}>
          <div className="mb-7">
            <input
              type="text"
              placeholder="Login"
              value={Name}
              onChange={(e) => Setname(e.target.value)}
              required
              className="w-full h-[56px] p outline font-[Poppins] text-[18px] border border-gray-300 rounded"
            />
          </div>
          <div className="mb-11">
            <input
              type="password"
              placeholder="Parol"
              value={pass}
              onChange={(e) => Setpass(e.target.value)}
              required
              className="w-full h-[56px] p outline font-[Poppins] text-[18px] border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-500 font-[Poppins]  text-white h-[50px] w-[200px] rounded hover:bg-blue-600 transition"
          >
            Kirish
          </button>
        </form>
        </div>
      </div>
  );
}

export default Loginim;
