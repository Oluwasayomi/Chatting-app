import { useState} from "react";

export default function Register() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-green-400 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
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
                    Register
                </button>
            </form>
        </div>
    );
};