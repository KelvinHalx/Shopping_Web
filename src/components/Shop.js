import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "overwatch",
      price: 20,
    },
    {
      id: 2,
      name: "minecraft",
      price: 32,
    },
    {
      id: 3,
      name: "fortnite",
      price: 51,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (product) => {
      setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(hardCopy);
  };

  const listItems = items.map((product) => (
    <div key={product.id}>
      {`${product.name}: Ksh${product.price}`}
      <input type="submit" value="add" onClick={() => addToCart(product)} />
    </div>
  ));

  const cartItems = cart.map((product) => (
    <div key={product.id}>
      {`${product.name}: Ksh${product.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(product)} />
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItems}</div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: Ksh{cartTotal}</div>
    </div>
  );
};

export default Shop;