import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  function removePlantFromCart(index) {
    return function (prevCart) {
      const cartCopy = [...prevCart];
      const newAmount = cartCopy[index].amount - 1;
      if (newAmount === 0) {
        cartCopy.splice(index, 1);
      } else {
        cartCopy[index] = {
          ...cartCopy[index],
          amount: newAmount,
        };
      }
      return cartCopy;
    };
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div className="basket-list" key={`${name}-${index}`}>
                <button
                  className="btn-remove"
                  onClick={() => updateCart(removePlantFromCart(index))}
                >
                  &#10005;
                </button>
                {amount} {name} {price}€{" "}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button className="btn-clear" onClick={() => updateCart([])}>
            Vider le panier
          </button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
