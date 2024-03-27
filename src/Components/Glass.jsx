import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Glass = () => {

    const [eye, seteye] = useState("icons/noview.svg");
    const [form, setform] = useState({ site: "", username: "", password: "", id: uuidv4() })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const passwordRef = useRef()

    const copied = async (text) => {
        let value = text + " copied to clipboard"
        toast.success(value, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        await navigator.clipboard.writeText(text)
    }

    const changeicon = () => {
        if (eye === "icons/noview.svg") {
            seteye("icons/view.svg");
            passwordRef.current.type = "text"
        }
        else {
            seteye("icons/noview.svg");
            passwordRef.current.type = "password"
        }
    }

    const savepassword = () => {
        setpasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        setform({ site: "", username: "", password: "" })
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const delpasswrd = (e, id) => {
        let newpass = passwordArray.filter((item) => {
            return item.id != id;
        })
        setpasswordArray(newpass)
        toast.success("Item deleted sccessfully", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        localStorage.setItem("passwords", JSON.stringify(newpass))
    }

    const editpasswrd = (e, id) => {
        setform(passwordArray.filter(item => item.id === id)[0])
        let newpass = passwordArray.filter((item) => {
            return item.id != id;
        })
        setpasswordArray(newpass)
        localStorage.setItem("passwords", JSON.stringify(newpass))
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light" />

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
                                <input value={form.username} placeholder='Enter user ID' className='rounded-full px-4 py-1 border border-wheat-100 w-full' type="text" id='username' name='username' onChange={handlechange} />
                                <div className='relative w-full'>
                                    <input value={form.password} ref={passwordRef} placeholder='Enter Password' className='rounded-full px-4 py-1 border border-wheat-100 w-full break-all pr-10' type="password" id='password' name='password' onChange={handlechange} />
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
                        <h2 className='text-emerald-600 font-bold flex items-center justify-center my-4'>STORED PASSWORDS</h2>
                        <div className="passwords max-h-72 overflow-y-auto">
                            {passwordArray.length === 0 && <div className='text-emerald-600'><center>No passwords stored yet</center></div>}
                            {passwordArray.length != 0 && <table className="table-auto w-full text-white rounded-lg overflow-hidden">
                                <thead className='bg-emerald-500'>
                                    <tr>
                                        <th className='min-w-32'>Website</th>
                                        <th className='min-w-32'>Username</th>
                                        <th className='min-w-32'>Password</th>
                                        <th className='min-w-20'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='text-black'>
                                    {passwordArray.map((item) => {
                                        return <tr key={item.id}>
                                            <td className='p-2 max-w-[300px] break-all'>
                                                <div className='flex justify-between'>
                                                    <div className="txt"><a href={item.site} target='_blank'>{item.site}</a></div>
                                                    <div className="img cursor-pointer"><img src="icons/copy1.svg" className='min-w-6 min-h-6 mx-2' onClick={() => { copied(item.site) }} /></div>
                                                </div>
                                            </td>
                                            <td className='max-w-[250px] break-all'>
                                                <div className='flex justify-between'>
                                                    <div>{item.username}</div>
                                                    <div className="img cursor-pointer"><img src="icons/copy1.svg" className='min-w-6 min-h-6 mx-2' onClick={() => { copied(item.username) }} /></div>
                                                </div>
                                            </td>
                                            <td className='max-w-[250px] break-all'>
                                                <div className='flex justify-between'>
                                                    <div>{item.password}</div>
                                                    <div className="img cursor-pointer"><img src="icons/copy1.svg" className='min-w-6 min-h-6 mx-2' onClick={() => { copied(item.password) }} /></div>
                                                </div>
                                            </td>
                                            <td className='max-w-20'>
                                                <div className='flex justify-around items-center max-w-20'>
                                                    <div className="icons1" onClick={(e) => { delpasswrd(e, item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/drxwpfop.json"
                                                            stroke="bold"
                                                            trigger="morph"
                                                            state="morph-trash-in">
                                                        </lord-icon>
                                                    </div>
                                                    <div className="icon2" onClick={(e) => { editpasswrd(e, item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/wuvorxbv.json"
                                                            trigger="hover"
                                                            state="hover-line"
                                                            stroke="bold">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
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
