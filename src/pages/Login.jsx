import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="login_content">
            <h1>Please Login</h1>
            <form>
                <div className="login_form">
                    <input type="text" placeholder="User Name" />Enter User Name:
                    <input type="password" placeholder="Password" autoComplete="False" />Enter Password:
                    <Link className="btn btn-success" to="/home">Login</Link>
                </div>
            </form>
        </div>
    );
}


export default Login;