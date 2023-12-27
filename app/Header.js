"use client";
import React from "react";
import Link from "next/link";
import useCart from "./(store)/store";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  return (
    <header className="sticky top-0 p-6 bg-white bg-yellow-200 border-b-2 border-solid border-indigo-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
      <Link href={"/"}>
        <h1 className="uppercase cursor-pointer hover:scale-110">
          Twisted Stitch
        </h1>
      </Link>
      <div className="relative cursor-pointer group grid place-iems-center">
        {cartItems.length > 0 && (
          <div className="absolute top-0 aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center bg-indigo-800 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2">
            <p className="text-sm">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-bag-shopping"></i>
      </div>
    </header>
  );
}
