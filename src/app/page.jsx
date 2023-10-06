"use client";
import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import {UserContext} from "@/context/Authcontext";

export default function Home() {
  const {user} = useContext(UserContext);
  console.log()
  return (
    <main>
      <Navbar/>

      <section className="pt-24 md:pt-30 lg:pt-32">
        <h1 className="text-3xl font-medium p-5">Home page</h1>
        <p className="text-xl font-sans px-5">
          Hello <br />
          That's a home page, here we will see if your credentials are correctly set.
        </p>

      </section>
    </main>
  )
}
