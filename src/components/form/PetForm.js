import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import formStyles from "./Form.module.css";

function PetForm({ submitHandler, petData, btnText }) {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const species = ["Cachorro", "Gato"];
  const colors = [
    "Branco",
    "Preto",
    "Cinza",
    "Caramelo",
    "Bicolor",
    "Tricolor",
  ];

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }

  function changeHandler(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }

  function optionChangeHandler(e) {
    setPet({
      ...pet,
      [e.target.name]: e.target.options[e.target.selectedIndex].text,
    });
  }

  function submit(e) {
    e.preventDefault();
    console.log(pet);
    submitHandler(pet);
  }

  return (
    <form className={formStyles.form_container} onSubmit={submit}>
      <div className={formStyles.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Fotos"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome"
        type="text"
        name="name"
        placeholder="Digite o nome do Pet"
        handleOnChange={changeHandler}
        value={pet.name || ""}
      />
      <Select
        text="Espécie"
        name="specie"
        options={species}
        handleOnChange={optionChangeHandler}
        value={pet.specie || ""}
      />
      <Select
        text="Sexo"
        name="gender"
        options={["Macho", "Fêmea"]}
        handleOnChange={optionChangeHandler}
        value={pet.gender || ""}
      />
      <Input
        text="Idade"
        type="number"
        name="age"
        placeholder="Digite a idade do Pet"
        handleOnChange={changeHandler}
        value={pet.age || ""}
      />
      <Input
        text="Peso"
        type="number"
        name="weight"
        placeholder="Digite o peso do Pet"
        handleOnChange={changeHandler}
        value={pet.weight || ""}
      />
      <Select
        text="Cor"
        name="color"
        options={colors}
        handleOnChange={optionChangeHandler}
        value={pet.color || ""}
      />
      <input type="submit" value={btnText} />
    </form>
  );
}

export default PetForm;
