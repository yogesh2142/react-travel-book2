import Nav from "../components/Nav";
import Logo from "../components/Logo";
import style from "../styles/login.module.css";

function LoginPage() {
    return (
        <div className={style.loginPage}>
            <Nav />
            <main className={style.loginSection}>
                <div>
                    <div className={style.imageContainer}>
                        <img src="./login.jpg" alt="loading.." />
                    </div>
                    <div className={style.formContainer}>
                        <div className="logoBox">
                            <Logo /> <span>TravelBook</span>
                        </div>
                        <form>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>

                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
