import Nav from "../components/Nav";
import style from "../styles/loginPage.module.css";
import LogoBox from "../components/LogoBox";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);

    function toggleLogin() {
        setShowLogin(function (showLogin) {
            return !showLogin;
        });
    }

    return (
        <div className={style.loginPage}>
            <Nav />
            <main className={style.loginSection}>
                <div>
                    <div className={style.imageContainer}>
                        <img src="./login.jpg" alt="loading.." />
                    </div>
                    <div className={style.formContainer}>
                        <LogoBox />

                        {showLogin && (
                            <>
                                <LoginForm />
                                <button
                                    className={style.toggleForm}
                                    onClick={toggleLogin}
                                >
                                    Do not have account ? sign up
                                </button>
                            </>
                        )}

                        {!showLogin && (
                            <>
                                <SignUpForm />
                                <button
                                    className={style.toggleForm}
                                    onClick={toggleLogin}
                                >
                                    Already have account ? login
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
