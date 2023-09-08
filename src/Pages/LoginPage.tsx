import {ChangeEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthStore from "../store/AuthStore.tsx";
import './login.css'


export default function LoginPage() {
    const authStoreValue = useContext(AuthStore);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [blurred, setBlurred] = useState(false);

    function handleUserNameChange(event: ChangeEvent<HTMLInputElement>): void {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value);
    }

    function onEyeClick(): void {
        setBlurred(!blurred);
    }

    const onLoginClick = () => {
        if (username === "admin" && password === "admin") {
            authStoreValue?.setIsAuthenticated(true);
            navigate("/smn")
            setError(false);
        }
        setError(true);
    }
    return (
        <>
            <div className="background-blur"></div>
            <div className="background-unblur"></div>
            <div className="login-container">
                <div className="test">
                    <div className="login-bc">
                        <div>
                            <label htmlFor={"username"}>Username:</label>
                            <input id={"username"} type={"text"} onChange={handleUserNameChange}/>
                        </div>
                        <div>
                            <label htmlFor={"password"}>Password:</label>
                            <input type={blurred ? "text" : "password"} onChange={handlePasswordChange}/>
                            <button className={"eye-change"} onClick={onEyeClick}>
                                <img alt={"eye"} src={blurred ? "src/img/crossed-eye.png" : "src/img/eye.png"} width="10px"/>
                            </button>
                        </div>
                        {error && <div className="wrongData">Username or password incorrect</div>}
                        <button onClick={onLoginClick}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}