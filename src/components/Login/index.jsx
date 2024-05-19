export const Login = () => {
    return (
        <div className="bg-slate-50 drop-shadow-md rounded-lg flex flex-col gap-4 px-3 py-4">
            <h3 className="text-slate-900 font-bold">Login</h3>
            <div>
                <div>
                    <div>
                        <label>Enter Number *</label>
                        <input placeholder="9876543210" />
                    </div>
                    <div>
                        <label>Enter Password *</label>
                        <input placeholder="*********" />
                    </div>
                </div>
                <div>
                    <button className="bg-slate-900 text-slate-50 rounded-sm hover:opacity-85">Login</button>
                    <button className="border-slate-900 text-slate-900 rounded-sm hover:opacity-85">Login with Test credentials</button>
                </div>
                <div>
                    <button className="text-slate-900 underline hover:opacity-85">Create account</button>
                </div>
            </div>
        </div>
    )
}