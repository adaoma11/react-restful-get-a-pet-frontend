import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../form/Input";
import styles from "../../form/Form.module.css";

// contexts
import { Context } from "../../../context/UserContext";

function Register() {
    const [user, setUser] = useState({});
    const { register } = useContext(Context);

    function onChangeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        register(user);
    }

    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={onChangeHandler}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={onChangeHandler}
                />
                <Input
                    text="Telefone"
                    type="phone"
                    name="phone"
                    placeholder="(99) 99999-9999"
                    handleOnChange={onChangeHandler}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite uma senha"
                    handleOnChange={onChangeHandler}
                />
                <Input
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a senha"
                    handleOnChange={onChangeHandler}
                />
                <input type="submit" value="cadastrar" />
            </form>
            <p>
                Já tem conta? <Link to="/login">Faça login</Link>
            </p>
        </section>
    );
}

export default Register;
