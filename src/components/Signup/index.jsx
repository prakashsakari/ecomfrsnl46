export const Signup = () => {
    return (
        <div className="bg-slate-50 drop-shadow-md rounded-lg flex flex-col gap-4 px-3 py-4">
            <h3 className="text-slate-900 font-bold">Signup/Register</h3>
            <div>
                <div>
                    <div>
                        <label>Enter Name *</label>
                        <input placeholder="Praksh Sakari" />
                    </div>
                    <div>
                        <label>Enter Email *</label>
                        <input placeholder="p@gmail.com" />
                    </div>
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
                    <button className="bg-slate-900 text-slate-50 rounded-sm hover:opacity-85">Signup</button>
                </div>
                <div>
                    <button className="text-slate-900 underline hover:opacity-85">Login</button>
                </div>
            </div>
        </div>
    )
}