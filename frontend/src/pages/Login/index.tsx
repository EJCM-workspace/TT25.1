import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState<{ email: string; password: string }>({
        email: "iagocesar@ejcm.com.br",
        password: "123456",
    });

    const navigate = useNavigate()
    const { handleLogin } = useAuthContext();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        (async () => {
            const armazenamentoLocal = localStorage.getItem("userData");
            const userData = JSON.parse(armazenamentoLocal ?? '{}');

            if (userData?.email && userData?.password) {
                await handleLogin(userData.email, userData.password);
                navigate('/dashboard')
            }
        })()
    }, [])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                handleLogin(input.email, input.password);
            }}
        >
            <div className="form_control">
                <label htmlFor="user-email">Email:</label>
                <input
                    type="email"
                    id="user-email"
                    name="email"
                    placeholder="example@yahoo.com"
                    aria-describedby="user-email"
                    aria-invalid="false"
                    value={input.email}
                    onChange={handleInput}
                />
                <div id="user-email" className="sr-only">
                    Please enter a valid username. It must contain at least 6 characters.
                </div>
            </div>
            <div className="form_control">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    aria-describedby="user-password"
                    aria-invalid="false"
                    value={input.password}
                    onChange={handleInput}
                />
                <div id="user-password" className="sr-only">
                    your password should be more than 6 character
                </div>
            </div>
            <button className="btn-submit">Submit</button>
        </form>
    );
};

export default Login;
