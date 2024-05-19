import { AuthLogin } from "../../components/AuthLogin";
import { Header } from "../../components/Header";

export const Login = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center mt-40">
            <AuthLogin />
            </div>
            
        </div>

        
    )
}