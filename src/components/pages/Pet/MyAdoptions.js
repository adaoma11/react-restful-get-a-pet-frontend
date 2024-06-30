import api from "../../../utils/api";
import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";

import RoundedImage from "../../layout/RoundedImage";

function MyAdoptions() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer: ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  console.log(pets);

  return (
    <section>
      <div className={styles.petlist_header}>
        <h1>Minhas adoções</h1>
      </div>

      <div className={styles.petlist_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.petlist_row} key={pet._id}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />

              <span className="bold">{pet.name}</span>

              <div className={styles.contacts}>
                <p>
                  Entre em contato com{" "}
                  <span className="bold">{pet.user.name}</span>
                </p>
                <p>
                  no tel. <span className="bold">{pet.user.phone}</span> para
                  combinar a visita
                </p>
              </div>

              <div className={styles.actions}>
                {pet.available ? (
                  <p>Adoção em andamento</p>
                ) : (
                  <p>Adoção concluída</p>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p>Você ainda não fez nenhuma adoção</p>}
      </div>
    </section>
  );
}

export default MyAdoptions;
