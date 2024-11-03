import { useState } from "react"

function LoginBox(){
    const [email, setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) => {
        console.log({email});
    }

    return(
        <>
            <div className="flex justify-center items-center bg-slate-600 bg opacity-100 min-h-[815px] bg-opacity-30 ">
                    <div className="flex flex-col justify-center items-center h-[500px] w-[35%] bg-gradient-to-r from-indigo-950 via-cyan-950 to-violet-950 rounded-xl font-extrabold text-rose-100 text-2xl">
                            Enter login details here
                            <div className="flex flex-col justify-center items-center text-indigo-950 text-sm">
                            <label className="text-rose-100 p-3 " htmlFor="email">Username</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter username"></input>
                            <label className="text-rose-100 p-3" htmlFor="password">Password</label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter password"></input>
                            </div>
                            <button className="text-lg p-2 m-4 bg-gradient-to-r from-indigo-800 via-indigo-950 to-black  rounded-xl">Login</button>
                    </div>
            </div>
        </>
    )
}


export default LoginBox


