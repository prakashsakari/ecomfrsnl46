import { useState } from "react";
import { userLogin } from '../../api/login';
import { useNavigate } from "react-router-dom";

export const AuthLogin = () => {

    const [form, setForm] = useState({number: '', password: ''});

    const navigate = useNavigate();

    const onTestLoginClick = async () => {
        const data = await userLogin({number: "98760432342", password: "123456"})
        if (data.token){
            navigate('/');
        }
    }

    const onLoginClick = async () => {
        const data = await userLogin({number: form.number, password: form.password})
        if (data.token){
            navigate('/');
        }
    }

    return (
        <div className="bg-slate-50 drop-shadow-md rounded-lg flex flex-col gap-4 px-3 py-4 w-[400px]">
            <h3 className="text-slate-900 font-bold text-center text-xl">Login</h3>
            <div className="flex flex-col gap-3">
                    <div>
                        <div className="flex gap-2">
                            <label>Enter Number *</label>
                            <input value={form.number} onChange={(e) => setForm({...form, number:e.target.value})} className="border border-slate-900" placeholder="9876543210" />
                        </div>
                        <div className="flex gap-2">
                            <label>Enter Password *</label>
                            <input value={form.password} onChange={(e) => setForm({...form, password:e.target.value})} className="border border-slate-900" placeholder="*********" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className=" py-2 bg-slate-900 text-slate-50 rounded-md hover:opacity-85" onClick={onLoginClick}>Login</button>
                        <button className="py-2 border-slate-900 border text-slate-900 rounded-md hover:opacity-85" onClick={onTestLoginClick}>Login with Test credentials</button>
                    </div>
                <div>
                    <button className="text-slate-900 underline hover:opacity-85">Create account</button>
                </div>
            </div>
        </div>
    )
}