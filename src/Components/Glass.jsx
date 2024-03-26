import React from 'react'
import { useState } from 'react'

const Glass = () => {

    const [eye, seteye] = useState("icons/view.svg");
    const [form, setform] = useState({ site: "", username: "", password: "" })

    const changeicon = () => {
        if (eye === "icons/view.svg") {
            seteye("icons/noview.svg");
        }
        else {
            seteye("icons/view.svg");
        }
    }

    const savepassword = () => {

    }

    let ans = "http://localhost:5173"

    return (
        <>
            <div className="mt-20 bg-cover bg-center flex items-center justify-center">  {/*this and following division are for glass effect, rest everything is from manager */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-lg shadow-lg">
                    <div className="container mx-auto max-w-4xl px-40 py-16">
                        <div className='font-bold text-4xl text-center text-white'>
                            <span className='text-green-700'>&lt;</span>
                            Pass
                            <span className='text-green-700'>OP/&gt;</span>
                        </div>
                        <div className='flex flex-col text-black px-4 gap-3 items-center'>
                            <p className='text-green-700 text-center'>Your very own Password Manager</p>
                            <input value={form.site} placeholder='Enter Wbesite URL' className='rounded-full px-4 py-1 border border-green-500 w-full' type="text" id='' name='' />
                            <div className='flex w-full justify-between gap-4'>
                                <input value={form.username} placeholder='Enter user ID' className='rounded-full px-4 py-1 border border-green-500 w-full' type="text" id='' name='' />
                                <div className='relative w-full'>
                                    <input value={form.password} placeholder='Enter Password' className='rounded-full px-4 py-1 border border-green-500 w-full' type="text" id='' name='' />
                                    <span className='absolute right-0 top-[5px] px-2 cursor-pointer' onClick={changeicon}><img src={`${eye}`} alt="" /></span>
                                </div>
                            </div>
                            <button onClick={savepassword} className='border-2  rounded-full flex justify-center px-6 py-2 bg-green-500 items-center w-fit hover:bg-green-300 gap-2'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                                    trigger="hover">
                                </lord-icon>
                                Add Button</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Glass
