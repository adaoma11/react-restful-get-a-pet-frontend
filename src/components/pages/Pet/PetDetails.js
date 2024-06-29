import api from "../../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PetDetails.module.css";

/* hooks */
import useFlashMessage from "../../../hooks/useFlashMessage";

function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get(`/pets/${id}`)
      .then((response) => {
        setPet(response.data.pet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          <div className={styles.pet_details_header}>
            <h1>{pet.name}</h1>

            <p>
              Agende uma visita para conhecê-l
              {pet.gender == "fêmea" ? "a" : "o"}
            </p>
          </div>

          <div className={styles.pet_images}>
            {pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={index}
              />
            ))}
          </div>

          <p>
            <span className="bold">Idade: </span>
            {pet.age} {pet.age > 1 ? "anos" : "ano"}
          </p>

          <p>
            <span className="bold">Sexo: </span>
            {pet.gender}
          </p>

          <p>
            <span className="bold">Cor: </span>
            {pet.color}
          </p>

          <p>
            <span className="bold">Peso: </span>
            {pet.weight} kg
          </p>

          {token ? (
            <button>Solicitar visita</button>
          ) : (
            <p>
              Você precisa estar logado para solicitar uma visita.
              <br />
              <Link to="/login">Clique aqui para fazer login</Link>.
            </p>
          )}
        </section>
      )}
    </>
  );
}

export default PetDetails;
