import React, { useEffect, useState } from 'react';
import data from '../db.json';

const JsonDisplay = () => {
  const [users , Setusers] = useState([]);

  useEffect(()=>{
    Setusers(data)
  } ,[]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 font-[Gotu]">Foydalanuvchilar Ro'yxati : </h1>
      <ul className="space-y-2 flex items-center gap-10">
        {users.map((user) => (
          <li key={user.id} className="p-4 px-8 font-[Gotu] bg-linear-to-r/hsl flex-wrap from-indigo-500 to-teal-400 text-white rounded-lg shadow-sm">
             <p className='mt-1.5'> Name : {user.fstname}</p>
              <p className='mt-1.5'>LastName : {user.lastname}</p>
              <p className='mt-1.5'>Age : {user.age}</p>
              <p className='mt-1.5'>Login : {user.login}</p>
              <p className='mt-1.5'>Password : {user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonDisplay;

