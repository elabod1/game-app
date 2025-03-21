import { useState } from "react";
import './LoginPage.css'

function LoginPage({ onLogin }) { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username === "abdulrezek" && password === "2004") {
            onLogin(); 
        } else {
            setError("username or password is incorrect");
        }
    };

    return (
        <div className="hero-dev  bg-gray-100 dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-900  shadow-lg prim-dev">
                <h2 className=" text-gray-900 dark:text-gray-200">Login</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="username-input dark:bg-gray-700 dark:text-white"
                    /> 

                    </div>
                    <div>
                    <input
                        type="password"
                        placeholder="Password "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="password-input dark:bg-gray-700 dark:text-white"
                    />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-blue-500 text-white hover:bg-blue-600"
                    >
                        login 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
