import React from "react";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center h-[65px] px-5 text-black bg-white w-full fixed top-0 border-b border-gray-100">
            <Link href="/" className="font-bold px-5 py-3 hover:bg-gray-200 rounded-lg ">
               Home
            </Link>
            <Link href="/signin" className="font-bold px-5 py-3 hover:bg-gray-200 rounded-lg ">
                Sign In
            </Link>
            <Link href="/signup" className="font-bold px-5 py-3 hover:bg-gray-200 rounded-lg ">
                Sign Up
            </Link>
        </nav>
    )
}