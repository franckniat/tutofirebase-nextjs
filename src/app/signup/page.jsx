"use client";
import React, {useContext,useRef} from "react";
import Navbar from "../components/Navbar";
import {UserContext} from "@/context/Authcontext";
import { useRouter } from 'next/navigation';

export default function signup(){
    const router = useRouter();

    const {signUp, user} = useContext(UserContext);

    const errMsg = useRef();
    const formpass = useRef();
    const formcpass = useRef();
    const formEmail = useRef();

    const registerUser =  () => {
        try {
        errMsg.current.innerHTML = "";
        if(formpass.current.value.length < 8){
            errMsg.current.innerHTML = "Password must be at least 8 characters";
            return false
        }
        else if(formcpass.current.value !== formpass.current.value){
            errMsg.current.innerHTML = "Passwords do not match";
            return false
        }
        else{
            errMsg.current.innerHTML = "";
        }
            const cred =  signUp(formEmail.current.value, formpass.current.value)
            console.log(cred);
        } catch (error) {
            console.log("error");
        }
    }
    
    return(
        <main>
            <Navbar/>
            <section className="grid place-items-center mt-5 md:mt-10 lg:mt-16">
                <h1 className="text-xl m-4 font-bold">S'inscrire</h1>
                <form className="flex flex-col" onSubmit={registerUser}>
                    <input type="email" className="w-full border-b-2 border-gray-800 px-2 py-4 outline-none my-2 placeholder:text-gray-600 focus:border-green-600" placeholder="Email" ref={formEmail} onChange={(e)=>{errMsg.current.innerHTML = ""}}/>
                    <input type="password" className="w-full border-b-2 border-gray-800 px-2 py-4 outline-none my-2 placeholder:text-gray-600 focus:border-green-600" placeholder="Password" ref={formpass}/>
                    <input type="password" className="w-full border-b-2 border-gray-800 px-2 py-4 outline-none my-2 placeholder:text-gray-600 focus:border-green-600" placeholder="Confirm a password" ref={formcpass}/>
                    <p ref={errMsg} className="text-sm text-blue-600"></p>
                    <button type="submit" className="px-5 py-3 bg-gray-200 text-black my-4 w-full hover:bg-gray-300 rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-green-600">Submit</button>
                    <button className="w-full flex justify-center items-center px-5 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                    <span className="ml-2">Sign up with Google</span>
                </button>
                </form>
            </section>
        </main>
        
    )
}