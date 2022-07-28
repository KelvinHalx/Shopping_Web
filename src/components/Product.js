import React, { useState } from 'react'

function Product() {
const [products, setProducts] = useState([
    {
        id: 1,
        title: "Check Textured Coat",
        category: "Coat",
        price: "175",
        tags: "coat check textured camel brown long sleeves buttoned cuffs",
      },
      {
        id: 2,
        title: "Contrast Check Coat",
        category: "Coat",
        price: "155",
        tags: "coat camel black grey marl lapel collar hip flap pockets",
      },
      {
        id: 3,
        title: "White Coat",
        category: "Coat",
        price: "125",
        tags: "coat camel white short sleeves double-breasted button",
      },
      {
        id: 4,
        title: "Basic Hoodie",
        category: "Hoodie",
        price: "55",
        tags: "hoodie solid plain purple long baggy hood",
      }
]);
const [search, setSearch] = useState("");
const searchProducts = products.filter((product) => {
    if (
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    ) {
      return product;
    }
  });
  return (
    <div>
        <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      {products.map((product) => (
          <div className="product">
            <h6>{product.title}</h6>
            <h6>{product.category}</h6>
            <h6>{product.price}</h6>
            <h6>{product.tags}</h6>
          </div>))
      }
    </div>
  )
}

export default Product
