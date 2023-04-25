import React, { useState } from "react";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import Modal from "react-modal";

// function handleClick(plantName) {
//   alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
// }

function PlantItem({ id, cover, name, water, light, price }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <li key={id} className="lmj-plant-item">
        <span className="lmj-plant-item-price">{price}€</span>
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
          onClick={openModal} // Ouvre la modale lorsque l'image est cliquée
        />
        {name}
        <div>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
        <button className="">Ajouter au panier</button>
      </li>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Hello Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          perferendis suscipit officia recusandae, eveniet quaerat assumenda id
          fugit, dignissimos maxime non natus placeat illo iusto! Sapiente
          dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos
          molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae
          enim incidunt porro fuga ea.
        </p>
        <button onClick={closeModal}>CLOSE</button>
      </Modal>
    </>
  );
}

export default PlantItem;
