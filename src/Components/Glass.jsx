import React from 'react'
import { useState, useEffect } from 'react'

const Glass = () => {

    const [eye, seteye] = useState("icons/view.svg");
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const changeicon = () => {
        if (eye === "icons/view.svg") {
            seteye("icons/noview.svg");
        }
        else {
            seteye("icons/view.svg");
        }
    }

    const savepassword = () => {
        setpasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form])
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="mt-20 bg-cover bg-center flex items-center justify-center">  {/*this and following division are for glass effect, rest everything is from manager */}
                <div className="bg-white bg-opacity-5 backdrop-blur-md p-10 rounded-lg shadow-lg">
                    <div className="mx-auto max-w-5xl px-20 py-6 max-h-[550px]">
                        <div className='font-bold text-4xl text-center text-white'>
                            <span className='text-emerald-600'>&lt;</span>
                            Pass
                            <span className='text-emerald-600'>OP/&gt;</span>
                        </div>
                        <div className='flex flex-col text-black px-4 gap-3 items-center'>
                            <p className='text-emerald-600 text-center'>Your very own Password Manager</p>
                            <input value={form.site} placeholder='Enter Wbesite URL' className='rounded-full px-4 py-1 border border-wheat-100 w-full' type="text" id='site' name='site' onChange={handlechange} />
                            <div className='flex w-full justify-between gap-4'>
                                <input value={form.username} placeholder='Enter user ID' className='rounded-full px-4 py-1 border border-wheat-100 w-full' type="text" id='' name='username' onChange={handlechange} />
                                <div className='relative w-full'>
                                    <input value={form.password} placeholder='Enter Password' className='rounded-full px-4 py-1 border border-wheat-100 w-full' type="text" id='' name='password' onChange={handlechange} />
                                    <span className='absolute right-0 top-[5px] px-2 cursor-pointer' onClick={changeicon}><img src={`${eye}`} alt="" /></span>
                                </div>
                            </div>
                            <button onClick={savepassword} className='border-2  rounded-full flex justify-center px-6 py-2 bg-wheat-100 items-center w-fit hover:bg-green-300 gap-2'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                                    trigger="hover">
                                </lord-icon>
                                Add Button</button>
                        </div>
                        <h2 className='text-emerald-600 font-bold flex items-center justify-center my-4'>PASSWORDS</h2>
                        <div className="passwords max-h-72 overflow-y-auto">
                            {passwordArray.length === 0 && <div>No passwords to show</div>}
                            {passwordArray.length != 0 && <table className="table-auto w-full text-white rounded-l-lg overflow-hidden">
                                <thead className='bg-emerald-500'>
                                    <tr>
                                        <th>Website</th>
                                        <th>Username</th>
                                        <th className='pr-4'>Password</th>
                                    </tr>
                                </thead>
                                <tbody className='text-black text-center'>
                                    <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                    <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                    <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                    <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                    <tr>
                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                </tbody>
                            </table>}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Glass
