import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../form/Input";
import styles from "../../form/Form.module.css";

// contexts
import { Context } from "../../../context/UserContext";

function Login() {
    const [user, setUser] = useState({});
    const { login } = useContext(Context);

    function onChangeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        login(user);
    }
    return (
        <section className={styles.form_container}>
            <h1>Login</h1>

            <form onSubmit={submitHandler}>
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={onChangeHandler}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={onChangeHandler}
                />
                <input type="submit" value="Entrar" />
            </form>
            <p>
                Não tem conta? <Link to="/register">Clique aqui</Link>
            </p>
        </section>
    );
}

export default Login;
