import React, { useState } from "react";
import Modal from "react-modal";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import ReactModal from "react-modal";

// function handleClick(plantName) {
//   alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
// }

function PlantItem({ id, cover, name, water, light, price }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    ReactModal.defaultStyles.content = null;
    ReactModal.defaultStyles.overlay = null;
  }

  return (
    <li key={id} className="lmj-plant-item">
      <span className="lmj-plant-item-price">{price}€</span>
      <img
        className="lmj-plant-item-cover"
        src={cover}
        alt={`${name} cover`}
        onClick={openModal}
      />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
      <Modal isOpen={modalIsOpen}>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Informations complémentaires sur {name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="btn-modal" onClick={() => setModalIsOpen(false)}>
              Fermer
            </button>
          </div>
        </div>
      </Modal>
    </li>
  );
}

export default PlantItem;
