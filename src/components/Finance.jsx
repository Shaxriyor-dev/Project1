import React from "react";
import books from '../assets/imgs/book.jpg';
import lobooks from '../assets/imgs/lobook.jpg';
import { Link } from "react-router-dom";

function Finance() {
  return (
    <div>
       <p className="text-[30px] text-center p-3 font-[Gotu] font-bold">Read a book and expand your world view</p>
    <div className="flex justify-center items-center flex-wrap pt-10 gap-3">
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={lobooks}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Ta'lim uz
            </div>
            <a
              href="#"
              class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              A very good book to read
            </a>
            <p class="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
            </p>
          </div>
           <div className="flex justify-end items-center p-4">
             <Link to={'/book'} className="h-[45px] w-[100px] bg-blue-900 rounded-[10px] text-white font-[Poppins] flex justify-center items-center ">Read</Link>
           </div>
        </div>
      </div>
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={lobooks}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Ta'lim uz
            </div>
            <a
              href="#"
              class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              A very good book to read
            </a>
            <p class="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
            </p>
          </div>
           <div className="flex justify-end items-center p-4">
           <Link to={'/book'} className="h-[45px] w-[100px] bg-blue-900 rounded-[10px] text-white font-[Poppins] flex justify-center items-center ">Read</Link>
           </div>
        </div>
      </div>
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={books}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Ta'lim uz
            </div>
            <a
              href="#"
              class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              A very good book to read
            </a>
            <p class="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
            </p>
          </div>
           <div className="flex justify-end items-center p-4">
           <Link to={'/book'} className="h-[45px] w-[100px] bg-blue-900 rounded-[10px] text-white font-[Poppins] flex justify-center items-center ">Read</Link>
           </div>
        </div>
      </div>
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={books}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Ta'lim uz
            </div>
            <a
              href="#"
              class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              A very good book to read
            </a>
            <p class="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
            </p>
          </div>
           <div className="flex justify-end items-center p-4">
           <Link to={'/book'} className="h-[45px] w-[100px] bg-blue-900 rounded-[10px] text-white font-[Poppins] flex justify-center items-center ">Read</Link>
           </div>
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default Finance;
