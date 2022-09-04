import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
   
    const users = [{ username: "admin", password: "admin" }];

    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        }
    };

    return (
        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Login;