import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyPets() {
  const [pets, setPets] = useState([]);

  return (
    <section>
      <h1>Meus Pets</h1>
      <Link to="/pet/add">Cadastrar Pet</Link>

      <div>
        {pets.length > 0 && <p>Meus Pets cadastrados</p>}
        {pets.length === 0 && <p>Ainda não existem Pets cadastrados</p>}
      </div>
    </section>
  );
}

export default MyPets;
