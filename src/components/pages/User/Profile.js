import { useState, useEffect } from "react";
import api from "../../../utils/api";
import Input from "../../form/Input";
import styles from "./Profile.module.css";
import formStyles from "../../form/Form.module.css";

function Profile() {
    const [user, setUser] = useState({});
    const [token] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        api.get("/users/checkuser", {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        }).then((response) => {
            setUser(response.data);
        });
    }, [token]);

    function onChangeHandler(e) {}
    function onFileChange(e) {}

    return (
        <section>
            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                <p>Avatar</p>
            </div>

            <form className={formStyles.form_container}>
                <Input
                    text="Imagem"
                    type="file"
                    name="image"
                    handleOnChange={onFileChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={onChangeHandler}
                    value={user.email || ""}
                />
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={onChangeHandler}
                    value={user.name || ""}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite seu telefone"
                    handleOnChange={onChangeHandler}
                    value={user.phone || ""}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={onChangeHandler}
                />
                <Input
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme sua senha"
                    handleOnChange={onChangeHandler}
                />

                <input type="submit" value="Editar" />
            </form>
        </section>
    );
}

export default Profile;
