import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api";

// components
import styles from "./Dashboard.module.css";
import RoundedImage from "../../../components/layout/RoundedImage";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

function MyPets() {
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      })
      .catch((err) => {});
  }, [token]);

  return (
    <section>
      <div className={styles.petlist_header}>
        <h1>Meus Pets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
        {console.log(pets)}
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.petlist_row} key={pet._id}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    {pet.adopter && (
                      <button className={styles.conclude_btn}>
                        Concluir adoção
                      </button>
                    )}
                    <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                    <button>Excluir</button>
                  </>
                ) : (
                  <p>Adotado</p>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p>Ainda não existem Pets cadastrados</p>}
      </div>
    </section>
  );
}

export default MyPets;
