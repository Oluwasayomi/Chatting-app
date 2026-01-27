import { useContext, useState} from "react";
import axios from 'axios';
import { UserContext } from "./UserContext";
import chat from '/chat.png';

export default function RegisterAndLogin() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        const {data} = await axios.post(url, {username,password});
        setLoggedInUsername(username);
        setId(data.id);
    };

    return (
        <div className="bg-green-400 h-screen flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div className="md:basis-1/2 w-full md:h-full md:bg-amber-300 flex justify-center items-center md:justify-start">
                <img src={chat} alt="chat logo" className="w-64 md:w-auto"/>
            </div>

            <form className="md:basis-1/2 w-full max-w-xl mx-auto mb-12 p-6" onSubmit={handleSubmit}>
                <input value={username} 
                    onChange={ev => setUsername(ev.target.value)} 
                    type="text" 
                    placeholder="username" 
                    className="bg-white block w-full rounded-sm p-2 mb-2 border"/>
                <input value={password} 
                    onChange={ev => setPassword(ev.target.value)} 
                    type="password"
                    placeholder="password" 
                    className="bg-white block w-full rounded-sm p-2 mb-2 border"/>
                <button className="bg-amber-400 block w-full rounded-sm p-2 border">
                    {isLoginOrRegister === 'register' ? 'Register': 'Login'}
                </button>

                <div className="text-center mt-2">
                    {isLoginOrRegister === 'register' && (
                        <div>
                            Already a member?
                            <button className="ml-2 text-amber-900 text-shadow-2xs font-bold" onClick={() => setIsLoginOrRegister('login')}>
                                Login here
                             </button>
                        </div>
                    )}
                    {isLoginOrRegister === 'login' && (
                        <div>
                            Don't have an account?
                            <button className="ml-2 text-amber-900 text-shadow-2xs font-bold" onClick={() => setIsLoginOrRegister('register')}>
                                Register
                             </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};